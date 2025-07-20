"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { chat } from '@/ai/flows/tirthyatra-chatbot';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

const FormSchema = z.object({
  query: z.string().min(1, 'Message cannot be empty.'),
});
type FormValues = z.infer<typeof FormSchema>;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleInitialPrompt = (prompt: string) => {
    if (isLoading) return;
    setMessages((prev) => [...prev, { role: 'user', text: prompt }]);
    processQuery(prompt);
  };
  
  const processQuery = async (queryText: string) => {
    setIsLoading(true);
    try {
      const result = await chat({ query: queryText });
      setMessages((prev) => [...prev, { role: 'bot', text: result.response }]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get a response from the AI assistant.',
      });
      setMessages(prev => prev.slice(0, prev.length -1))
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (isLoading) return;
    setMessages((prev) => [...prev, { role: 'user', text: data.query }]);
    reset();
    await processQuery(data.query);
  };

  const initialPrompts = [
    "What's the story of Ayodhya?",
    "Suggest a 5-day trip to Kashi.",
    "What is the dress code for temples?",
  ];

  return (
    <>
      <div className={cn(
        "fixed bottom-4 right-4 z-[60] transition-transform duration-300",
        isOpen ? "translate-x-[200%]" : "translate-x-0"
      )}>
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="w-8 h-8" />
        </Button>
      </div>

      <div className={cn(
        "fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-[calc(100%+2rem)]"
      )}>
        <Card className="h-[70vh] flex flex-col shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 font-headline text-primary">
              <Bot /> AI Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
             <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-muted-foreground p-4">
                    <p className="mb-4">Welcome! How can I help you plan your spiritual journey?</p>
                     <div className="space-y-2">
                      {initialPrompts.map(prompt => (
                         <Button key={prompt} variant="outline" size="sm" className="w-full text-left h-auto py-2" onClick={() => handleInitialPrompt(prompt)}>
                           {prompt}
                         </Button>
                      ))}
                    </div>
                  </div>
                )}
                {messages.map((message, index) => (
                  <div key={index} className={cn("flex items-start gap-3", message.role === 'user' ? 'justify-end' : '')}>
                    {message.role === 'bot' && <AvatarIcon><Bot className="h-5 w-5"/></AvatarIcon>}
                    <div className={cn(
                      "rounded-lg p-3 max-w-[80%] break-words",
                      message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                    )}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                     {message.role === 'user' && <AvatarIcon><User className="h-5 w-5"/></AvatarIcon>}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <AvatarIcon><Bot className="h-5 w-5"/></AvatarIcon>
                    <div className="rounded-lg p-3 bg-secondary">
                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-full items-center space-x-2">
              <Input
                {...register('query')}
                placeholder="Ask about your trip..."
                autoComplete="off"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

const AvatarIcon = ({children}: {children: React.ReactNode}) => (
  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
    {children}
  </div>
);

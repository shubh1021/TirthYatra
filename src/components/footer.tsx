import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-headline text-primary">TirthYatra</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner in crafting unforgettable spiritual journeys across the sacred lands of India.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold tracking-wide text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#destinations" className="text-muted-foreground hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/trip-planner" className="text-muted-foreground hover:text-primary transition-colors">AI Trip Planner</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold tracking-wide text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <h4 className="font-semibold tracking-wide text-foreground">Stay Updated</h4>
             <p className="mt-4 text-sm text-muted-foreground">Subscribe to our newsletter for the latest travel inspiration and offers.</p>
             <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-background" />
                <Button type="submit" size="icon" variant="default">
                    <ArrowRight />
                </Button>
             </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TirthYatra. All rights reserved. A journey for the soul.</p>
        </div>
      </div>
    </footer>
  );
}

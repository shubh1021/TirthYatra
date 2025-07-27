
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Calendar as CalendarIcon, Search, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchForm() {
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Navigate to trip planner page on search
        router.push('/trip-planner');
    }

  return (
    <div className="bg-background/90 backdrop-blur-md p-6 rounded-lg shadow-2xl border">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-4 items-end">
        
        {/* Destination */}
        <div className="md:col-span-4 lg:col-span-3">
          <Label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">Where to?</Label>
          <div className="relative">
             <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
             <Input id="destination" placeholder="Destination, city" className="pl-10"/>
          </div>
        </div>

        {/* Date */}
        <div className="md:col-span-2 lg:col-span-2">
            <Label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">When?</Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal pl-10">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <span>Pick a date</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="single"
                    />
                </PopoverContent>
            </Popover>
        </div>

        {/* Travel Type */}
        <div className="md:col-span-2 lg:col-span-3">
             <Label htmlFor="travel-type" className="block text-sm font-medium text-foreground mb-2">Travel Type</Label>
             <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="travel-type" placeholder="Family, Couple, Solo..." className="pl-10"/>
             </div>
        </div>
        
        {/* Search Button */}
        <div className="md:col-span-2 lg:col-span-2">
            <Button type="submit" className="w-full h-10">
                <Search className="mr-2 h-5 w-5"/> Search
            </Button>
        </div>
      </form>
    </div>
  );
}

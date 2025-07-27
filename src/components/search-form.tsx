
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Users, BedDouble, User, Users2, CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAllDestinations, type Destination } from '@/lib/destinations';

export function SearchForm() {
    const router = useRouter();
    const [destinations, setDestinations] = useState<Pick<Destination, 'slug' | 'name' | 'image'>[]>([]);
    const [travelType, setTravelType] = useState('');

    useEffect(() => {
        const fetchDests = async () => {
            const allDestinations = await getAllDestinations();
            const mappedDests = allDestinations.map(({ slug, name, image }) => ({ slug, name, image }));
            setDestinations(mappedDests);
        };
        fetchDests();
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Navigate to trip planner page on search
        router.push('/trip-planner');
    }

  return (
    <div className="bg-background/90 backdrop-blur-md p-6 rounded-lg shadow-2xl border">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
        
        {/* Destination */}
        <div className="lg:col-span-4">
          <Label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">Where to?</Label>
          <Select name="destination">
            <SelectTrigger className="w-full pl-10">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <SelectValue placeholder="Select a destination" />
            </SelectTrigger>
            <SelectContent>
                {destinations.map(dest => (
                    <SelectItem key={dest.slug} value={dest.slug}>
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-8 rounded-md overflow-hidden">
                                <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                            </div>
                            <span>{dest.name}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Days */}
        <div className="lg:col-span-2">
            <Label htmlFor="days" className="block text-sm font-medium text-foreground mb-2">How many days?</Label>
            <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="days" type="number" placeholder="e.g., 5" className="pl-10"/>
            </div>
        </div>

        {/* Travel Type */}
        <div className="lg:col-span-2">
            <Label htmlFor="travel-type" className="block text-sm font-medium text-foreground mb-2">Travel Type</Label>
            <Select name="travel-type" onValueChange={setTravelType}>
                <SelectTrigger className="w-full pl-10">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <SelectValue placeholder="Select type"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="solo">
                        <div className="flex items-center gap-2"><User className="w-4 h-4"/>Solo</div>
                    </SelectItem>
                    <SelectItem value="couple">
                        <div className="flex items-center gap-2"><BedDouble className="w-4 h-4"/>Couple</div>
                    </SelectItem>
                    <SelectItem value="custom">
                        <div className="flex items-center gap-2"><Users2 className="w-4 h-4"/>Custom</div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* Number of People (Conditional) */}
        {travelType === 'custom' && (
             <div className="lg:col-span-2 animate-fade-in">
                <Label htmlFor="people" className="block text-sm font-medium text-foreground mb-2">No. of people</Label>
                <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="people" type="number" placeholder="e.g., 4" className="pl-10"/>
                </div>
             </div>
        )}
        
        {/* Search Button */}
        <div className={travelType === 'custom' ? 'lg:col-span-2' : 'lg:col-span-4'}>
            <Button type="submit" className="w-full h-10">
                <Search className="mr-2 h-5 w-5"/> Search
            </Button>
        </div>
      </form>
    </div>
  );
}

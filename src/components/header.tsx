
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#destinations', label: 'Destinations' },
    { href: '/services', label: 'Services' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
        e.preventDefault();
        setIsMenuOpen(false);

        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);

        if (pathname !== '/') {
            window.location.href = href;
        } else {
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } else {
        setIsMenuOpen(false);
    }
  };

  const isHomepage = pathname === '/';
  const isTransparent = isHomepage && !isScrolled && !isMenuOpen;

  return (
    <header
      className={cn(
        'top-0 left-0 right-0 z-50 transition-all duration-300 py-3',
        isHomepage ? 'fixed' : 'sticky bg-background/80 shadow-md backdrop-blur-lg',
        isTransparent ? 'bg-transparent' : 'bg-background/80 shadow-md backdrop-blur-lg'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className={cn(
            "text-2xl md:text-3xl font-headline transition-colors",
            isTransparent ? 'text-white' : 'text-primary'
            )}>
          TirthYatra
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                isTransparent ? 'text-white/90' : 'text-foreground/80'
                )}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
                <Link href="/trip-planner">
                    AI Trip Planner <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </Button>
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={cn(isTransparent ? 'text-white hover:text-primary hover:bg-white/10' : 'text-foreground')}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-background/95 shadow-lg">
          <nav className="flex flex-col items-start space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-foreground hover:text-primary transition-colors w-full p-2 rounded-md"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
             <Button asChild className="w-full mt-4" size="lg">
                <Link href="/trip-planner">
                    AI Trip Planner <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-headline text-primary">TirthYatra</h3>
            <p className="mt-2 text-sm">Your Spiritual Journey Starts Here.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/#destinations" className="hover:text-primary">Destinations</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/trip-planner" className="hover:text-primary">AI Trip Planner</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <p className="mt-2 text-sm">Follow us on social media for updates.</p>
            {/* Social media icons can be added here */}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TirthYatra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

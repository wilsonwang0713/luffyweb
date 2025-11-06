'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 z-50 w-full glass-panel border-b border-white/10">
        <div className="container-custom flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Luffy<span className="text-aurora-violet">Design</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-xl font-bold mb-4">
                Luffy<span className="text-aurora-violet">Design</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building AI-powered applications, Web3 platforms, and full-stack products with exceptional quality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services#ai" className="hover:text-foreground transition-colors">AI Software Outsourcing</Link></li>
                <li><Link href="/services#web3" className="hover:text-foreground transition-colors">Blockchain & Wallet Integrations</Link></li>
                <li><Link href="/services#design" className="hover:text-foreground transition-colors">Design Systems & UX</Link></li>
                <li><Link href="/services#fullstack" className="hover:text-foreground transition-colors">Full-Stack Engineering</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} LuffyDesign. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

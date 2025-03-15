import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileMenuToggle from './components/MobileMenuToggle';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LuffyDesign - Software Development Excellence",
  description: "LuffyDesign offers custom software development services including web, mobile, cloud, and embedded solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <header>
          <div className="container header-container">
            <div className="logo">
              <Link href="/">Luffy<span>Design</span></Link>
            </div>
            <MobileMenuToggle />
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <div className="footer-container">
              <div className="footer-col">
                <h3>LuffyDesign</h3>
                <p>Delivering software development excellence for businesses of all sizes.</p>
              </div>
              <div className="footer-col">
                <h3>Services</h3>
                <ul>
                  <li><Link href="/services">Custom Software Development</Link></li>
                  <li><Link href="/services">Web & Mobile Applications</Link></li>
                  <li><Link href="/services">Cloud Services</Link></li>
                  <li><Link href="/services">Embedded Software & IoT</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Company</h3>
                <ul>
                  <li><Link href="/case-studies">Case Studies</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service">Terms of Service</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Contact</h3>
                <p>123 Tech Street<br />San Francisco, CA 94105</p>
                <p>Email: info@luffydesign.com<br />Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} LuffyDesign. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const menuToggle = document.querySelector('.menu-toggle');
              const navMenu = document.querySelector('nav');
              
              if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', function() {
                  navMenu.classList.toggle('active');
                  menuToggle.classList.toggle('active');
                });
              }
            });
          `
        }} />
      </body>
    </html>
  );
}

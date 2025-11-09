'use client';

import { useState } from 'react';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const StaggeredMenu = dynamic(() => import('@/components/ui/staggered-menu'), { ssr: false });
const TextType = dynamic(() => import('@/components/ui/text-type'), { ssr: false });
const Particles = dynamic(() => import('@/components/ui/particles'), { ssr: false });

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Main', ariaLabel: 'View solutions overview', link: '/main' },
  { label: 'Services', ariaLabel: 'View all services', link: '/services' },
  { label: 'Work', ariaLabel: 'View our work', link: '/case-studies' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#d6c3b0"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#d6c3b0', '#475a6c']}
        accentColor="#d6c3b0"
        isFixed={true}
      />

      {/* Particles Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#d6c3b0', '#475a6c', '#d6c3b0']}
          particleCount={120}
          speed={0.3}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(214,195,176,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(214,195,176,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 px-4">
        <div className="container-custom">
          <ScrollFade>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-3xl opacity-30">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-theme-warm">
                    Let's Build Something Exceptional
                  </h1>
                </div>
                {/* Main text */}
                <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]">
                    Let's Build Something Exceptional
                  </span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                We work with companies that value craft, speed, and technical rigor. If you're ready to ship a real product, let's talk.
              </p>

              {/* Text Type Effect */}
              <div className="pt-8">
                <TextType
                  text={["Transform your vision into reality", "Build innovative digital products", "Ship with confidence"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-2xl font-bold text-theme-warm"
                  cursorClassName="text-theme-warm"
                />
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="container-custom">
          <ScrollFade>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">What Happens Next</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: '1',
                    title: 'Technical Discovery Call',
                    description: '30-minute discussion about your requirements, technical constraints, and success metrics',
                  },
                  {
                    number: '2',
                    title: 'Architecture Proposal',
                    description: 'Detailed technical approach, timeline, and fixed-price or milestone-based estimate within 3-5 days',
                  },
                  {
                    number: '3',
                    title: 'Kick-off & Execution',
                    description: 'Weekly sprints with deployed increments and continuous feedback',
                  },
                ].map((step, index) => (
                  <ScrollFade key={step.number} delay={0.1 * index}>
                    <div className="glass-card p-6 rounded-xl">
                      <div className="text-4xl font-bold text-aurora-violet/30 mb-4">{step.number}</div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </ScrollFade>
                ))}
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 pb-32">
        <div className="container-custom">
          <ScrollFade delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <div className="glass-panel p-8 md:p-12 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-aurora-violet focus:outline-none focus:ring-2 focus:ring-aurora-violet/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan/20 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-aurora-violet focus:outline-none focus:ring-2 focus:ring-aurora-violet/20 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan/20 transition-colors"
                    >
                      <option value="">Select a project type</option>
                      <option value="ai-llm">AI/LLM Application</option>
                      <option value="web3">Web3/Blockchain Platform</option>
                      <option value="fullstack">Full-Stack Web/Mobile</option>
                      <option value="design-system">Design System</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-aurora-violet focus:outline-none focus:ring-2 focus:ring-aurora-violet/20 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and technical requirements..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-medium">
                        Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan/20 transition-colors"
                        placeholder="e.g., 3 months"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">
                        Budget Range
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-aurora-aqua focus:outline-none focus:ring-2 focus:ring-aurora-aqua/20 transition-colors"
                        placeholder="e.g., $50k - $100k"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-aurora-violet to-aurora-cyan hover:opacity-90 transition-opacity text-white font-medium py-6 rounded-lg"
                  >
                    Send Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-sm text-muted-foreground mb-4">Or reach us directly</p>
                  <a
                    href="mailto:hello@luffydesign.com"
                    className="inline-flex items-center gap-2 text-aurora-cyan hover:text-aurora-aqua transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    hello@luffydesign.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </main>
    </>
  );
}

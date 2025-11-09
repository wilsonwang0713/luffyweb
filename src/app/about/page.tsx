'use client';

import { useRef } from 'react';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const StaggeredMenu = dynamic(() => import('@/components/ui/staggered-menu'), { ssr: false });
const VariableProximity = dynamic(() => import('@/components/ui/variable-proximity'), { ssr: false });

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View all services', link: '/services' },
  { label: 'Main', ariaLabel: 'View main page', link: '/main' },
  { label: 'Work', ariaLabel: 'View our work', link: '/case-studies' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function About() {
  const containerRef = useRef(null);

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

      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-4">
        <div className="container-custom">
          <ScrollFade>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-3xl opacity-30">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-theme-warm">
                    We Build Real Products
                  </h1>
                </div>
                {/* Main text */}
                <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]">
                    We Build Real Products
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Most development shops sell engineering hours. We deliver working systems that create value.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not a staffing agency. We're not a design studio. We're a product development company that happens to write exceptional code and design elegant interfaces.
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven process for shipping production-ready systems
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: '01',
                title: 'Discovery & Architecture',
                period: 'Week 1-2',
                description: 'We start by understanding your actual problem, not your feature request. Technical feasibility analysis, architecture design, and effort estimation with clear trade-offs documented.',
              },
              {
                number: '02',
                title: 'Iterative Development',
                period: 'Weeks 3+',
                description: 'Weekly deployed increments. You see progress in production, not just on staging. Continuous integration, automated testing, and real user feedback loops.',
              },
              {
                number: '03',
                title: 'Quality Assurance',
                period: 'Continuous',
                description: 'Code review on every PR. End-to-end test coverage. Performance profiling. Security audits. We ship with confidence, not crossed fingers.',
              },
              {
                number: '04',
                title: 'Launch & Support',
                period: 'Final Phase',
                description: 'Deployment runbooks. Monitoring dashboards. Incident response protocols. We stay involved until your system is stable and your team is trained.',
              },
            ].map((step, index) => (
              <ScrollFade key={step.number} delay={0.1 * index}>
                <SpotlightCard className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-bold text-aurora-violet/30">{step.number}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-sm text-aurora-cyan">{step.period}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </SpotlightCard>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Principles</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                What guides our work and decisions
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: 'Technical Excellence',
                description: 'We stay at the edge of the industry. New frameworks, new patterns, new tools—evaluated rigorously and adopted strategically.',
              },
              {
                title: 'Radical Clarity',
                description: "No bullshit. No padding. No theater. Clear communication about what's possible, what's expensive, and what's worth building.",
              },
              {
                title: 'Long-Term Thinking',
                description: 'We write code that outlasts the initial project. Documented decisions, maintainable architecture, extensible patterns.',
              },
              {
                title: 'Outcome Accountability',
                description: 'We measure success by shipped products and user outcomes, not story points or sprint velocity.',
              },
            ].map((principle, index) => (
              <ScrollFade key={principle.title} delay={0.1 * index}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-aurora-violet flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{principle.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Excellence */}
      <section className="py-32 px-4">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center mb-12">
              <div className="relative inline-block">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-2xl opacity-40">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-warm">
                    Experience Innovation
                  </h2>
                </div>
                {/* Main text */}
                <h2 className="relative text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]">
                    Experience Innovation
                  </span>
                </h2>
              </div>
              <p className="text-theme-warm/70 text-lg font-light max-w-2xl mx-auto mb-8">
                Hover over the text below to see our attention to detail in action
              </p>
            </div>
          </ScrollFade>

          <div
            ref={containerRef}
            style={{ position: 'relative' }}
            className="flex justify-center items-center min-h-[200px]"
          >
            <VariableProximity
              label={'We craft exceptional digital experiences with precision and passion'}
              className="text-3xl md:text-5xl font-bold text-center text-theme-warm"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={150}
              falloff="linear"
            />
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

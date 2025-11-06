'use client';

import { ScrollFade } from '@/components/ui/scroll-fade';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-4">
        <div className="container-custom">
          <ScrollFade>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                We Build Real Products
              </h1>
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

      {/* CTA */}
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="glass-panel rounded-3xl p-12 md:p-20 text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your project and see if we're a good fit.
              </p>
              <div>
                <Link href="/contact">
                  <MagneticButton>
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </main>
  );
}

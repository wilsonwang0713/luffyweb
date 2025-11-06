'use client';

import Link from 'next/link';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Cpu, Layers, Wallet } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollFade>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                Building Products <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet via-aurora-cyan to-aurora-aqua">
                  That Ship
                </span>
              </h1>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
                AI-powered applications, Web3 platforms, and full-stack products delivered with exceptional craft and technical clarity.
              </p>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact">
                  <MagneticButton>
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </Link>
                <Link href="/case-studies">
                  <Button variant="glass" size="lg" className="rounded-full">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized expertise across modern technology stacks
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <ScrollFade delay={0.1}>
              <SpotlightCard className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-aurora-violet/10 group-hover:bg-aurora-violet/20 transition-colors">
                    <Cpu className="h-6 w-6 text-aurora-violet" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">AI & LLM Applications</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We architect and ship production-grade AI systems. From RAG pipelines to multi-agent orchestration, we build intelligent applications that deliver measurable outcomes.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <SpotlightCard className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-aurora-cyan/10 group-hover:bg-aurora-cyan/20 transition-colors">
                    <Wallet className="h-6 w-6 text-aurora-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Web3 & Blockchain Platforms</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Deep expertise in wallet integration, smart contract architecture, and decentralized application development. We understand the stack from consensus to UX.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFade>

            <ScrollFade delay={0.3}>
              <SpotlightCard className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-aurora-aqua/10 group-hover:bg-aurora-aqua/20 transition-colors">
                    <Code2 className="h-6 w-6 text-aurora-aqua" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Full-Stack Product Engineering</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      End-to-end execution from system architecture to shipped interfaces. We build scalable web and mobile applications with modern frameworks and deployment infrastructure.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <SpotlightCard className="group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-aurora-violet/10 group-hover:bg-aurora-violet/20 transition-colors">
                    <Layers className="h-6 w-6 text-aurora-violet" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Design Systems & UX Architecture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Component libraries, interaction patterns, and visual systems that scale. We design for clarity, performance, and long-term maintainability.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 relative">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How We're Different</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic execution, not just engineering hours
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollFade delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Product Thinking, Not Task Completion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We challenge assumptions, propose better architectures, and solve the right problems. You're getting strategic execution, not just engineering hours.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Extreme Quality Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every commit is reviewed. Every component is tested. Every decision is documented. We ship code you can build on for years.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Full-Stack Competence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From database schemas to animation curves, we handle the complete product surface. No handoffs, no gaps, no excuses.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Real Outcomes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deployed systems. Active users. Measurable improvements. We're accountable for production results, not just delivered features.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Technologies We Master</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Modern, battle-tested tools and frameworks
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="glass-panel p-8 rounded-2xl">
                <div className="flex flex-wrap gap-3 justify-center">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'Solidity', 'ethers.js', 'OpenAI API', 'LangChain', 'Pinecone', 'Anthropic Claude'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full glass text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="glass-panel rounded-3xl p-12 md:p-20 text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Ship Something Exceptional?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your product requirements and technical architecture.
              </p>
              <div>
                <Link href="/contact">
                  <MagneticButton>
                    Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
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


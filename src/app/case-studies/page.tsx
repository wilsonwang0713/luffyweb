'use client';

import { ScrollFade } from '@/components/ui/scroll-fade';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const StaggeredMenu = dynamic(() => import('@/components/ui/staggered-menu'), { ssr: false });
const Waves = dynamic(() => import('@/components/ui/waves'), { ssr: false });

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Services', ariaLabel: 'View our services', link: '/main' },
  { label: 'Work', ariaLabel: 'View our work', link: '/case-studies' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'AI Contract Analyzer',
      category: 'AI/LLM Application',
      client: 'Enterprise legal tech startup',
      challenge: 'Manual contract review taking 4-6 hours per document',
      solution: 'Built an LLM-based analysis system with custom fine-tuning for legal language, automatic clause extraction, risk scoring, and comparison tools.',
      results: [
        { metric: 'Review time reduced', value: 'From 4 hours to 12 minutes' },
        { metric: 'Accuracy', value: '94% on clause identification' },
        { metric: 'Processing volume', value: '10,000+ contracts/month' },
        { metric: 'Cost savings', value: '$2M annually' },
      ],
      tech: ['Python', 'FastAPI', 'OpenAI GPT-4', 'Pinecone', 'React', 'PostgreSQL'],
      color: 'aurora-violet',
    },
    {
      title: 'Multi-Chain Wallet',
      category: 'Web3 Platform',
      client: 'Web3 infrastructure company',
      challenge: 'Users frustrated by single-chain wallets; high friction in DeFi interactions',
      solution: 'Designed and built a unified wallet supporting 8 blockchains with cross-chain swaps, hardware wallet integration, and best-in-class UX.',
      results: [
        { metric: 'Monthly active users', value: '50,000 within 6 months' },
        { metric: 'Security incidents', value: 'Zero fund losses' },
        { metric: 'App Store rating', value: '4.8/5.0' },
        { metric: 'Media coverage', value: 'Featured by major crypto publications' },
      ],
      tech: ['TypeScript', 'React Native', 'ethers.js', 'WalletConnect', 'Cosmos SDK', 'Solana Web3.js'],
      color: 'aurora-cyan',
    },
    {
      title: 'Real-Time Trading Dashboard',
      category: 'Full-Stack Platform',
      client: 'Quantitative trading firm',
      challenge: 'Existing dashboard could not handle market data velocity; frequent crashes',
      solution: 'Rebuilt the entire frontend with optimized state management, WebSocket pooling, and canvas-based rendering for charts.',
      results: [
        { metric: 'Price updates handled', value: '500+/second smoothly' },
        { metric: 'Average render time', value: '98ms (was 800ms+)' },
        { metric: 'Uptime', value: 'Zero crashes in 6 months' },
        { metric: 'Decision speed', value: '30% faster reported by traders' },
      ],
      tech: ['React', 'TypeScript', 'WebSocket', 'D3.js', 'TanStack Query', 'Redis'],
      color: 'aurora-aqua',
    },
    {
      title: 'Enterprise Design System',
      category: 'Design System',
      client: 'B2B enterprise SaaS (50+ engineers)',
      challenge: 'Inconsistent UI across product; slow feature development; accessibility gaps',
      solution: 'Built a comprehensive design system with 80+ components, design tokens, Storybook documentation, and automated accessibility testing.',
      results: [
        { metric: 'Development velocity', value: '55% increase' },
        { metric: 'Accessibility score', value: '95+ (was 72)' },
        { metric: 'QA bugs reduced', value: '40% fewer' },
        { metric: 'Team adoption', value: '12 product teams' },
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Chromatic'],
      color: 'aurora-violet',
    },
  ];

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

      <main className="min-h-screen relative">
        {/* Waves Background */}
        <div className="fixed inset-0 -z-10">
          <Waves
            lineColor="#fff"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>

        {/* Hero Section */}
        <section className="py-32 px-4 relative z-10">
        <div className="container-custom">
          <ScrollFade>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet to-aurora-cyan">Results</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real projects. Measurable outcomes. Production systems serving thousands of users.
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <ScrollFade key={study.title} delay={0}>
                <div className="max-w-6xl mx-auto">
                  <div className="mb-8">
                    <span className="text-sm font-medium text-aurora-cyan">{study.category}</span>
                    <h2 className="text-4xl font-bold mt-2 mb-4">{study.title}</h2>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Client:</span> {study.client}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <SpotlightCard>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-aurora-violet">
                            <Shield className="h-5 w-5" />
                            <h3 className="font-semibold">Challenge</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>
                      </SpotlightCard>

                      <SpotlightCard>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-aurora-cyan">
                            <Zap className="h-5 w-5" />
                            <h3 className="font-semibold">Solution</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>
                      </SpotlightCard>

                      <SpotlightCard>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-aurora-aqua">
                            <TrendingUp className="h-5 w-5" />
                            <h3 className="font-semibold">Tech Stack</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {study.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full glass text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </SpotlightCard>
                    </div>

                    <div>
                      <SpotlightCard className="h-full">
                        <div className="space-y-6">
                          <div className="flex items-center gap-2 text-aurora-violet">
                            <TrendingUp className="h-5 w-5" />
                            <h3 className="font-semibold">Results</h3>
                          </div>
                          <div className="space-y-6">
                            {study.results.map((result) => (
                              <div key={result.metric} className="space-y-2">
                                <div className="text-3xl font-bold text-foreground">
                                  {result.value}
                                </div>
                                <div className="text-sm text-muted-foreground">{result.metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </SpotlightCard>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="glass-panel rounded-3xl p-12 md:p-20 text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Build Your Success Story?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how we can help your business achieve similar results.
              </p>
              <div>
                <Link href="/contact">
                  <MagneticButton>
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </main>
    </>
  );
}

'use client';

import { ScrollFade } from '@/components/ui/scroll-fade';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Cpu, Wallet, Code2, Layers, CheckCircle2, Sparkles, Shield, Zap, Target } from 'lucide-react';

const StaggeredMenu = dynamic(() => import('@/components/ui/staggered-menu'), { ssr: false });
const RotatingText = dynamic(() => import('@/components/ui/rotating-text'), { ssr: false });

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

export default function Services() {
  const services = [
    {
      id: 'ai',
      icon: Cpu,
      title: 'AI Software Outsourcing',
      description: 'Production-grade intelligent systems that deliver measurable outcomes',
      color: 'aurora-violet',
      features: [
        'Custom LLM applications (RAG, fine-tuning, prompt engineering)',
        'Multi-agent systems and autonomous workflows',
        'Semantic search and vector database architecture',
        'AI model integration and inference optimization',
        'Conversational AI and chatbot platforms',
      ],
      approach: "We don't just wire up APIs. We architect systems that deliver consistent results at scale. Prompt engineering, context management, fallback strategies, and cost optimization built in from day one.",
      outcomes: [
        '60-80% reduction in manual processing time',
        'Sub-2s response times for complex AI queries',
        '95%+ user satisfaction on AI-generated outputs',
        'Production-ready systems in 8-12 weeks',
      ],
    },
    {
      id: 'web3',
      icon: Wallet,
      title: 'Blockchain & Wallet Integrations',
      description: 'Secure, audited Web3 platforms and decentralized applications',
      color: 'aurora-cyan',
      features: [
        'Non-custodial wallet applications',
        'Multi-chain DeFi protocols',
        'NFT platforms and smart contract systems',
        'Blockchain indexing and analytics',
        'Web3 authentication and identity',
      ],
      approach: 'Security-first architecture. Comprehensive testing on testnets. Gas optimization. Multi-sig patterns. Recovery mechanisms. We understand the stakes in Web3.',
      outcomes: [
        'Zero security incidents in production',
        '40-60% gas fee optimization',
        'Cross-chain support (EVM, Solana, Cosmos)',
        'Audited smart contracts and secure key management',
      ],
    },
    {
      id: 'design',
      icon: Layers,
      title: 'Design Systems & UX Architecture',
      description: 'Scalable component libraries and interaction patterns',
      color: 'aurora-aqua',
      features: [
        'Component libraries (React, Vue, native)',
        'Design token systems and theming',
        'Interaction patterns and micro-animations',
        'Responsive layout systems',
        'Accessibility compliance (WCAG AA+)',
      ],
      approach: 'Systems that scale. Not one-off screens, but reusable patterns with clear documentation. Built for designers and developers to use confidently.',
      outcomes: [
        '50% faster feature development with mature design systems',
        'Consistent cross-platform experiences',
        '90+ Lighthouse scores on production sites',
        'AA or AAA accessibility compliance',
      ],
    },
    {
      id: 'fullstack',
      icon: Code2,
      title: 'Full-Stack Web / Mobile Engineering',
      description: 'Modern applications from API to interface',
      color: 'aurora-violet',
      features: [
        'Progressive web applications',
        'Native mobile apps (React Native, Swift, Kotlin)',
        'Real-time collaborative platforms',
        'API design and backend architecture',
        'DevOps, CI/CD, and infrastructure',
      ],
      approach: 'Modern frameworks. Battle-tested patterns. Observability from day one. We ship features fast without accumulating technical debt.',
      outcomes: [
        '2-week sprint cycles with deployed increments',
        '99.9%+ uptime SLAs',
        'Sub-second page loads on global CDN',
        'Horizontal scalability to 100K+ concurrent users',
      ],
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
                    Services That Ship
                  </h1>
                </div>
                {/* Main text with RotatingText */}
                <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                  <RotatingText
                    texts={['Services That Ship', 'Solutions That Scale', 'Products That Perform']}
                    mainClassName="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]"
                    staggerFrom="first"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized technical capabilities across AI, Web3, design systems, and full-stack engineering.
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className="py-20">
          <div className="container-custom">
            <ScrollFade>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-start gap-6 mb-12">
                  <div className={'p-4 rounded-xl bg-${service.color}/10'}>
                    <service.icon className={'h-10 w-10 text-${service.color}'} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ScrollFade delay={0.1}>
                    <SpotlightCard>
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-aurora-violet" />
                        What We Build
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-aurora-cyan flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </ScrollFade>

                  <div className="space-y-8">
                    <ScrollFade delay={0.2}>
                      <SpotlightCard>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-aurora-aqua" />
                          Our Approach
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{service.approach}</p>
                      </SpotlightCard>
                    </ScrollFade>

                    <ScrollFade delay={0.3}>
                      <SpotlightCard>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-aurora-violet" />
                          Typical Outcomes
                        </h3>
                        <ul className="space-y-2">
                          {service.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3">
                              <Zap className="h-4 w-4 text-aurora-cyan flex-shrink-0 mt-1" />
                              <span className="text-sm text-muted-foreground">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </SpotlightCard>
                    </ScrollFade>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>
      ))}
    </main>
    </>
  );
}

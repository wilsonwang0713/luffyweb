'use client';

import { ScrollFade } from '@/components/ui/scroll-fade';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Cpu, Wallet, Code2, Layers, CheckCircle2, Sparkles, Shield, Zap, Target, Database, Server, MessageSquare } from 'lucide-react';

const StaggeredMenu = dynamic(() => import('@/components/ui/staggered-menu'), { ssr: false });
const RotatingText = dynamic(() => import('@/components/ui/rotating-text'), { ssr: false });
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

      {/* ERP Services Pricing Section */}
      <section id="erp" className="py-32 px-4">
        <div className="container-custom max-w-7xl">
          <ScrollFade>
            <div className="text-center mb-16">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 blur-2xl opacity-40">
                  <h2 className="text-4xl md:text-5xl font-bold text-theme-warm">
                    ERP Services Pricing
                  </h2>
                </div>
                <h2 className="relative text-4xl md:text-5xl font-bold">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]">
                    ERP Services Pricing
                  </span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powered by Odoo 17 Community Edition - Enterprise-grade ERP solutions for businesses of all sizes
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Plan */}
            <ScrollFade delay={0.1}>
              <div className="relative group h-full">
                <div className="h-full p-8 rounded-2xl border border-theme-warm/20 bg-gradient-to-br from-black/40 via-theme-warm/5 to-black/40 backdrop-blur-sm hover:border-theme-warm/40 transition-all duration-500">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Free Plan</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-theme-warm">NTD 0</span>
                      </div>
                      <p className="text-sm text-theme-warm/70 mt-2">Free for 3 months</p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-theme-warm/30 to-transparent"></div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Odoo 17 Community Edition</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Unlimited Users</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Server className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">2-core CPU</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Database className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">2GB Storage</span>
                      </li>
                    </ul>

                    <Link href="/contact" className="block">
                      <button className="w-full px-6 py-3 rounded-lg border-2 border-theme-warm/30 text-theme-warm hover:border-theme-warm/60 hover:bg-theme-warm/5 transition-all duration-300 font-medium">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFade>

            {/* Standard Plan */}
            <ScrollFade delay={0.2}>
              <div className="relative group h-full">
                <div className="h-full p-8 rounded-2xl border border-theme-warm/20 bg-gradient-to-br from-black/40 via-theme-warm/5 to-black/40 backdrop-blur-sm hover:border-theme-warm/40 transition-all duration-500">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Standard Plan</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-theme-warm">NTD 888</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-theme-warm/70 mt-2">Annual billing</p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-theme-warm/30 to-transparent"></div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Odoo 17 Community Edition</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Unlimited Users</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Server className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">2-core CPU</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Database className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">2GB Storage</span>
                      </li>
                    </ul>

                    <Link href="/contact" className="block">
                      <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-theme-warm to-theme-slate text-white font-medium hover:shadow-[0_0_30px_rgba(214,195,176,0.4)] transition-all duration-300">
                        Choose Plan
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFade>

            {/* Premium Plan */}
            <ScrollFade delay={0.3}>
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm rounded-2xl opacity-50 blur group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative h-full p-8 rounded-2xl border border-theme-warm/40 bg-gradient-to-br from-black/60 via-theme-warm/10 to-black/60 backdrop-blur-sm">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-theme-warm to-theme-slate text-xs font-bold text-white">
                      POPULAR
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-theme-warm">NTD 1,688</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-theme-warm/70 mt-2">Annual billing</p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-theme-warm/50 to-transparent"></div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Odoo 17 Community Edition</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-white">E-Invoice Integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Unlimited Users</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Server className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">2-core CPU</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Database className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">2GB Storage</span>
                      </li>
                    </ul>

                    <Link href="/contact" className="block">
                      <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm text-white font-bold hover:shadow-[0_0_40px_rgba(214,195,176,0.6)] transition-all duration-300">
                        Choose Plan
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFade>

            {/* Custom Plan */}
            <ScrollFade delay={0.4}>
              <div className="relative group h-full">
                <div className="h-full p-8 rounded-2xl border border-theme-warm/20 bg-gradient-to-br from-black/40 via-theme-slate/5 to-black/40 backdrop-blur-sm hover:border-theme-warm/40 transition-all duration-500">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Custom Plan</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-theme-warm">Custom</span>
                      </div>
                      <p className="text-sm text-theme-warm/70 mt-2">Contact sales for pricing</p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-theme-warm/30 to-transparent"></div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Odoo 17 Community Edition</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Unlimited Users</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-theme-warm flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-white">Custom Modules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Server className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Custom Infrastructure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-theme-slate flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Dedicated Support</span>
                      </li>
                    </ul>

                    <Link href="/contact" className="block">
                      <button className="w-full px-6 py-3 rounded-lg border-2 border-theme-warm/30 text-theme-warm hover:border-theme-warm/60 hover:bg-theme-warm/5 transition-all duration-300 font-medium flex items-center justify-center gap-2">
                        Contact Sales <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>

          {/* Additional Info */}
          <ScrollFade delay={0.5}>
            <div className="mt-16 text-center">
              <div className="inline-block p-6 rounded-xl border border-theme-warm/20 bg-black/40 backdrop-blur-sm">
                <p className="text-muted-foreground mb-2">
                  All plans include free updates, security patches, and technical support
                </p>
                <p className="text-sm text-theme-warm/70">
                  Need help choosing the right plan? <Link href="/contact" className="text-theme-warm hover:text-white transition-colors underline">Contact our team</Link>
                </p>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </main>
    </>
  );
}

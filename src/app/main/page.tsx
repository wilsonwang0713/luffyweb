'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Cpu, Layers, Wallet, Zap, Shield, Network } from 'lucide-react';

const Particles = dynamic(() => import('@/components/ui/particles'), { ssr: false });

export default function MainPage() {
  return (
    <main className="min-h-screen">
      {/* Particles Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#5227FF', '#00D4FF', '#FF00D6']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <ScrollFade>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium">
                <Zap className="h-4 w-4 text-aurora-cyan" />
                <span>AI-Native · Blockchain-Native · Production-Ready</span>
              </div>
            </ScrollFade>

            <ScrollFade>
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none">
                Engineer the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] animate-gradient-shift">
                  Future
                </span>
                <br />
                <span className="text-5xl md:text-6xl lg:text-7xl">Ship the Present</span>
              </h1>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                We architect intelligent systems, decentralized protocols, and production-grade infrastructure. From neural networks to consensus mechanisms — we execute at the edge of what's possible.
              </p>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link href="/contact">
                  <MagneticButton className="group relative overflow-hidden bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] hover:shadow-[0_0_40px_rgba(82,39,255,0.6)] transition-shadow duration-300">
                    <span className="relative z-10 flex items-center">
                      INITIATE BUILD <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </MagneticButton>
                </Link>
                <Link href="/case-studies">
                  <Button
                    variant="glass"
                    size="lg"
                    className="rounded-full border border-white/20 hover:border-aurora-cyan/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all group"
                  >
                    <Shield className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    PROOF OF WORK
                  </Button>
                </Link>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 relative">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-aurora-cyan to-white">
                  Core Protocols
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized execution across emergent tech frontiers
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <ScrollFade delay={0.1}>
              <SpotlightCard className="group border border-aurora-violet/20 hover:border-aurora-violet/40 transition-colors" spotlightColor="rgba(82, 39, 255, 0.25)">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-aurora-violet/10 group-hover:bg-aurora-violet/20 transition-colors ring-1 ring-aurora-violet/30">
                    <Cpu className="h-6 w-6 text-aurora-violet" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      Neural Architecture
                      <span className="text-xs px-2 py-0.5 rounded-full bg-aurora-violet/20 text-aurora-violet">AI/ML</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Production-grade LLM orchestration, vector databases, RAG systems, and multi-agent frameworks. We engineer intelligence at scale — from fine-tuning to inference optimization.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <SpotlightCard className="group border border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-colors" spotlightColor="rgba(0, 212, 255, 0.25)">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-aurora-cyan/10 group-hover:bg-aurora-cyan/20 transition-colors ring-1 ring-aurora-cyan/30">
                    <Network className="h-6 w-6 text-aurora-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      Decentralized Systems
                      <span className="text-xs px-2 py-0.5 rounded-full bg-aurora-cyan/20 text-aurora-cyan">Web3</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Smart contract development, MEV strategies, wallet infrastructure, and dApp architecture. Deep fluency in EVM, Solana, and Layer 2 ecosystems. We ship on-chain.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFade>

            <ScrollFade delay={0.3}>
              <SpotlightCard className="group border border-[#FF00D6]/20 hover:border-[#FF00D6]/40 transition-colors" spotlightColor="rgba(255, 0, 214, 0.25)">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#FF00D6]/10 group-hover:bg-[#FF00D6]/20 transition-colors ring-1 ring-[#FF00D6]/30">
                    <Code2 className="h-6 w-6 text-[#FF00D6]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      Full-Stack Infrastructure
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#FF00D6]/20 text-[#FF00D6]">Cloud</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kubernetes deployments, serverless architectures, real-time data pipelines, and edge computing. We build resilient systems that scale from prototype to unicorn.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <SpotlightCard className="group border border-aurora-violet/20 hover:border-aurora-violet/40 transition-colors" spotlightColor="rgba(168, 85, 247, 0.25)">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-aurora-violet/10 group-hover:bg-aurora-violet/20 transition-colors ring-1 ring-aurora-violet/30">
                    <Layers className="h-6 w-6 text-aurora-violet" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      Interface Engineering
                      <span className="text-xs px-2 py-0.5 rounded-full bg-aurora-violet/20 text-aurora-violet">UX</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Design systems, micro-interactions, and performance optimization. Component libraries built for accessibility, internationalization, and pixel-perfect execution.
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
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan via-[#FF00D6] to-aurora-violet">
                  Execution Manifest
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Protocol-level rigor, startup-grade velocity
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollFade delay={0.1}>
              <div className="space-y-4 glass-panel p-6 rounded-xl border border-aurora-cyan/20">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-aurora-cyan animate-pulse" />
                  <h3 className="text-2xl font-semibold">Zero Overhead Thinking</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We architect solutions, not task lists. Challenge assumptions, propose optimal paths, and solve root problems. Strategic engineering, not code-for-hire.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <div className="space-y-4 glass-panel p-6 rounded-xl border border-aurora-violet/20">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-aurora-violet animate-pulse" />
                  <h3 className="text-2xl font-semibold">Cryptographic Standards</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Every line reviewed. Every function tested. Every deployment audited. We build with the rigor of protocol engineering — secure, deterministic, verifiable.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.3}>
              <div className="space-y-4 glass-panel p-6 rounded-xl border border-[#FF00D6]/20">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#FF00D6] animate-pulse" />
                  <h3 className="text-2xl font-semibold">Vertical Integration</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Neural networks to CSS animations. Database indices to WebSocket protocols. We own the entire stack — no handoffs, no knowledge gaps, no blame games.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <div className="space-y-4 glass-panel p-6 rounded-xl border border-aurora-cyan/20">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-aurora-cyan animate-pulse" />
                  <h3 className="text-2xl font-semibold">Proof of Performance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Live systems. Real throughput. Verified uptime. We measure success in production metrics and user outcomes — not story points or Sprint velocity.
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
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-aurora-violet to-white">
                  Tech Stack
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Battle-hardened tools. Production-validated frameworks.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-violet/5 via-transparent to-aurora-cyan/5" />
                <div className="relative flex flex-wrap gap-3 justify-center">
                  {[
                    { name: 'TypeScript', category: 'lang' },
                    { name: 'Rust', category: 'lang' },
                    { name: 'Solidity', category: 'web3' },
                    { name: 'React', category: 'frontend' },
                    { name: 'Next.js', category: 'frontend' },
                    { name: 'Node.js', category: 'backend' },
                    { name: 'Python', category: 'ai' },
                    { name: 'FastAPI', category: 'backend' },
                    { name: 'PostgreSQL', category: 'data' },
                    { name: 'Redis', category: 'data' },
                    { name: 'Pinecone', category: 'ai' },
                    { name: 'AWS', category: 'infra' },
                    { name: 'K8s', category: 'infra' },
                    { name: 'ethers.js', category: 'web3' },
                    { name: 'Hardhat', category: 'web3' },
                    { name: 'OpenAI', category: 'ai' },
                    { name: 'Claude', category: 'ai' },
                    { name: 'LangChain', category: 'ai' }
                  ].map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-4 py-2 rounded-full glass text-sm font-mono font-medium hover:bg-white/10 transition-all cursor-default border ${
                        tech.category === 'web3'
                          ? 'border-aurora-cyan/30 hover:border-aurora-cyan/60 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                          : tech.category === 'ai'
                          ? 'border-aurora-violet/30 hover:border-aurora-violet/60 hover:shadow-[0_0_15px_rgba(82,39,255,0.3)]'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {tech.name}
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
            <div className="glass-panel rounded-3xl p-12 md:p-20 text-center space-y-8 max-w-4xl mx-auto border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-violet/10 via-aurora-cyan/10 to-[#FF00D6]/10 opacity-50" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium border border-aurora-cyan/30">
                  <Zap className="h-4 w-4 text-aurora-cyan" />
                  <span>Protocol-Level Partnership</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-aurora-cyan to-white">
                    Execute Your Vision
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  From protocol design to production deployment — let's architect something exceptional.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <MagneticButton className="group relative overflow-hidden bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] hover:shadow-[0_0_50px_rgba(82,39,255,0.8)] transition-shadow duration-300">
                      <span className="relative z-10 flex items-center font-semibold">
                        DEPLOY NOW <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </MagneticButton>
                  </Link>
                  <Link href="/case-studies">
                    <Button
                      variant="glass"
                      size="lg"
                      className="rounded-full border border-white/20 hover:border-aurora-cyan/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      VERIFY TRACK RECORD
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </main>
  );
}


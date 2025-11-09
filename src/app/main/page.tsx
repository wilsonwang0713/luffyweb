'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { ArrowRight } from 'lucide-react';

const Particles = dynamic(() => import('@/components/ui/particles'), { ssr: false });
const MetaBalls = dynamic(() => import('@/components/ui/metaballs'), { ssr: false });
const MagnetLines = dynamic(() => import('@/components/ui/magnet-lines'), { ssr: false });
const Cubes = dynamic(() => import('@/components/ui/cubes'), { ssr: false });

export default function MainPage() {
  return (
    <main className="min-h-screen">
      {/* Particles Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#d6c3b0', '#475a6c', '#d6c3b0']}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <ScrollFade>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm animate-gradient-shift">
                  Luffy Design
                </span>
              </h1>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <p className="text-xl md:text-2xl text-theme-warm/80 font-light">
                AI · Web3 · Infrastructure
              </p>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <Link href="/contact">
                <button className="group relative overflow-hidden px-10 py-4 rounded-full font-bold text-base bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm hover:shadow-[0_0_40px_rgba(214,195,176,0.5)] transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    START PROJECT <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Neural Architecture Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <ScrollFade>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-warm to-theme-slate">
                    Neural Architecture
                  </span>
                </h2>
                <p className="text-lg text-theme-slate font-light">AI/ML Systems</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Production-grade LLM orchestration and multi-agent frameworks. We engineer intelligent systems that scale from prototype to production.
                  </p>
                  <p>
                    Vector databases, RAG systems, and fine-tuned models optimized for real-world performance. From concept to deployment, we build AI that delivers.
                  </p>
                </div>
              </div>
            </ScrollFade>

            {/* Right: Component */}
            <ScrollFade delay={0.2}>
              <div className="h-[500px] w-full">
                <MetaBalls
                  color="#d6c3b0"
                  cursorBallColor="#475a6c"
                  cursorBallSize={2}
                  ballCount={15}
                  animationSize={30}
                  enableMouseInteraction={true}
                  enableTransparency={true}
                  hoverSmoothness={0.05}
                  clumpFactor={1}
                  speed={0.3}
                />
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Decentralized Systems Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <ScrollFade>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-slate to-theme-warm">
                    Decentralized Systems
                  </span>
                </h2>
                <p className="text-lg text-theme-warm font-light">Web3/Blockchain</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Smart contract development and dApp architecture across EVM, Solana, and Layer 2 ecosystems. We ship secure, audited on-chain solutions.
                  </p>
                  <p>
                    MEV strategies, wallet infrastructure, and tokenomics design. Deep blockchain fluency meets production engineering rigor.
                  </p>
                </div>
              </div>
            </ScrollFade>

            {/* Right: Component */}
            <ScrollFade delay={0.2}>
              <div className="h-[500px] w-full flex items-center justify-center">
                <MagnetLines
                  rows={9}
                  columns={9}
                  containerSize="min(500px, 100%)"
                  lineColor="#475a6c"
                  lineWidth="0.8vmin"
                  lineHeight="5vmin"
                  baseAngle={0}
                />
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <ScrollFade>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-warm to-theme-slate">
                    Infrastructure
                  </span>
                </h2>
                <p className="text-lg text-theme-slate font-light">Cloud/DevOps</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kubernetes deployments, serverless architectures, and real-time data pipelines. We build resilient systems that scale.
                  </p>
                  <p>
                    Edge computing, observability, and zero-downtime deployments. Infrastructure as code with production-grade reliability.
                  </p>
                </div>
              </div>
            </ScrollFade>

            {/* Right: Component */}
            <ScrollFade delay={0.2}>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Cubes
                  gridSize={8}
                  maxAngle={60}
                  radius={4}
                  borderStyle="2px dashed #d6c3b0"
                  faceColor="#1a1a2e"
                  rippleColor="#475a6c"
                  rippleSpeed={1.5}
                  autoAnimate={true}
                  rippleOnClick={true}
                />
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="container-custom">
          <ScrollFade>
            <div className="glass-panel rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-theme-warm/10 via-theme-slate/10 to-theme-warm/10 opacity-50" />
              <div className="relative space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-warm via-white to-theme-slate">
                    Let's Build
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light">
                  Protocol design to production deployment
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <button className="group relative overflow-hidden px-10 py-4 rounded-full font-bold text-base bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm hover:shadow-[0_0_50px_rgba(214,195,176,0.6)] transition-shadow duration-300">
                      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                        CONTACT US <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
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

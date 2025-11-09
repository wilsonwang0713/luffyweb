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
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <ScrollFade>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] animate-gradient-shift">
                  Luffy Design
                </span>
              </h1>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                AI · Web3 · Infrastructure
              </p>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <Link href="/contact">
                <button className="group relative overflow-hidden px-10 py-4 rounded-full font-bold text-base bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] hover:shadow-[0_0_40px_rgba(82,39,255,0.6)] transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    START PROJECT <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* MetaBalls Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center content-spacing">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold element-spacing">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet to-aurora-cyan">
                  Neural Architecture
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light">AI/ML Systems</p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="h-[500px] w-full max-w-3xl mx-auto">
              <MetaBalls
                color="#5227FF"
                cursorBallColor="#00D4FF"
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
      </section>

      {/* MagnetLines Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center content-spacing">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold element-spacing">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-[#FF00D6]">
                  Decentralized Systems
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light">Web3/Blockchain</p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="flex justify-center">
              <MagnetLines
                rows={9}
                columns={9}
                containerSize="min(60vmin, 500px)"
                lineColor="#00D4FF"
                lineWidth="0.8vmin"
                lineHeight="5vmin"
                baseAngle={0}
              />
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Cubes Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollFade>
            <div className="text-center content-spacing">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold element-spacing">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] to-aurora-violet">
                  Infrastructure
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light">Cloud/DevOps</p>
            </div>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="flex justify-center">
              <Cubes
                gridSize={8}
                maxAngle={60}
                radius={4}
                borderStyle="2px dashed #5227FF"
                faceColor="#1a1a2e"
                rippleColor="#FF00D6"
                rippleSpeed={1.5}
                autoAnimate={true}
                rippleOnClick={true}
              />
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="container-custom">
          <ScrollFade>
            <div className="glass-panel rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-violet/10 via-aurora-cyan/10 to-[#FF00D6]/10 opacity-50" />
              <div className="relative space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-aurora-cyan to-white">
                    Let's Build
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light">
                  Protocol design to production deployment
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <button className="group relative overflow-hidden px-10 py-4 rounded-full font-bold text-base bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] hover:shadow-[0_0_50px_rgba(82,39,255,0.8)] transition-shadow duration-300">
                      <span className="relative z-10 flex items-center gap-2">
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

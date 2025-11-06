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
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <ScrollFade>
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] animate-gradient-shift">
                  Luffy Design
                </span>
              </h1>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                AI · Web3 · Infrastructure
              </p>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <Link href="/contact">
                <button className="group relative overflow-hidden px-12 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] hover:shadow-[0_0_40px_rgba(82,39,255,0.6)] transition-all duration-300">
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
      <section className="py-32 relative">
        <div className="container-custom">
          <ScrollFade>
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet to-aurora-cyan">
                Neural Architecture
              </span>
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-16">AI/ML Systems</p>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="h-[600px] w-full max-w-4xl mx-auto">
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
      <section className="py-32 relative">
        <div className="container-custom">
          <ScrollFade>
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-[#FF00D6]">
                Decentralized Systems
              </span>
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-16">Web3/Blockchain</p>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="flex justify-center">
              <MagnetLines
                rows={9}
                columns={9}
                containerSize="60vmin"
                lineColor="#00D4FF"
                lineWidth="0.8vmin"
                lineHeight="5vmin"
                baseAngle={0}
                style={{ margin: "2rem auto" }}
              />
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Cubes Section */}
      <section className="py-32 relative">
        <div className="container-custom">
          <ScrollFade>
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] to-aurora-violet">
                Infrastructure
              </span>
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-16">Cloud/DevOps</p>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <div className="flex justify-center py-12">
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
      <section className="py-32">
        <div className="container-custom">
          <ScrollFade>
            <div className="glass-panel rounded-3xl p-12 md:p-20 text-center space-y-8 max-w-4xl mx-auto border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-violet/10 via-aurora-cyan/10 to-[#FF00D6]/10 opacity-50" />
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-aurora-cyan to-white">
                    Let's Build
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Protocol design to production deployment
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <button className="group relative overflow-hidden px-12 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] hover:shadow-[0_0_50px_rgba(82,39,255,0.8)] transition-shadow duration-300">
                      <span className="relative z-10 flex items-center font-semibold gap-2">
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

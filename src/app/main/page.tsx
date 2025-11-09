'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { ArrowRight, Palette, Globe, Smartphone, Brain, Server, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

const Particles = dynamic(() => import('@/components/ui/particles'), { ssr: false });
const MetaBalls = dynamic(() => import('@/components/ui/metaballs'), { ssr: false });
const MagnetLines = dynamic(() => import('@/components/ui/magnet-lines'), { ssr: false });
const Cubes = dynamic(() => import('@/components/ui/cubes'), { ssr: false });
const StaggeredMenu = dynamic(() => import('@/components/ui/staggered-menu'), { ssr: false });

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

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design systems, prototypes, and brand identities that resonate with your audience.',
    gradient: 'from-theme-warm to-theme-slate',
    component: null
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'High-performance web applications with modern frameworks, SEO optimization, and seamless user experiences.',
    gradient: 'from-theme-slate to-theme-warm',
    component: 'cubes'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android with intuitive interfaces.',
    gradient: 'from-theme-warm via-theme-slate to-theme-warm',
    component: null
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Production-grade LLM orchestration, multi-agent frameworks, RAG systems, and fine-tuned models.',
    gradient: 'from-theme-slate via-theme-warm to-theme-slate',
    component: 'metaballs'
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Kubernetes deployments, serverless architectures, edge computing, and zero-downtime systems.',
    gradient: 'from-theme-warm to-theme-slate',
    component: 'cubes'
  },
  {
    icon: Boxes,
    title: 'Web3 & Blockchain',
    description: 'Smart contracts, dApp architecture, MEV strategies, and tokenomics across EVM, Solana, and Layer 2.',
    gradient: 'from-theme-slate to-theme-warm',
    component: 'magnetlines'
  }
];

export default function MainPage() {
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

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-20 pb-32">
        <div className="container-custom max-w-6xl">
          <div className="text-center space-y-8">
            <ScrollFade>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 blur-3xl opacity-30">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-theme-warm">
                      Digital Solutions That Scale
                    </h1>
                  </div>
                  {/* Main text */}
                  <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                    <span className="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]">
                      Digital Solutions
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-warm via-white to-theme-slate">
                      That Scale
                    </span>
                  </h1>
                </div>
              </motion.div>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground/80 font-light max-w-3xl mx-auto leading-relaxed">
                From concept to production. We build exceptional digital experiences across UI/UX, Web, Mobile, AI, Infrastructure, and Web3.
              </p>
            </ScrollFade>

            <ScrollFade delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm hover:shadow-[0_0_40px_rgba(214,195,176,0.5)] transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                      START PROJECT <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/case-studies">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-bold text-base border-2 border-theme-warm/30 text-theme-warm hover:border-theme-warm/60 hover:bg-theme-warm/5 transition-all duration-300"
                  >
                    VIEW WORK
                  </motion.button>
                </Link>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 py-20">
        <div className="container-custom max-w-7xl">
          <ScrollFade>
            <div className="text-center mb-16">
              <div className="relative inline-block">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-2xl opacity-40">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-warm">
                    Our Services
                  </h2>
                </div>
                {/* Main text */}
                <h2 className="relative text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]">
                    Our Services
                  </span>
                </h2>
              </div>
              <p className="text-theme-warm/70 text-lg font-light">
                Full-stack solutions for modern businesses
              </p>
            </div>
          </ScrollFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollFade key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full"
                >
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-2xl border border-theme-warm/10 bg-gradient-to-br from-black/40 via-theme-slate/5 to-black/40 backdrop-blur-sm hover:border-theme-warm/30 transition-all duration-500 overflow-hidden">
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-theme-warm/5 via-transparent to-theme-slate/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[2px]`}>
                        <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-theme-warm" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-theme-warm/60 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Hover Arrow */}
                      <div className="pt-2 flex items-center gap-2 text-theme-warm/0 group-hover:text-theme-warm/100 transition-colors duration-300">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Components Section */}
      <section className="relative px-6 py-32">
        <div className="container-custom max-w-7xl">
          <ScrollFade>
            <div className="text-center mb-20">
              <div className="relative inline-block">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-2xl opacity-40">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-warm">
                    Interactive Experiences
                  </h2>
                </div>
                {/* Main text */}
                <h2 className="relative text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-white drop-shadow-[0_0_30px_rgba(214,195,176,0.3)]">
                    Interactive Experiences
                  </span>
                </h2>
              </div>
              <p className="text-theme-warm/70 text-lg font-light">
                Cutting-edge animations and interactions
              </p>
            </div>
          </ScrollFade>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AI MetaBalls */}
            <ScrollFade delay={0.1}>
              <div className="group relative p-6 rounded-2xl border border-theme-warm/10 bg-white/5 backdrop-blur-sm hover:border-theme-warm/30 transition-all duration-500">
                <div className="h-[300px] w-full mb-4 rounded-xl overflow-hidden">
                  <MetaBalls
                    color="#d6c3b0"
                    cursorBallColor="#475a6c"
                    ballCount={12}
                    animationSize={30}
                    enableMouseInteraction={true}
                    enableTransparency={true}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Fluid AI Systems
                </h3>
                <p className="text-sm text-theme-warm/60">
                  Dynamic neural network visualizations
                </p>
              </div>
            </ScrollFade>

            {/* Web3 MagnetLines */}
            <ScrollFade delay={0.2}>
              <div className="group relative p-6 rounded-2xl border border-theme-warm/10 bg-white/5 backdrop-blur-sm hover:border-theme-warm/30 transition-all duration-500">
                <div className="h-[300px] w-full mb-4 rounded-xl overflow-hidden flex items-center justify-center">
                  <MagnetLines
                    rows={7}
                    columns={7}
                    containerSize="min(280px, 100%)"
                    lineColor="#475a6c"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Decentralized Networks
                </h3>
                <p className="text-sm text-theme-warm/60">
                  Interactive blockchain connections
                </p>
              </div>
            </ScrollFade>

            {/* Infrastructure Cubes */}
            <ScrollFade delay={0.3}>
              <div className="group relative p-6 rounded-2xl border border-theme-warm/10 bg-white/5 backdrop-blur-sm hover:border-theme-warm/30 transition-all duration-500">
                <div className="h-[300px] w-full mb-4 rounded-xl overflow-hidden flex items-center justify-center">
                  <Cubes
                    gridSize={6}
                    maxAngle={60}
                    borderStyle="2px dashed #d6c3b0"
                    faceColor="#1a1a2e"
                    rippleColor="#475a6c"
                    autoAnimate={true}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Scalable Architecture
                </h3>
                <p className="text-sm text-theme-warm/60">
                  Modular infrastructure design
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32">
        <div className="container-custom max-w-4xl">
          <ScrollFade>
            <div className="relative p-12 md:p-16 rounded-3xl border border-theme-warm/20 bg-gradient-to-br from-theme-warm/10 via-black/50 to-theme-slate/10 backdrop-blur-sm overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,195,176,0.1),transparent_50%)]" />
              </div>

              <div className="relative text-center space-y-8">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 blur-3xl opacity-40">
                    <h2 className="text-4xl md:text-6xl font-black text-theme-warm">
                      Ready to Build?
                    </h2>
                  </div>
                  {/* Main text */}
                  <h2 className="relative text-4xl md:text-6xl font-black">
                    <span className="text-white drop-shadow-[0_0_40px_rgba(214,195,176,0.4)]">
                      Ready to Build?
                    </span>
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-theme-warm/70 max-w-2xl mx-auto font-light leading-relaxed">
                  Let's transform your vision into reality. From concept to production, we deliver exceptional results.
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative overflow-hidden px-12 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm hover:shadow-[0_0_60px_rgba(214,195,176,0.6)] transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                        START PROJECT <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </main>
    </>
  );
}

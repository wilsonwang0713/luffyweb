'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Zap, Lock, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Orb = dynamic(() => import('@/components/ui/orb'), { ssr: false });

export default function Home() {
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      window.location.href = '/main';
    }, 1500);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f] opacity-60" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture opacity-20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(82, 39, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(82, 39, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0">
              <Orb
                hue={260}
                hoverIntensity={0.3}
                rotateOnHover={true}
                forceHoverState={false}
              />
            </div>

            {/* Orb glow effect */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6] pointer-events-none" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Status badges */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-aurora-violet/30">
                <Zap className="h-4 w-4 text-aurora-violet" />
                <span className="text-sm font-mono">SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-aurora-cyan/30">
                <Lock className="h-4 w-4 text-aurora-cyan" />
                <span className="text-sm font-mono">SECURE</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FF00D6]/30">
                <Database className="h-4 w-4 text-[#FF00D6]" />
                <span className="text-sm font-mono">DECENTRALIZED</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-aurora-cyan to-white animate-gradient-shift">
                  Initialize
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-violet via-[#FF00D6] to-aurora-cyan">
                  Protocol
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Enter the nexus of intelligent systems, decentralized infrastructure, and production-grade engineering.
              </p>
            </motion.div>

            {/* Terminal-style info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-panel p-6 rounded-xl border border-white/10 font-mono text-sm space-y-2 max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400">&gt; System Status: READY</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-aurora-cyan" />
                <span className="text-aurora-cyan">&gt; Neural Networks: ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-aurora-violet" />
                <span className="text-aurora-violet">&gt; Blockchain Nodes: SYNCED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#FF00D6]" />
                <span className="text-[#FF00D6]">&gt; Deployment Pipeline: STANDBY</span>
              </div>
            </motion.div>

            {/* Start button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleStart}
                disabled={isStarting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  group relative overflow-hidden px-12 py-5 rounded-full font-bold text-lg
                  bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6]
                  hover:shadow-[0_0_50px_rgba(82,39,255,0.8)]
                  transition-all duration-300
                  ${isStarting ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isStarting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      INITIALIZING...
                    </>
                  ) : (
                    <>
                      START PROTOCOL
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>

                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </motion.button>

              <Link
                href="/main"
                className="
                  group px-8 py-4 rounded-full font-medium
                  glass border border-white/20
                  hover:border-aurora-cyan/50
                  hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]
                  transition-all
                "
              >
                <span className="flex items-center gap-2">
                  SKIP INTRO
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Version info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-sm text-muted-foreground font-mono text-center lg:text-left"
            >
              v3.14.159 • Build 0x7f454c46 • Production
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurora-cyan to-transparent opacity-30" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-aurora-violet/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-aurora-cyan/20 rounded-br-3xl" />
    </main>
  );
}

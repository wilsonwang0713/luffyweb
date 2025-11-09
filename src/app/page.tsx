'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Particles = dynamic(() => import('@/components/ui/particles'), { ssr: false });
const CircularText = dynamic(() => import('@/components/ui/circular-text'), { ssr: false });
const RotatingText = dynamic(() => import('@/components/ui/rotating-text'), { ssr: false });

export default function Home() {
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      window.location.href = '/main';
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Particles */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#d6c3b0', '#475a6c', '#d6c3b0']}
            particleCount={100}
            speed={0.5}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(214,195,176,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(214,195,176,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-12"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative">
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-3xl opacity-30">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-theme-warm">
                  LUFFY DESIGN
                </h1>
              </div>
              {/* Main text */}
              <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-warm via-white to-theme-slate">
                  LUFFY
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-slate via-theme-warm to-white">
                  DESIGN
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Tagline with Rotating Text */}
          <motion.div variants={itemVariants} className="max-w-3xl space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-theme-warm/90 font-light tracking-wide">
              Crafting Digital Experiences
            </p>

            {/* Rotating Text Badge */}
            <div className="inline-block">
              <RotatingText
                texts={['UI/UX Design', 'Web Development', 'AI Solutions', 'Blockchain']}
                mainClassName="px-4 py-2 bg-gradient-to-r from-theme-warm/20 to-theme-slate/20 border border-theme-warm/30 backdrop-blur-sm text-white overflow-hidden rounded-full text-sm md:text-base font-medium"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>

            <p className="text-base md:text-lg text-muted-foreground/70">
              UI/UX Design · Web & Mobile Apps · AI Solutions · Web3 · Infrastructure
            </p>
          </motion.div>

          {/* Interactive CTA */}
          <motion.div variants={itemVariants} className="pt-8">
            <div
              onClick={handleStart}
              className={`group relative ${isStarting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-theme-warm/20 via-theme-slate/20 to-theme-warm/20 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100" />

              {/* Circular Text Button */}
              <div className="relative flex items-center justify-center">
                <CircularText
                  text="EXPLORE*EXPLORE*EXPLORE*"
                  spinDuration={20}
                  onHover="speedUp"
                  className="relative z-10"
                />

                {/* Center Icon/Loading */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {isStarting ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 360 }}
                      className="w-16 h-16 border-4 border-theme-warm border-t-transparent rounded-full"
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <motion.div
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-theme-warm to-theme-slate"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            variants={itemVariants}
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"
          >
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Global Clients' },
              { number: '6', label: 'Core Services' },
              { number: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="group relative p-6 rounded-2xl border border-theme-warm/10 bg-black/40 backdrop-blur-sm hover:border-theme-warm/30 hover:bg-theme-warm/5 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-theme-warm/5 via-transparent to-theme-slate/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-theme-warm/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <Link href="/main" className="no-underline">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="flex flex-col items-center gap-2 text-theme-warm/50 hover:text-theme-warm/80 transition-colors cursor-pointer"
              >
                <span className="text-xs tracking-widest">EXPLORE</span>
                <div className="w-px h-12 bg-gradient-to-b from-theme-warm/50 to-transparent" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

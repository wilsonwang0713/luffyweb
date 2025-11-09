'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Orb = dynamic(() => import('@/components/ui/orb'), { ssr: false });

export default function Home() {
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      window.location.href = '/main';
    }, 1000);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-12">
        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full max-w-xl aspect-square mb-16"
        >
          <div className="absolute inset-0">
            <Orb
              hue={260}
              hoverIntensity={0.3}
              rotateOnHover={true}
              forceHoverState={false}
            />
          </div>
        </motion.div>

        {/* Arrow Button */}
        <motion.button
          onClick={handleStart}
          disabled={isStarting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.15, x: 8 }}
          whileTap={{ scale: 0.95 }}
          className={`
            flex items-center justify-center
            w-20 h-20 rounded-full
            bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6]
            hover:shadow-[0_0_60px_rgba(82,39,255,0.9)]
            transition-all duration-300
            ${isStarting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          {isStarting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 border-4 border-white border-t-transparent rounded-full"
            />
          ) : (
            <ArrowRight className="w-10 h-10 text-white" />
          )}
        </motion.button>
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full max-w-2xl h-[600px] mb-12"
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

        {/* Simple Button */}
        <motion.button
          onClick={handleStart}
          disabled={isStarting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`
            w-20 h-20 rounded-full
            bg-gradient-to-r from-aurora-violet via-aurora-cyan to-[#FF00D6]
            hover:shadow-[0_0_50px_rgba(82,39,255,0.8)]
            transition-all duration-300
            ${isStarting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          {isStarting && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full rounded-full border-4 border-white border-t-transparent"
            />
          )}
        </motion.button>
      </div>
    </main>
  );
}

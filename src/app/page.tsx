'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Orb = dynamic(() => import('@/components/ui/orb'), { ssr: false });
const CircularText = dynamic(() => import('@/components/ui/circular-text'), { ssr: false });

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

        {/* Circular Text Button */}
        <motion.div
          onClick={handleStart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`${isStarting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-warm via-theme-slate to-theme-warm blur-xl opacity-50" />

            {/* Circular Text */}
            <CircularText
              text="LUFFYDESIGN*LUFFYDESIGN*"
              spinDuration={20}
              onHover="speedUp"
              className="relative z-10"
            />

            {/* Center loading indicator when starting */}
            {isStarting && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-16 h-16 border-4 border-theme-warm border-t-transparent rounded-full"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = true,
  menuButtonColor = '#d6c3b0',
  accentColor = '#d6c3b0'
}: StaggeredMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      x: position === 'right' ? '100%' : '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    })
  };

  return (
    <>
      {/* Menu Button - Always Visible */}
      <div className="fixed top-0 left-0 right-0 z-[9998] pointer-events-none">
        <div className="flex items-center justify-between p-8 pointer-events-auto">
          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-theme-warm to-theme-slate">
            LUFFY
          </div>

          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 bg-transparent border-0 cursor-pointer text-base font-medium transition-colors"
            style={{ color: isOpen ? '#000' : menuButtonColor }}
          >
            <span className="text-base">{isOpen ? 'Close' : 'Menu'}</span>
            <div className="relative w-4 h-4 flex items-center justify-center">
              {isOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <>
                  <span className="absolute w-full h-0.5 bg-current" />
                  <span className="absolute w-full h-0.5 bg-current rotate-90" />
                </>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9997]"
            />

            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 bottom-0 w-full md:w-[450px] bg-white shadow-2xl z-[9999] overflow-y-auto"
              style={{ [position]: 0 }}
            >
              <div className="flex flex-col min-h-full p-12 pt-24">
                {/* Menu Items */}
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {items && items.length > 0 ? (
                      items.map((item, index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          variants={itemVariants}
                          className="overflow-hidden"
                        >
                          <a
                            href={item.link}
                            onClick={toggleMenu}
                            className="block text-black font-bold text-5xl md:text-6xl leading-none tracking-tight uppercase hover:text-[#d6c3b0] transition-colors duration-300"
                            style={{
                              textShadow: '0 0 40px rgba(0,0,0,0.1)'
                            }}
                          >
                            {item.label}
                          </a>
                        </motion.li>
                      ))
                    ) : (
                      <li className="text-black text-4xl">No menu items</li>
                    )}
                  </ul>
                </nav>

                {/* Social Links */}
                {displaySocials && socialItems && socialItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-auto pt-8 border-t border-gray-200"
                  >
                    <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: accentColor }}>
                      Connect
                    </h3>
                    <ul className="flex flex-wrap gap-4">
                      {socialItems.map((social, index) => (
                        <li key={index}>
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:opacity-60 transition-opacity text-lg font-medium"
                          >
                            {social.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StaggeredMenu;

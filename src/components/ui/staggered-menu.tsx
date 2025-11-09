'use client';

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

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
  colors = ['#d6c3b0', '#475a6c'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = false,
  className,
  logoUrl,
  menuButtonColor = '#d6c3b0',
  openMenuButtonColor = '#000',
  changeMenuColorOnOpen = true,
  accentColor = '#d6c3b0',
  isFixed = true,
  onMenuOpen,
  onMenuClose
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const tl = gsap.timeline({
      onComplete: () => {
        busyRef.current = false;
      }
    });

    // Animate layers
    layers.forEach((layer, i) => {
      tl.to(layer, {
        xPercent: 0,
        duration: 0.5,
        ease: 'power4.out'
      }, i * 0.07);
    });

    // Animate panel
    tl.to(panel, {
      xPercent: 0,
      duration: 0.65,
      ease: 'power4.out'
    }, layers.length * 0.07 + 0.08);

    // Animate menu items
    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
      tl.to(itemEls, {
        yPercent: 0,
        rotate: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.1
      }, layers.length * 0.07 + 0.25);
    }

    // Animate social links
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
      tl.to(socialTitle, { opacity: 1, duration: 0.5 }, layers.length * 0.07 + 0.4);
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
      tl.to(socialLinks, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
        stagger: 0.08
      }, layers.length * 0.07 + 0.44);
    }

    tl.play(0);
  }, [position]);

  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    const offscreen = position === 'left' ? -100 : 100;

    gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      onComplete: () => {
        busyRef.current = false;
      }
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!h || !v) return;

    if (opening) {
      gsap.to(h, { rotate: 45, duration: 0.5, ease: 'power4.out' });
      gsap.to(v, { rotate: -45, duration: 0.5, ease: 'power4.out' });
    } else {
      gsap.to(h, { rotate: 0, duration: 0.35, ease: 'power3.inOut' });
      gsap.to(v, { rotate: 90, duration: 0.35, ease: 'power3.inOut' });
    }
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn || !changeMenuColorOnOpen) return;
      const targetColor = opening ? openMenuButtonColor : menuButtonColor;
      gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;

    const seq: string[] = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;

    gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  return (
    <div className={`fixed top-0 left-0 w-full h-screen pointer-events-none z-[9999]`}>
      {/* Pre-layers */}
      <div
        ref={preLayersRef}
        className="absolute top-0 bottom-0 w-[clamp(260px,40vw,450px)] pointer-events-none"
        style={{ [position]: 0, zIndex: 51 }}
      >
        {colors.slice(0, 2).map((c, i) => (
          <div
            key={i}
            className="sm-prelayer absolute top-0 h-full w-full"
            style={{
              background: c,
              [position]: 0,
              transform: `translateX(${position === 'left' ? '-100%' : '100%'})`
            }}
          />
        ))}
      </div>

      {/* Menu Panel */}
      <div
        ref={panelRef}
        className="absolute top-0 h-full w-[clamp(260px,40vw,450px)] bg-white overflow-y-auto pointer-events-auto"
        style={{
          [position]: 0,
          zIndex: 52,
          transform: `translateX(${position === 'left' ? '-100%' : '100%'})`,
          paddingTop: '6em',
          paddingLeft: '2em',
          paddingRight: '2em',
          paddingBottom: '2em'
        }}
      >
        <div className="flex flex-col gap-8 h-full">
          <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-4">
            {items && items.length > 0 ? (
              items.map((it, idx) => (
                <li key={idx} className="overflow-hidden">
                  <a
                    href={it.link}
                    className="text-black font-semibold text-[clamp(2.5rem,7vw,4rem)] leading-none tracking-[-2px] uppercase inline-block no-underline hover:text-[#d6c3b0] transition-colors"
                    onClick={toggleMenu}
                  >
                    <span className="sm-panel-itemLabel inline-block">{it.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="overflow-hidden">
                <span className="text-black font-semibold text-[4rem] leading-none tracking-[-2px] uppercase">
                  No items
                </span>
              </li>
            )}
          </ul>

          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="mt-auto pt-8 flex flex-col gap-3">
              <h3 className="sm-socials-title m-0 text-base font-medium" style={{ color: accentColor }}>
                Connect
              </h3>
              <ul className="list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap">
                {socialItems.map((s, i) => (
                  <li key={i}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link text-lg font-medium text-[#111] no-underline hover:opacity-100"
                      style={{ color: accentColor }}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Header */}
      <header
        className="absolute top-0 left-0 w-full flex items-center justify-between p-8 pointer-events-auto"
        style={{ zIndex: 53 }}
      >
        <div className="flex items-center">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
          ) : (
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-theme-warm to-theme-slate">
              LUFFY
            </span>
          )}
        </div>

        <button
          ref={toggleBtnRef}
          onClick={toggleMenu}
          className="flex items-center gap-2 bg-transparent border-0 cursor-pointer text-base font-medium"
          style={{ color: menuButtonColor }}
        >
          <span className="relative inline-block h-[1em] overflow-hidden" style={{ width: '45px' }}>
            <span ref={textInnerRef} className="flex flex-col leading-none">
              {textLines.map((l, i) => (
                <span key={i} className="block h-[1em] leading-none">
                  {l}
                </span>
              ))}
            </span>
          </span>

          <span ref={iconRef} className="relative w-[14px] h-[14px] flex items-center justify-center">
            <span
              ref={plusHRef}
              className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded -translate-x-1/2 -translate-y-1/2"
            />
            <span
              ref={plusVRef}
              className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded -translate-x-1/2 -translate-y-1/2"
            />
          </span>
        </button>
      </header>

      <style jsx>{`
        @media (max-width: 1024px) {
          .sm-panel-list a {
            font-size: clamp(2rem, 10vw, 3rem) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;

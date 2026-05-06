"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGO_PATHS = [
  "M249.7,670.5c-11.6-20.7-31.3-42.3-59.1-64.8c-2.4-1.8-5.9-4.4-10.4-8c-47.9-38.3-71.8-71.5-71.8-99.5 c0-20.3,6.2-36.5,18.7-48.6s29.1-18.2,49.8-18.2c11.8,0,23.8,2.2,35.9,6.5s24.5,11,37.2,19.9v-65.5c-13.8-7.6-27.7-13.1-41.8-16.7 c-14-3.6-28.6-5.3-43.8-5.3c-34.5,0-63.5,12.3-86.8,36.7c-23.4,24.5-35.1,55.1-35.1,91.9c0,25.4,5.8,48.3,17.4,68.6 c11.6,20.4,31.8,42.5,60.8,66.3c2.7,2.2,6.7,5.6,12,10c45.2,37,67.8,69.8,67.8,98.5c0,19.6-5.9,35.2-17.7,46.9 s-27.7,17.5-47.8,17.5c-11.6,0-23.9-2.3-37.1-6.8c-13.1-4.6-27.5-11.6-43.1-21.2v67.1c14.9,8.2,29.4,14.4,43.4,18.4s27.8,6,41.4,6 c37.2,0,67.7-12.1,91.5-36.2c23.8-24.2,35.7-54.9,35.7-92.4C267.1,714.9,261.3,691.2,249.7,670.5z",
  "M640.5,803.3V376.4h-65.8v337h-58.2l-78.9-337h-61.8L261.6,864.1H328l22.7-95.9H462l23.4,95.9h66.5l-22.7-96.7 h45.5v96.7h206.8v-60.8H640.5z M362.8,713.4l44.1-211.1l43.8,211.1H362.8z",
];

const LOGO_RECTS = [
  { x: 799.8, y: 376.4, width: 65.8, height: 65.8 },
  { x: 799.8, y: 467.7, width: 65.8, height: 396.4 },
];

const LOGO_POLYGON_POINTS =
  "1186.2,376.4 1118.1,376.4 1017.9,577.3 1002.8,577.3 1002.8,376.4 937.4,376.4 937.4,577.3 881.1,577.3 881.1,652.1 937.4,652.1 937.4,864.1 1002.8,864.1 1002.8,652.1 1020.2,652.1 1115.7,864.1 1186.2,864.1 1070,608.2";

const DRAW_DURATION = 1.6;
const FILL_DELAY = 1.4;
const HOLD_AFTER_FILL_MS = 700;
const EXIT_DURATION = 0.9;

const AnimatedLogo = ({ reduced }: { reduced: boolean }) => {
  const drawTransition = reduced
    ? { duration: 0.01 }
    : { duration: DRAW_DURATION, ease: [0.65, 0, 0.35, 1] as const };
  const fillTransition = reduced
    ? { duration: 0.01 }
    : { duration: 0.6, delay: FILL_DELAY, ease: "easeOut" as const };

  const initial = reduced
    ? { pathLength: 1, fillOpacity: 1 }
    : { pathLength: 0, fillOpacity: 0 };
  const animate = { pathLength: 1, fillOpacity: 1 };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 100 1200 1000"
      className="h-32 w-auto text-primary drop-shadow-sm dark:text-ink-50 md:h-40"
      aria-label="Salik Imtiaz logo"
      role="img"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {LOGO_PATHS.map((d, i) => (
        <motion.path
          key={`p-${i}`}
          d={d}
          initial={initial}
          animate={animate}
          transition={{
            pathLength: drawTransition,
            fillOpacity: fillTransition,
          }}
        />
      ))}

      {LOGO_RECTS.map((r, i) => (
        <motion.rect
          key={`r-${i}`}
          x={r.x}
          y={r.y}
          width={r.width}
          height={r.height}
          initial={initial}
          animate={animate}
          transition={{
            pathLength: drawTransition,
            fillOpacity: fillTransition,
          }}
        />
      ))}

      <motion.polygon
        points={LOGO_POLYGON_POINTS}
        initial={initial}
        animate={animate}
        transition={{
          pathLength: drawTransition,
          fillOpacity: fillTransition,
        }}
      />
    </motion.svg>
  );
};

const IntroLoader = () => {
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    const totalMs = reduced
      ? 600
      : (DRAW_DURATION + 0.2) * 1000 + HOLD_AFTER_FILL_MS;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, totalMs);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduced]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {visible && (
        <motion.div
          key="intro-loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: reduced ? 0.2 : EXIT_DURATION,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink-50 dark:bg-ink-950"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* <div
            aria-hidden
            className="absolute inset-0 bg-grid-light bg-grid dark:bg-grid-dark"
          /> */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-radial from-transparent via-ink-50/80 to-ink-50 dark:via-ink-950/80 dark:to-ink-950"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 animate-blob rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 animate-blob rounded-full bg-ink-300/40 blur-3xl dark:bg-ink-800/40"
            style={{ animationDelay: "4s" }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <AnimatedLogo reduced={reduced} />

            <div className="flex flex-col items-center gap-3">
              <div className="relative h-px w-40 overflow-hidden bg-ink-200 dark:bg-ink-800">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: reduced ? 0.2 : DRAW_DURATION + 0.4,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-500 dark:text-ink-400">
                Salik Imtiaz
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;

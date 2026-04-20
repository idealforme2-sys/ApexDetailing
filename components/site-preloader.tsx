"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const loadingPhrases = [
  "Interior reset",
  "Exterior gloss",
  "Final handoff",
];

export function SitePreloader() {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let active = true;
    const startedAt = Date.now();
    const minimumDuration = prefersReducedMotion ? 1900 : 3000;
    const stageTimer = window.setInterval(() => {
      setStage((current) => (current + 1) % loadingPhrases.length);
    }, prefersReducedMotion ? 620 : 780);

    const finish = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(minimumDuration - elapsed, 0);

      window.setTimeout(() => {
        if (active) {
          setVisible(false);
        }
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      active = false;
      window.clearInterval(stageTimer);
      window.removeEventListener("load", finish);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-[#040608]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,168,255,0.22),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)]" />
          <div className="absolute left-1/2 top-[14%] h-52 w-52 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <motion.div
            className="absolute inset-y-0 left-[-20%] w-32 bg-gradient-to-r from-transparent via-white/18 to-transparent"
            animate={{ x: ["0%", "520%"] }}
            transition={{
              duration: prefersReducedMotion ? 1.35 : 2.2,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[min(92vw,37rem)] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-6 py-8 shadow-glow backdrop-blur-2xl sm:px-10 sm:py-10"
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 2.1,
                repeat: prefersReducedMotion ? 0 : Infinity,
              }}
            />

            <div className="relative mx-auto flex max-w-md flex-col items-center text-center">
              <div className="relative w-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(42,168,255,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.42),rgba(255,255,255,0.02))] p-5 sm:p-6">
                <motion.div
                  className="absolute inset-y-6 left-[-30%] w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["0%", "410%"] }}
                  transition={{
                    duration: prefersReducedMotion ? 1.05 : 1.5,
                    repeat: prefersReducedMotion ? 0 : Infinity,
                    repeatDelay: 0.15,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
                  animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.35, 0.7, 0.35] }}
                  transition={{
                    duration: prefersReducedMotion ? 1.3 : 2.2,
                    repeat: prefersReducedMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                <Image
                  src="/APEX_Detailing.jpg"
                  alt="APEX Mobile Detailing logo"
                  width={720}
                  height={720}
                  priority
                  className="relative z-10 mx-auto h-auto w-full max-w-[17rem] rounded-[1.2rem] object-contain"
                />
              </div>

              <div className="mt-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingPhrases[stage]}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="font-display text-2xl uppercase tracking-[0.18em] text-white sm:text-3xl"
                  >
                    {loadingPhrases[stage]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <p className="mt-3 max-w-sm text-xs uppercase tracking-[0.28em] text-slate-400 sm:text-sm">
                Premium mobile detailing for Franklin and surrounding areas
              </p>

              <div className="mt-7 grid w-full gap-3 sm:grid-cols-3">
                {["Gloss", "Interior", "Final touch"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-black/25 px-3 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-slate-300"
                    animate={{
                      borderColor: [
                        "rgba(255,255,255,0.08)",
                        "rgba(42,168,255,0.28)",
                        "rgba(255,255,255,0.08)",
                      ],
                      backgroundColor: [
                        "rgba(0,0,0,0.22)",
                        "rgba(42,168,255,0.08)",
                        "rgba(0,0,0,0.22)",
                      ],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0.9 : 1.8,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      delay: index * 0.18,
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 w-full rounded-full border border-white/10 bg-white/[0.04] p-1">
                <motion.div
                  className="h-1.5 rounded-full bg-gradient-to-r from-accent via-[#7fd3ff] to-white shadow-[0_0_24px_rgba(42,168,255,0.75)]"
                  initial={{ width: "10%" }}
                  animate={{ width: prefersReducedMotion ? "100%" : ["10%", "42%", "74%", "100%"] }}
                  transition={{
                    duration: prefersReducedMotion ? 1.4 : 2.6,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="mt-5 flex items-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className="h-2 w-2 rounded-full bg-accent/90"
                    animate={{ opacity: [0.25, 1, 0.25], scale: [0.9, 1.15, 0.9] }}
                    transition={{
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      duration: prefersReducedMotion ? 0.8 : 1.15,
                      delay: dot * 0.12,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

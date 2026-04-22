import Image from "next/image";

const loadingPhrases = ["Interior reset", "Exterior gloss", "Final handoff"];

export function SitePreloader() {
  return (
    <div
      aria-hidden="true"
      className="preloader-shell fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-[#040608]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,168,255,0.22),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)]" />
      <div className="absolute left-1/2 top-[14%] h-52 w-52 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="preloader-sweep absolute inset-y-0 left-[-20%] w-32 bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="preloader-card relative z-10 w-[min(92vw,37rem)] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-6 py-8 shadow-glow backdrop-blur-2xl sm:px-10 sm:py-10">
        <div className="preloader-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

        <div className="relative mx-auto flex max-w-md flex-col items-center text-center">
          <div className="relative w-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(42,168,255,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.42),rgba(255,255,255,0.02))] p-5 sm:p-6">
            <div className="preloader-logo-sweep absolute inset-y-6 left-[-30%] w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="preloader-orbit absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />
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
            <div className="preloader-phrase-window relative h-10 w-[18rem] overflow-hidden sm:h-12 sm:w-[22rem]">
              <div className="preloader-phrase-rail">
                {loadingPhrases.map((phrase) => (
                  <p
                    key={phrase}
                    className="preloader-phrase-line flex h-10 items-center justify-center font-display text-[1.75rem] uppercase tracking-[0.12em] text-white sm:h-12 sm:text-[2.2rem]"
                  >
                  {phrase}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-3 max-w-sm text-xs uppercase tracking-[0.28em] text-slate-400 sm:text-sm">
            Premium mobile detailing for Franklin and surrounding areas
          </p>

          <div className="mt-7 grid w-full gap-3 sm:grid-cols-3">
            {["Gloss", "Interior", "Final touch"].map((item, index) => (
              <div
                key={item}
                className="preloader-chip rounded-[1.15rem] border border-white/10 bg-black/25 px-3 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-slate-300"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-7 w-full rounded-full border border-white/10 bg-white/[0.04] p-1">
            <div className="preloader-progress h-1.5 rounded-full bg-gradient-to-r from-accent via-[#7fd3ff] to-white shadow-[0_0_24px_rgba(42,168,255,0.75)]" />
          </div>

          <div className="mt-5 flex items-center gap-2">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="preloader-dot h-2 w-2 rounded-full bg-accent/90"
                style={{ animationDelay: `${dot * 0.12}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

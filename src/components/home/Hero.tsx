import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  // 60/120fps GPU-accelerated interactive 3D tilt & specular reflection
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 240, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 240, damping: 24 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const glareBackground = useTransform(
    [mouseXSpring, mouseYSpring],
    ([latestX, latestY]: number[]) =>
      `radial-gradient(circle at ${(latestX + 0.5) * 100}% ${(latestY + 0.5) * 100}%, rgba(255,255,255,0.16), transparent 60%)`,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-background pt-6 pb-16 lg:py-20 transition-colors">
      {/* Subtle Ambient Background Depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]"
      />

      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Kinetic Typography & Credibility (7 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Pill Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground shadow-2xs backdrop-blur-xs">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Record Label & Music Publishing · Est. 1963
              </span>
            </motion.div>

            {/* Masked Editorial Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.06]"
            >
              Music. Culture.
              <br />
              <span className="font-heading italic font-normal text-muted-foreground">
                Ownership.
              </span>{" "}
              Legacy.
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              Preserving more than six decades of African musical heritage while
              advancing music publishing, catalogue development and rights
              opportunities for a new generation.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
              >
                <span>Explore Catalogue</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/licensing"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground shadow-2xs transition-all hover:bg-muted active:scale-95"
              >
                <span>Licensing & Sync</span>
              </Link>
            </motion.div>

            {/* Heritage Ticker Strip */}
            <motion.div
              variants={fadeUp}
              className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 border-t border-border/60 pt-8"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  60+
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Years Heritage
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  2,000+
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Albums & Recordings
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Global
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Catalogue Reach
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural CEO Portrait Showcase with 3D Tilt (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] [perspective:1200px]">
              {/* Warm Ambient Rim-Light Backing */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-transparent blur-2xl"
              />

              {/* 3D Tilt Card */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/80 bg-neutral-950 shadow-2xl transition-shadow duration-500 hover:shadow-amber-500/10"
              >
                {/* Portrait Image */}
                <img
                  src="/assets/michael-portrait.jpg"
                  alt="Michael Odiong - CEO & Managing Director, Premier Records"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30"
                />

                {/* Dynamic Specular Sheen (Zero-Lag Hardware Accelerated) */}
                <motion.div
                  aria-hidden="true"
                  style={{ background: glareBackground }}
                  className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Top-Right Badge: Heritage Seal */}
                <div className="absolute top-5 right-5">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-md">
                    <Sparkles className="size-3 text-amber-400" />
                    <span>Est. 1963 · Heritage</span>
                  </div>
                </div>

                {/* Bottom Floating CEO Glass Credential Card */}
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="absolute bottom-4 sm:bottom-5 inset-x-4 sm:inset-x-5 rounded-2xl border border-white/15 bg-black/70 p-4 sm:p-5 text-white backdrop-blur-xl shadow-2xl transition-transform duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      <ShieldCheck className="size-3.5" />
                      Executive Leadership
                    </span>
                    <span className="text-[10px] text-white/50 tracking-wider">
                      Premier Records
                    </span>
                  </div>

                  <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold tracking-tight text-white">
                    Michael Odiong
                  </h3>
                  <p className="text-xs text-white/80 font-medium">
                    Chief Executive Officer
                  </p>

                  <p className="mt-2 text-[11px] leading-relaxed text-white/70 italic border-t border-white/10 pt-2 line-clamp-2 sm:line-clamp-none">
                    "Preserving the foundation of African sound while building
                    sustainable equity for future generations."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

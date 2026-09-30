import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Artist } from "@/types";
import { easeOut } from "@/lib/motion";

interface FeaturedArtistProps {
  artists: Artist[];
}

const LANDMARK_RECORDINGS: Record<string, string> = {
  "sir-victor-uwaifo": "Joromi · Guitar Boy",
  "gentleman-mike-ejeagha": "Ka Esi Le Onye Isi Oche",
  "dr-victor-olaiya": "Baby Jowo · Taxi Driver",
  "mya-blue": "Joromi (AI Reimagined)",
};

const getLandmark = (artist: Artist): string =>
  LANDMARK_RECORDINGS[artist.id] ?? "Landmark Recording";

export function FeaturedArtist({ artists }: FeaturedArtistProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const count = artists?.length || 0;

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (count === 0) return;
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (!artists || artists.length === 0) {
    return null;
  }

  const artist = artists[index] ?? artists[0];
  const landmark = getLandmark(artist);

  return (
    <section className="relative overflow-x-clip bg-background py-14 sm:py-20 transition-colors">
      {/* Subtle Ambient Background Warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(217,119,6,0.04),transparent)]"
      />

      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="border-b border-border/60 pb-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Voices of the{" "}
            <span className="font-heading italic font-normal text-muted-foreground">
              Premier
            </span>{" "}
            Legacy
          </h2>
          <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
            Discover the artists and voices that have shaped the Premier
            catalogue.
          </p>
        </div>

        {/* Center Stage Grid */}
        <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Editorial Dossier & Landmark Repertoire (7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={artist.id}
                custom={direction}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: easeOut }}
              >
                {/* Category */}
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-premier-red">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-premier-red"
                  />
                  {artist.category ?? "Premier Artist"}
                </p>

                {/* Artist Name */}
                <h3 className="mt-3 sm:mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                  {artist.name}
                </h3>

                {/* Bio Narrative */}
                <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {artist.bio}
                </p>

                {/* Landmark Recording */}
                <div className="mt-6 sm:mt-7 max-w-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Landmark Recording
                  </p>
                  <p className="mt-1.5 font-heading text-xl sm:text-2xl font-medium text-foreground">
                    {landmark}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {artist.name}
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    to={`/artists/${artist.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
                  >
                    <span>Explore Artist</span>
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <Link
                    to="/licensing"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                  >
                    <span>Licensing &amp; Rights</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Portrait (5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/80 bg-muted">
                <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.img
                    key={artist.id}
                    src={artist.imageUrl}
                    alt={`Portrait of ${artist.name}`}
                    custom={direction}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </AnimatePresence>

                {/* Subtle Archive Label */}
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  Premier Archive
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Featured Artists Rail */}
        <div className="mt-6 sm:mt-8 border-t border-border/60 pt-4 sm:pt-6">
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
                Featured Artists
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="text-xs font-mono font-medium text-muted-foreground">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(artists.length).padStart(2, "0")}
              </span>
            </div>

            {/* Quick Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous artist"
                className="flex size-9 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition-all hover:bg-muted active:scale-95"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next artist"
                className="flex size-9 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition-all hover:bg-muted active:scale-95"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* 4-Item Interactive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {artists.map((item, i) => {
              const isActive = i === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={`group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-foreground/30 bg-muted/80"
                      : "border-border/60 bg-background hover:border-border hover:bg-muted/40"
                  }`}
                >
                  {/* Miniature Portrait Thumbnail */}
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-border/80">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={`h-full w-full object-cover transition-transform duration-500 ${
                        isActive
                          ? "scale-105"
                          : "group-hover:scale-105 opacity-80"
                      }`}
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-premier-red/15" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono font-medium text-muted-foreground">
                        0{i + 1}
                      </span>
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-premier-red" />
                      )}
                    </div>
                    <p className="mt-1 truncate text-xs sm:text-sm font-bold text-foreground">
                      {item.name}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground uppercase tracking-wider">
                      {item.genre ?? "Heritage"}
                    </p>
                  </div>

                  {/* Active Underline Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeArtistUnderline"
                      className="absolute -bottom-px inset-x-4 h-0.5 bg-premier-red rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

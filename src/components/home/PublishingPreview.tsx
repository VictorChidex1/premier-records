import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface PublishingPreviewProps {
  heading?: string;
  body?: string;
  cta?: string;
}

export function PublishingPreview({}: PublishingPreviewProps) {
  return (
    <section className="bg-background pt-16 sm:pt-24 pb-20 sm:pb-32 border-t border-border/40 overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16">
        {/* 1. INTRODUCTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 lg:pb-20 border-b border-border/40">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              Publishing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="mt-8 font-heading text-4xl sm:text-6xl lg:text-[5rem] lg:leading-[1.05] font-medium text-foreground tracking-tight max-w-4xl"
            >
              Where the catalogue becomes intellectual property.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="text-lg text-muted-foreground leading-relaxed max-w-md lg:ml-auto"
            >
              Premier Music Publishing works across music rights, licensing and
              catalogue administration, connecting Nigeria’s recorded heritage
              with new opportunities for creators, brands and global audiences.
            </motion.p>
          </div>
        </div>

        {/* 2. FEATURED PUBLISHING STORY */}
        <div className="py-16 lg:py-20 border-b border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left side: Image / Archival feature */}
            <div className="lg:col-span-7 group relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: easeOut }}
                className="relative overflow-hidden bg-muted/20 aspect-[4/3] lg:aspect-[3/2]"
              >
                <img
                  src="/assets/Sir Victor Uwaifo.jpg"
                  alt="Sir Victor Uwaifo"
                  className="w-full h-full object-cover grayscale-[20%] transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                {/* Editorial frame / crop marks */}
                <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </motion.div>

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
                className="absolute -left-4 top-12 lg:-left-12 lg:top-16 -rotate-90 origin-top-left"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground bg-background px-4 py-2 border border-border/40 shadow-sm whitespace-nowrap">
                  From the Archive &rarr; To the World
                </span>
              </motion.div>
            </div>

            {/* Right side: Detailed narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: easeOut }}
              >
                <h3 className="font-heading text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
                  Sir Victor Uwaifo
                </h3>
                <p className="mt-2 text-2xl lg:text-3xl text-muted-foreground font-heading italic">
                  “Guitar Boy”
                </p>

                <div className="mt-10 h-px w-full bg-border/60" />

                <div className="py-6 flex flex-col gap-4">
                  <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Artist
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Sir Victor Uwaifo
                    </span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Work
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Guitar Boy
                    </span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Publisher
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Premier Music Publishing
                    </span>
                  </div>
                </div>

                <div className="h-px w-full bg-border/60 mb-10" />

                <p className="text-lg leading-relaxed text-muted-foreground">
                  A Premier-published Nigerian classic whose legacy has extended
                  beyond its original recording, demonstrating how catalogue
                  works can continue to create cultural and commercial value
                  through licensing, sampling and new interpretations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3. PUBLISHING PILLARS */}
        <div className="py-12 lg:py-20 border-b border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="pt-0 pb-10 md:py-0 md:pr-12 lg:pr-20 flex flex-col"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-6 inline-block">
                01 &mdash; Rights
              </span>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Publishing rights, copyright and ownership structures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="py-10 md:py-0 md:px-12 lg:px-20 flex flex-col"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-6 inline-block">
                02 &mdash; Licensing
              </span>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connecting catalogue works with legitimate opportunities for
                sampling, sync and other uses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="pt-10 pb-0 md:py-0 md:pl-12 lg:pl-20 flex flex-col"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-6 inline-block">
                03 &mdash; Catalogue Value
              </span>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Maintaining and developing the commercial value of Premier’s
                historic music catalogue.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 4. CATALOGUE REIMAGINED */}
        <div className="py-12 lg:py-20 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="flex flex-col items-center justify-center mb-12 lg:mb-16 text-center"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground bg-muted/30 px-6 py-2 border border-border/40 rounded-full">
              Preserve &rarr; Reimagine &rarr; Reintroduce
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-20">
            {/* Original */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: easeOut }}
              className="flex flex-col items-end text-right group"
            >
              <div className="w-full max-w-sm overflow-hidden bg-muted/20 aspect-square border border-border/20 shadow-sm relative">
                <img
                  src="/assets/Dr. Victor Olaiya.jpeg"
                  alt="Dr Victor Olaiya"
                  className="w-full h-full object-cover sepia-[40%] grayscale-[20%] transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none transition-colors duration-700 group-hover:bg-transparent" />
              </div>
              <div className="mt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Original Work
                </p>
                <h4 className="font-heading text-2xl font-medium text-foreground">
                  Mofe Muyan
                </h4>
                <p className="text-base text-muted-foreground mt-1">
                  Dr. Victor Olaiya
                </p>
              </div>
            </motion.div>

            {/* Separator / Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="hidden md:flex items-center justify-center h-20 w-20 rounded-full border border-border/40 shrink-0 bg-background relative z-10"
            >
              <div className="h-px w-full absolute -left-full -right-full bg-border/40 -z-10" />
              <ArrowUpRight className="size-5 text-muted-foreground rotate-45" />
            </motion.div>

            {/* Mobile Arrow */}
            <div className="md:hidden flex justify-center py-4 relative z-10">
              <div className="h-full w-px absolute top-0 bottom-0 bg-border/40 -z-10" />
              <div className="bg-background border border-border/40 rounded-full p-4">
                <ArrowUpRight className="size-6 text-muted-foreground opacity-50 rotate-45" />
              </div>
            </div>

            {/* Reimagined */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2, ease: easeOut }}
              className="flex flex-col items-start group"
            >
              <div className="w-full max-w-sm overflow-hidden bg-muted/20 aspect-square border border-border/20 shadow-sm relative">
                <img
                  src="/assets/Baby Mi Da.jpg"
                  alt="Baby Mi Da"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  Reimagined Work
                </p>
                <h4 className="font-heading text-2xl font-medium text-foreground">
                  Baby Mi Da (Baby Jowo)
                </h4>
                <p className="text-base text-muted-foreground mt-1">
                  Dr. Victor Olaiya feat. 2Baba
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 5. CTA */}
        <div className="mt-6 lg:mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8 lg:pt-12 border-t border-border/40">
          <Link
            to="/publishing"
            className="group relative inline-flex items-center gap-3 text-sm font-medium text-foreground pb-2 overflow-hidden"
          >
            <span className="uppercase tracking-widest text-xs font-semibold">
              Explore Publishing
            </span>
            <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-border transition-transform duration-500 ease-out group-hover:scale-x-0" />
            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>

          <span className="hidden md:block text-border/60">|</span>

          <Link
            to="/licensing"
            className="group relative inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 pb-2 overflow-hidden"
          >
            <span className="uppercase tracking-widest text-xs font-semibold">
              Licensing & Rights
            </span>
            <ArrowUpRight className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 bg-transparent transition-transform duration-500 ease-out" />
            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-border transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}

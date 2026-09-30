import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { LEADERSHIP_TIMELINE } from "@/data/about";

export function LeadershipSection() {
  return (
    <section className="border-t border-border/40 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1720px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left: Text Content & Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6"
          >
            Premier Today
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground leading-[1.1] mb-12"
          >
            Building the next chapter of Premier.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          >
            <h3 className="text-xl font-heading text-foreground mb-1">
              Michael Odiong
            </h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              CEO, Premier Records Limited & Premier Music Publishing Company
              Limited
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-16">
              Michael Odiong joined Premier Records in January 2008 after
              working in entertainment as a dancer, actor and artiste manager.
              He progressed through project and business development roles
              before becoming CEO. His work has included efforts to reactivate
              Premier's historic catalogue and connect it with contemporary
              audiences.
            </p>
          </motion.div>

          {/* Leadership Timeline */}
          <div className="flex flex-col gap-8 relative max-w-xl">
            <div className="absolute left-[3.5px] top-2 bottom-2 w-px bg-border/40" />
            {LEADERSHIP_TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                className="relative pl-8 flex flex-col"
              >
                <div className="absolute left-[-2px] top-1.5 w-[11px] h-[11px] rounded-full border border-primary bg-background" />
                <span className="font-heading text-xl text-foreground mb-1">
                  {item.year}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Portrait Image */}
        <div className="lg:col-span-5 h-[60vh] lg:h-[80vh] min-h-[500px] w-full rounded-2xl overflow-hidden relative shadow-xl lg:mt-12">
          {/* Subtle overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: easeOut }}
            className="absolute inset-0 z-10 bg-muted flex items-center justify-center"
          >
            <img
              src="/assets/michael-portrait.jpg" // Assuming we have this or use a generic one if we need, wait, let's use a subtle placeholder if it doesn't exist, but we will use the one provided or a general asset. Let's use /assets/AboutHero2.jpeg for now or just Michael. Wait, let me check the existing assets in my workspace or just use a generic path and let the user replace it. "If not, use an intentional placeholder rather than generating a fake portrait."
              alt="Michael Odiong - CEO"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement?.classList.add("bg-muted");
                const p = document.createElement("p");
                p.className =
                  "text-muted-foreground uppercase tracking-widest text-xs font-semibold";
                p.innerText = "Portrait Unavailable";
                target.parentElement?.appendChild(p);
              }}
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

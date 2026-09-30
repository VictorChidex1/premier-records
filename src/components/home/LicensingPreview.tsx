import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface LicensingPreviewProps {
  heading: string
  body: string
  cta: string
}

export function LicensingPreview({ heading, body, cta }: LicensingPreviewProps) {
  return (
    <section className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-muted/40 p-8 sm:p-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-background via-muted to-accent/30"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Licensing &amp; Sync
          </p>
          <h2 className="mt-4 font-heading text-hero font-medium text-foreground">{heading}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{body}</p>
          <Link
            to="/licensing"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
          >
            {cta}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
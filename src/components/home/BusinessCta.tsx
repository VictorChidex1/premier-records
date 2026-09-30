import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function BusinessCta() {
  return (
    <section className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 text-background sm:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/70">
          Looking to work with Premier?
        </p>
        <h2 className="mt-4 max-w-3xl font-heading text-hero font-medium text-background">
          Music. Publishing. Licensing. Partnerships.
        </h2>
        <Link
          to="/contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground shadow-xs transition-all hover:bg-background/90 active:scale-95"
        >
          Start a Conversation
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
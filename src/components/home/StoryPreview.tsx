import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface StoryPreviewProps {
  heading: string
  body: string
  cta: string
}

export function StoryPreview({ heading, body, cta }: StoryPreviewProps) {
  return (
    <section className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div aria-hidden="true" className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-bl from-secondary via-muted to-accent/40" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Company Story
          </p>
          <h2 className="mt-4 font-heading text-hero font-medium text-foreground">{heading}</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{body}</p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            {cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
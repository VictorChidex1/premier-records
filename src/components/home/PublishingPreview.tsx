import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface PublishingPreviewProps {
  heading: string
  body: string
  cta: string
}

export function PublishingPreview({ heading, body, cta }: PublishingPreviewProps) {
  return (
    <section className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Publishing
          </p>
          <h2 className="mt-4 font-heading text-hero font-medium text-foreground">{heading}</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{body}</p>
          <ul className="mt-8 grid max-w-lg grid-cols-2 gap-4 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-foreground" />
              Publishing
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-foreground" />
              Rights
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-foreground" />
              Creators
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-foreground" />
              Catalogue
            </li>
          </ul>
          <Link
            to="/publishing"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-muted active:scale-95"
          >
            {cta}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div aria-hidden="true" className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-secondary via-background to-accent/50" />
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { CatalogueItem } from '@/types'

interface CataloguePreviewProps {
  items: CatalogueItem[]
}

export function CataloguePreview({ items }: CataloguePreviewProps) {
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              The Catalogue
            </p>
            <h2 className="mt-4 font-heading text-section font-medium text-foreground">
              Music and creative works represented by Premier.
            </h2>
          </div>
          <Link
            to="/catalogue"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground"
          >
            Explore Catalogue
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/catalogue/${item.slug}`}
              className="group flex items-center justify-between gap-4 rounded-xl border border-border/80 bg-background p-6 transition-colors hover:bg-muted"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.type}
                </p>
                <h3 className="mt-2 font-heading text-lg font-medium text-foreground">
                  {item.title}
                </h3>
              </div>
              <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
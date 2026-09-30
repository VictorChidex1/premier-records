import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { NewsArticle } from '@/types'

interface LatestNewsProps {
  articles: NewsArticle[]
}

export function LatestNews({ articles }: LatestNewsProps) {
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Latest
            </p>
            <h2 className="mt-4 font-heading text-section font-medium text-foreground">News</h2>
          </div>
          <Link
            to="/news"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground"
          >
            View All News
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ol className="mt-12 divide-y divide-border/60 border-y border-border/60">
          {articles.map((article, index) => (
            <li key={article.id}>
              <Link
                to={`/news/${article.slug}`}
                className="group flex items-baseline gap-6 py-6 transition-colors"
              >
                <span className="font-heading text-lg font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-heading text-xl font-medium text-foreground transition-colors group-hover:text-muted-foreground sm:text-2xl">
                  {article.title}
                </span>
                <ArrowRight className="ml-auto hidden size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground sm:block" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
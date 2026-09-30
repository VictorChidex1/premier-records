import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ErrorFallbackProps {
  onReset: () => void
}

export function ErrorFallback({ onReset }: ErrorFallbackProps) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24 sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Premier
      </p>
      <h1 className="mt-6 font-heading text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        Something went wrong.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
        We couldn&apos;t load this content. Please try again, or return to the
        Premier homepage.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
        >
          Try Again
        </button>

        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
        >
          Back to home
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
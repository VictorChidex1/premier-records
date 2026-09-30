interface PagePlaceholderProps {
  title: string
  description: string
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-24 sm:px-6">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">Premier</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">{description}</p>
      <p className="mt-8 text-sm text-muted-foreground">
        This page is being built. Check back soon.
      </p>
    </section>
  )
}
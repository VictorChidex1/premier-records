import { Link } from 'react-router-dom'
import { ArrowUpRight, Globe } from 'lucide-react'

function InstagramIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background transition-colors">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 pt-16 lg:pt-24 pb-12">
        {/* Pre-Footer Business Dispatch Banner */}
        <div className="mb-16 rounded-2xl sm:rounded-3xl border border-border/80 bg-muted/40 p-8 sm:p-12 backdrop-blur-xs flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Licensing & Repertoire
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Looking to license our catalogue or collaborate with our creators?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We represent master recordings, publishing rights, and original compositions for global media, advertising, film, and television.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/licensing"
              className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
            >
              <span>Licensing Opportunities</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-muted active:scale-95"
            >
              <span>General Enquiry</span>
            </Link>
          </div>
        </div>

        {/* 4-Column Structured Repertoire & Publishing Matrix */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-16 border-b border-border/60">
          {/* Column 1: Brand & Philosophy (spans 2 cols on lg) */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <Link to="/" className="inline-block" aria-label="Premier home">
              <img
                src="/assets/premier-logo.png"
                alt="Premier"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Premier is a digital home for music recording, publishing, catalogue preservation, and creative rights administration.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-medium text-muted-foreground">
              <Globe className="size-4 text-foreground/70" />
              <span>Operating Globally · Music & Publishing</span>
            </div>
          </div>

          {/* Column 2: Repertoire */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Repertoire
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/artists"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Artists Directory
                </Link>
              </li>
              <li>
                <Link
                  to="/music"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Latest Releases
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogue"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Master Catalogue
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogue"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Selected Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business & Publishing */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Business & Rights
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/publishing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Music Publishing
                </Link>
              </li>
              <li>
                <Link
                  to="/licensing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sync & Licensing
                </Link>
              </li>
              <li>
                <Link
                  to="/publishing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Rights Management
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Creator Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Press */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About Premier
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Company History
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  News & Press
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Direct Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Utility Bar: Legal, Socials, Copyright */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Premier Records & Music Publishing. All rights reserved.</p>

          {/* Social Channels */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/premiermusic_ng/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium transition-colors hover:text-foreground"
              aria-label="Premier on Instagram"
            >
              <InstagramIcon className="size-4" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@premierrecordslimited577/about"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium transition-colors hover:text-foreground"
              aria-label="Premier on YouTube"
            >
              <YoutubeIcon className="size-4" />
              <span>YouTube</span>
            </a>
          </div>

          {/* Legal Navigation */}
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
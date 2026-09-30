import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, X, ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Artists', to: '/artists' },
  { label: 'Music', to: '/music' },
  { label: 'Publishing', to: '/publishing' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'Licensing', to: '/licensing' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const location = useLocation()

  // Initialize theme from storage or system preference
  useEffect(() => {
    const saved = localStorage.getItem('premier-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('premier-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('premier-theme', 'light')
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-20 w-full max-w-[1720px] items-center justify-between px-6 sm:px-10 lg:px-16">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3 transition-transform active:scale-95"
            aria-label="Premier home"
          >
            <img
              src="/assets/premier-logo.png"
              alt="Premier"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>

          {/* Center: Editorial Floating Capsule Nav Island */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 rounded-full border border-border/80 bg-muted/60 p-1.5 shadow-xs backdrop-blur-md dark:bg-muted/30 lg:flex"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navItems.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to)
              const isHovered = hoveredPath === item.to

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredPath(item.to)}
                  className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-foreground font-bold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {/* Active Indicator Backdrop */}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 z-0 rounded-full bg-background shadow-xs dark:bg-neutral-900"
                    />
                  )}

                  {/* Hover Indicator Backdrop */}
                  {isHovered && !isActive && (
                    <motion.span
                      layoutId="hover-nav-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 z-0 rounded-full bg-background/50 dark:bg-neutral-800/40"
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </NavLink>
              )
            })}
          </nav>

          {/* Right Utilities: Theme Toggle, Contact CTA */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            {/* Work With Us CTA */}
            <Link
              to="/contact"
              className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Work With Us Mobile CTA */}
            <Link
              to="/contact"
              className="flex items-center gap-1 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95 sm:px-3.5 sm:text-xs"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="size-3" />
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            {/* Bespoke Editorial Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="group flex size-10 items-center justify-center rounded-full border border-border/80 bg-muted/30 transition-all hover:bg-muted active:scale-95"
              aria-label="Open navigation menu"
            >
              <div className="flex flex-col items-end justify-center gap-1.5">
                <span className="h-[2px] w-5 rounded-full bg-foreground transition-all duration-200" />
                <span className="h-[2px] w-3.5 rounded-full bg-foreground transition-all duration-200 group-hover:w-5" />
                <span className="h-[2px] w-4.5 rounded-full bg-foreground transition-all duration-200 group-hover:w-5" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Rendered into document.body to escape header containing block) */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex h-dvh w-screen flex-col bg-background/98 backdrop-blur-2xl text-foreground lg:hidden"
              >
                {/* Mobile Header Top Bar */}
                <div className="flex h-20 shrink-0 items-center justify-between border-b border-border/60 px-6 sm:px-10">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Premier home"
                  >
                    <img
                      src="/assets/premier-logo.png"
                      alt="Premier"
                      className="h-8 w-auto object-contain"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex size-10 items-center justify-center rounded-full border border-border/80 bg-muted/40 text-foreground transition-all hover:bg-muted active:scale-95"
                    aria-label="Close menu"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Mobile Drawer Body */}
                <div className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-6 sm:px-10">
                  <div>

                    {/* Navigation Items */}
                    <nav className="flex flex-col divide-y divide-border/40">
                      {navItems.map((item, index) => {
                        const isActive =
                          item.to === '/'
                            ? location.pathname === '/'
                            : location.pathname.startsWith(item.to)

                        return (
                          <motion.div
                            key={item.to}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03, duration: 0.2 }}
                          >
                            <Link
                              to={item.to}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center justify-between py-3.5 text-xl font-bold uppercase tracking-tight transition-colors ${
                                isActive
                                  ? 'text-foreground font-black'
                                  : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                {isActive && (
                                  <span className="size-2 rounded-full bg-foreground" />
                                )}
                                {item.label}
                              </span>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Bottom Controls: Theme, CTA, Copyright */}
                  <div className="mt-8 shrink-0 border-t border-border/60 pt-6 pb-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Appearance
                      </span>
                      <div className="flex items-center rounded-full border border-border/80 bg-muted/40 p-0.5">
                        <button
                          type="button"
                          onClick={() => isDark && toggleTheme()}
                          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                            !isDark
                              ? 'bg-background text-foreground shadow-xs'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <Sun className="size-3.5" />
                          <span>Light</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => !isDark && toggleTheme()}
                          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                            isDark
                              ? 'bg-background text-foreground shadow-xs'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <Moon className="size-3.5" />
                          <span>Dark</span>
                        </button>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3.5 text-sm font-semibold uppercase tracking-wider text-background shadow-md transition-all active:scale-95"
                    >
                      <span>Work With Us</span>
                      <ArrowUpRight className="size-4" />
                    </Link>

                    <p className="pt-4 text-center text-[11px] text-muted-foreground">
                      &copy; 2026 Premier Records & Music Publishing
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col relative">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
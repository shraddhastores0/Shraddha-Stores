'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Stores', href: '/#stores' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3 shadow-sm'
          : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        {/* Logo */}
        <Link href="/#home" className="flex items-center shrink-0">
          <img
            src="/Logo.png"
            alt="Shraddha Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'group relative text-sm font-medium transition-all text-white/90 hover:bg-gradient-to-r hover:from-[#F8E7B5] hover:to-[#D8B56A] hover:bg-clip-text hover:text-transparent',
              )}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-[#F8E7B5] to-[#D8B56A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-5 mt-3 flex flex-col gap-1 rounded-2xl border border-border bg-card p-3 shadow-lg">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-[#D8B56A]"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

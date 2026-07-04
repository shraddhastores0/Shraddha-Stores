import Link from 'next/link'
import { Leaf, Phone, Mail, PhoneCallIcon } from 'lucide-react'
import { stores } from '@/lib/stores'
import { WhatsAppIcon } from '@/components/social-icons'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Stores', href: '/#stores' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <img
                src="/Logo.png"
                alt="Shraddha Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-background/70">
              Three trusted stores, one trusted family. Serving our community with quality and care
              since 1993.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: WhatsAppIcon, label: 'WhatsApp' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-background/15 text-background/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}


            </div>



          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-background/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-background/80 transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stores */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-background/60">
              Our Stores
            </h3>
            <ul className="mt-5 space-y-3">
              {stores.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/stores/${s.slug}`}
                    className="text-sm text-background/80 transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-background/60">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-background/80">
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                91+ 85118 87088
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />
                Info.shraddhageneralstore@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 sm:flex-row">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Shraddha Group of Stores. All rights reserved.
          </p>
          <p className="text-sm text-background/60">Made with care for our community.</p>
        </div>
      </div>
    </footer>
  )
}

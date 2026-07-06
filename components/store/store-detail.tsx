'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowLeft,
  Phone,
  MapPin,
  Clock,
  Check,
  ArrowRight,
} from 'lucide-react'
import type { Store } from '@/lib/stores'
import { storeIcons } from '@/lib/store-icons'
import { ScrollReveal, StaggerContainer, fadeUpItem } from '@/components/scroll-reveal'
import { FloatingActions } from '@/components/store/floating-actions'
import { WhatsAppIcon } from '@/components/social-icons'

export function StoreDetail({ store, related }: { store: Store; related: Store[] }) {
  const Icon = storeIcons[store.slug]
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18])

  return (
    <main className="bg-background">
      <FloatingActions phone={store.phone} whatsapp={store.whatsapp} />

      {/* Hero banner */}
      <section ref={heroRef} className="relative h-[65svh] min-h-[460px] overflow-hidden bg-neutral-950">
        {/* Store image background with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y, scale }}
        >
          <img
            src={store.image}
            alt={store.name}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-neutral-950/55" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

        {/* Ambient premium glowing orbs */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-[400px] rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #0f766e 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-36 -left-20 size-[350px] rounded-full opacity-25 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/95" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/#stores"
              className="inline-flex items-center gap-2 rounded-full border border-[#D8B56A]/40 px-4 py-2 text-sm font-semibold text-[#3D2E0F] shadow-lg backdrop-blur-md transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #F8E7B5, #D8B56A, #F8E7B5)' }}
            >
              <ArrowLeft className="size-4" />
              Back to Homepage
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-card/90 text-primary shadow-lg backdrop-blur-sm">
                <Icon className="size-7" />
              </span>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                {store.shortName} Store
              </span>
            </div>
            <h1
              className="font-heading mt-5 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FFF8E7 0%, #F8E7B5 50%, #D8B56A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.85))',
              }}
            >
              {store.name}
            </h1>
            <p
              className="mt-4 max-w-xl text-pretty text-lg text-white/90"
              style={{
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.9))',
              }}
            >
              {store.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description + quick info */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:px-8">
          <ScrollReveal direction="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About this store
            </span>
            <h2 className="font-heading mt-3 text-balance text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              {store.description}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {store.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${store.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.03]"
              >
                <Phone className="size-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/${store.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03]"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Info card */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="rounded-[1.75rem] border border-border bg-card p-7 shadow-lg">
              <h3 className="font-heading text-lg font-bold text-foreground">Store Information</h3>
              <ul className="mt-6 space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contact</p>
                    <p className="mt-0.5 font-medium text-foreground">{store.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Business Hours</p>
                    {store.hours.map((h) => (
                      <p key={h.day} className="mt-0.5 font-medium text-foreground">
                        {h.day}: <span className="text-muted-foreground">{h.time}</span>
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Address</p>
                    <p className="mt-0.5 font-medium text-foreground">{store.address}</p>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Categories</span>
            <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Everything you need, neatly organised.
            </h2>
          </ScrollReveal>

          <StaggerContainer stagger={0.05} className="mt-12 flex flex-wrap gap-3">
            {store.categories.map((cat) => (
              <motion.span
                key={cat}
                variants={fadeUpItem}
                whileHover={{ y: -4 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <Check className="size-4 text-primary" />
                {cat}
              </motion.span>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Suggested products */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Suggested for you</span>
            <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Customer favourites at this store.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {store.suggestedProducts.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUpItem}
                whileHover={{ y: -8 }}
                className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading mt-5 text-base font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* Map */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Find us</span>
            <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Visit us in person.
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{store.address}</p>
          </ScrollReveal>
          <ScrollReveal className="mt-10">
            <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-lg">
              <iframe
                title={`${store.name} location`}
                src={`https://www.google.com/maps?q=${store.mapQuery}&t=k&output=embed`}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related stores */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Explore more</span>
            <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Discover our other stores.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2">
            {related.map((r) => {
              const RIcon = storeIcons[r.slug]
              return (
                <motion.div key={r.slug} variants={fadeUpItem} className="h-full">
                  <Link href={`/stores/${r.slug}`} className="group block h-full">
                    <motion.article
                      whileHover={{ y: -8 }}
                      className="flex h-full overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition-shadow group-hover:shadow-2xl"
                    >
                      <div className="relative w-2/5 shrink-0 overflow-hidden">
                        <img
                          src={r.image || '/placeholder.svg'}
                          alt={r.name}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <RIcon className="size-5" />
                        </span>
                        <h3 className="font-heading mt-4 text-lg font-bold text-foreground">{r.name}</h3>
                        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary">
                          Visit Store
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              )
            })}
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#D8B56A]/40 px-7 py-3.5 text-sm font-semibold text-[#3D2E0F] shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #F8E7B5, #D8B56A, #F8E7B5)' }}
            >
              <ArrowLeft className="size-4" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

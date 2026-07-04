'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { stores } from '@/lib/stores'
import { storeIcons } from '@/lib/store-icons'
import { ScrollReveal, StaggerContainer, fadeUpItem } from '@/components/scroll-reveal'

export function StoresSection() {
  return (
    <section id="stores" className="bg-brand-soft bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Stores
          </span>
          <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Three stores, <span className="text-gradient">one trusted family.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Each store is dedicated to doing one thing exceptionally well — so every visit feels
            effortless, personal, and complete.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => {
            const Icon = storeIcons[store.slug]
            return (
              <motion.div key={store.slug} variants={fadeUpItem}>
                <Link href={`/stores/${store.slug}`} className="group block h-full">
                  <motion.article
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-shadow duration-300 group-hover:shadow-2xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={store.image || '/placeholder.svg'}
                        alt={store.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                      <span className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-card/90 text-primary shadow-lg backdrop-blur-sm">
                        <Icon className="size-6" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                        {store.name}
                      </h3>
                      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {store.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Visit Store
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

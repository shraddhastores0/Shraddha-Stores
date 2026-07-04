'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, fadeUpItem } from '@/components/scroll-reveal'

const products = [
  { name: 'Aged Basmati Rice', store: 'Provision store', img: '/images/aged-basmati.png' },
  { name: 'Wellness Essentials', store: 'Medical store', img: '/images/wellness-essentials.jpg' },
  { name: 'Dry Fruit Selection', store: 'Genral store', img: '/images/dry-fruits.png' },
]

export function FeaturedProducts() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Products
            </span>
            <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Handpicked favourites across our stores.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUpItem}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img || '/placeholder.svg'}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {p.store}
                </span>
                <h3 className="font-heading mt-1 text-base font-bold text-foreground">{p.name}</h3>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

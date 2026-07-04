'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Heart, Sparkles } from 'lucide-react'
import { ScrollReveal, StaggerContainer, fadeUpItem } from '@/components/scroll-reveal'

const features = [
  {
    icon: ShieldCheck,
    title: 'Genuine Quality',
    desc: 'Every product is carefully sourced and verified, so you only ever take home the best.',
  },
  {
    icon: Heart,
    title: 'Family Service',
    desc: 'Three decades of relationships built on warmth, honesty, and a personal touch.',
  },
  {
    icon: Truck,
    title: 'Quick & Reliable',
    desc: 'Well-stocked shelves and fast home delivery keep your essentials always within reach.',
  },
  {
    icon: Sparkles,
    title: 'Fair Pricing',
    desc: 'Honest prices on everyday essentials — premium quality that never feels out of reach.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The little things that earn lasting trust.
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={fadeUpItem}
                whileHover={{ y: -6 }}
                className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-7" />
                </span>
                <h3 className="font-heading mt-5 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

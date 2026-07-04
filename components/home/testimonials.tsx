'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { ScrollReveal, StaggerContainer, fadeUpItem } from '@/components/scroll-reveal'

const testimonials = [
  {
    quote:
      'The Shraddha family has been our go-to for everything for over fifteen years. The quality and warmth are simply unmatched.',
    name: 'Priya Deshmukh',
    role: 'Loyal Customer',
  },
  {
    quote:
      'From provisions to medicines, I trust them completely. The staff genuinely care and always go the extra mile.',
    name: 'Rahul Kulkarni',
    role: 'Local Resident',
  },
  {
    quote:
      'Clean stores, fair prices, and honest service. It feels less like shopping and more like visiting family.',
    name: 'Sunita Patil',
    role: 'Customer since 2005',
  },
  {
    quote:
      'They always have what I need, and the service is exceptionally fast and polite. A great neighborhood asset.',
    name: 'Amit Sharma',
    role: 'Regular Shopper',
  },
  {
    quote:
      'The best pharmacy and general store in the area. I appreciate their dedication to quality and community.',
    name: 'Neha Gupta',
    role: 'Local Resident',
  },
  {

    quote:
      'Shraddha Group of Stores has become a part of our family\'s weekly routine. From fresh groceries to daily essentials, we always find everything we need with excellent service and genuine care.',
    name: 'Vikram Shah',
    role: 'Loyal Customer',

  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Loved by the families we serve.
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-[1.5rem] border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-xl"
            >
              <Quote className="size-9 text-primary/15" />
              <div className="mt-3 flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-500" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, fadeUpItem } from '@/components/scroll-reveal'
import { ShoppingCart, Cross, Store } from 'lucide-react'

const stats = [
  { value: '30+', label: 'Years of Trust' },
  { value: '3', label: 'Specialised Stores' },
  { value: '50k+', label: 'Happy Families' },
]

const milestones = [
  {
    year: '1993',
    Icon: ShoppingCart,
    lines: [
      'Shraddha began as a trusted provision store,',
      'serving the neighborhood with daily essentials,',
      'quality products, and honest service.',
    ],
  },
  {
    year: '2003',
    Icon: Cross,
    lines: [
      'Expanded into healthcare with the launch of',
      'Shraddha Medical Store, bringing trusted medicines',
      'and care closer to every family.',
    ],
  },
  {
    year: '2023',
    Icon: Store,
    lines: [
      'Grew into Shraddha Group of Stores with',
      <>
        <span className="font-semibold" style={{ color: '#D8B56A' }}>3</span> specialized stores:
      </>,
      'Medical Store, Provision Store, and General Store,',
      'serving thousands of families every day.',
    ],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Timeline Card */}
        <ScrollReveal direction="right">
          <div className="relative">
            {/* Offset border */}
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] border border-primary/20 lg:block" />

            {/* Card */}
            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] p-8 shadow-2xl sm:p-10"
              style={{
                background:
                  'linear-gradient(145deg, rgba(20,20,22,0.92), rgba(12,12,14,0.96))',
                backdropFilter: 'blur(24px)',
              }}
            >
              {/* Emerald ambient glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-[100px]"
                style={{ background: 'radial-gradient(circle, #065f46 0%, transparent 70%)' }}
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-20 blur-[80px]"
                style={{ background: 'radial-gradient(circle, #065f46 0%, transparent 70%)' }}
              />

              {/* Title */}
              <motion.h3
                className="font-heading text-lg font-bold tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, #F8E7B5, #D8B56A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Shraddha Journey
              </motion.h3>

              {/* Timeline */}
              <StaggerContainer stagger={0.18} className="relative mt-8">
                {/* Gold vertical line */}
                <div
                  className="absolute left-[19px] top-2 bottom-2 w-px"
                  style={{ background: 'linear-gradient(to bottom, #D8B56A, #F8E7B5 50%, #D8B56A)' }}
                />

                {milestones.map((m, idx) => (
                  <motion.div
                    key={m.year}
                    variants={fadeUpItem}
                    className="relative flex gap-6 pb-10 last:pb-0"
                  >
                    {/* Glowing dot */}
                    <div className="relative z-10 flex flex-col items-center">
                      <span
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 shadow-lg"
                        style={{
                          borderColor: '#D8B56A',
                          background: 'rgba(216,181,106,0.12)',
                          boxShadow: '0 0 18px 4px rgba(216,181,106,0.25)',
                        }}
                      >
                        <m.Icon className="size-4" style={{ color: '#F8E7B5' }} />
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <p
                        className="font-heading text-2xl font-bold tracking-tight sm:text-3xl"
                        style={{
                          background: 'linear-gradient(135deg, #F8E7B5, #D8B56A)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {m.year}
                      </p>
                      <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-white/70">
                        {m.lines.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* Bottom quote */}
              <motion.p
                className="mt-6 border-t border-white/[0.08] pt-6 text-center text-sm italic text-white/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                &ldquo;Built on trust. Growing with families since{' '}
                <span className="font-semibold not-italic" style={{ color: '#D8B56A' }}>
                  1993
                </span>
                .&rdquo;
              </motion.p>
            </div>
          </div>
        </ScrollReveal>

        {/* Text — unchanged */}
        <ScrollReveal direction="left" delay={0.1}>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Story
            </span>
            <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A family name built on trust, quality, and care.
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                What began in 1993 as a single neighbourhood shop has grown into three trusted
                stores serving generations of families. Through every change, our promise has
                stayed the same — honest products, fair prices, and service that feels like family.
              </p>
              <p>
                From your daily provisions to household essentials and trusted healthcare, the
                Shraddha name stands for reliability you can feel the moment you walk through our
                doors.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                  <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

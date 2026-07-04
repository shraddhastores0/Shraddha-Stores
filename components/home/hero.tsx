'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.8])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section ref={ref} id="home" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Interior of a premium Shraddha grocery store"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md"
        >
          <Sparkles className="size-3.5 text-accent" />
          Trusted since 1993
        </motion.span>

        <motion.h1
          variants={item}
          className="font-heading max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Shraddha{' '}
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #F8E7B5 0%, #D8B56A 45%, #FFF8E7 100%)' }}
          >
            Group
          </span>{' '}
          of Stores
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl"
        >
          Three Trusted Stores, One Trusted Family.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#stores"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:scale-[1.03] hover:shadow-xl"
          >
            Explore Stores
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:scale-[1.03] hover:bg-white/20"
          >
            <Phone className="size-4" />
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  )
}

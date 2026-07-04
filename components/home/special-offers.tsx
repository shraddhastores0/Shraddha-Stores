'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Tag, ArrowRight, ShoppingBag, Truck, Headset, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function SpecialOffers() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f0f3f2] via-[#e2ebe8] to-[#1a5b4f] px-7 py-14 shadow-2xl sm:px-14 lg:py-20">
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              {/* Left Column */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                  <Tag className="size-3.5" />
                  Special Offer
                </span>

                <h2 className="font-heading mt-8 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl">
                  Exciting offers <br />
                  <span className="text-[#1a5b4f]">coming soon!</span>
                </h2>

                <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-slate-800">
                  We're preparing special deals across all three stores. Stay tuned for festive savings.
                </p>

                <Link
                  href="#stores"
                  className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03]"
                >
                  Visit Stores
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-center justify-center pt-6 lg:items-end">
                {/* 3 Boxes */}
                <div className="grid w-full grid-cols-3 gap-4 lg:w-auto">
                  {[
                    { v: 'Up to 25%', l: 'Off on groceries', Icon: ShoppingBag },
                    { v: 'Free', l: 'Home delivery', Icon: Truck },
                    { v: '24/7', l: 'WhatsApp orders', Icon: Headset },
                  ].map((o) => {
                    const Icon = o.Icon
                    return (
                      <motion.div
                        key={o.l}
                        whileHover={{ y: -6 }}
                        className="flex flex-col items-center justify-center rounded-2xl border border-white/50 bg-white/30 p-5 text-center shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)] backdrop-blur-md"
                      >
                        <Icon className="mb-3 size-6 text-[#1a5b4f]" />
                        <p className="font-heading text-lg font-bold text-slate-900 sm:text-xl">{o.v}</p>
                        <p className="mt-1 text-[11px] font-medium text-slate-800 sm:text-xs">{o.l}</p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Coming Soon Glowing Banner Area */}
                <div className="mt-16 flex w-full flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center gap-4">
                    <Sparkles className="size-6 text-[#f8e7b5]" />
                    <div className="relative rounded-full border border-[#f8e7b5] bg-white/10 px-8 py-3 shadow-[0_0_20px_rgba(248,231,181,0.3)] backdrop-blur-md">
                      <span className="text-xl font-bold tracking-[0.3em] text-[#134e4a]">
                        COMING SOON
                      </span>
                    </div>
                    <Sparkles className="size-6 text-[#f8e7b5]" />
                  </div>

                  <p className="mt-6 text-sm font-medium text-white/90">
                    Great festive savings are on the way!
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-4 flex items-center justify-center gap-3 opacity-60">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white" />
                    <Sparkles className="size-3 text-white" />
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

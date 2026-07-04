'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/social-icons'

export function FloatingActions({ phone, whatsapp }: { phone: string; whatsapp: string }) {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30"
      >
        <WhatsAppIcon className="size-7" />
      </motion.a>
      <motion.a
        href={`tel:${phone.replace(/\s/g, '')}`}
        aria-label="Call store"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.75, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30"
      >
        <Phone className="size-6" />
      </motion.a>
    </div>
  )
}

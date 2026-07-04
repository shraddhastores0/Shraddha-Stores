'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, Clock, Send, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const details = [
  { icon: Phone, label: 'Phone', value: '+91 85118 87088' },
  { icon: Mail, label: 'Email', value: 'Info.shraddhageneralstore@gmail.com' },
  { icon: Clock, label: 'Hours', value: 'Mon – Sat: 8 AM – 9:30 PM' },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const subject = encodeURIComponent(`Message from ${name} via Website`)
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:Info.shraddhageneralstore@gmail.com?subject=${subject}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="font-heading mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            We&apos;d love to hear from you.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left: details + map */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map((d) => {
                  const Icon = d.icon
                  return (
                    <div key={d.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">{d.value}</p>
                    </div>
                  )
                })}
              </div>

            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal direction="left" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-border bg-card p-7 shadow-lg sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Your name" />
                <Field label="Phone" name="phone" placeholder="Your phone" type="tel" />
              </div>
              <div className="mt-5">
                <Field label="Email" name="email" placeholder="you@example.com" type="email" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl"
              >
                {sent ? (
                  <>
                    <Check className="size-4" /> Message Sent
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string
  name: string
  placeholder: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}

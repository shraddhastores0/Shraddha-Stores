import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { AboutSection } from '@/components/home/about-section'
import { StoresSection } from '@/components/home/stores-section'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { FeaturedProducts } from '@/components/home/featured-products'
import { SpecialOffers } from '@/components/home/special-offers'
import { Testimonials } from '@/components/home/testimonials'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <StoresSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <SpecialOffers />
      <Testimonials />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}

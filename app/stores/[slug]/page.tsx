import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { stores, getStore } from '@/lib/stores'
import { SiteFooter } from '@/components/site-footer'
import { StoreDetail } from '@/components/store/store-detail'

export function generateStaticParams() {
  return stores.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const store = getStore(slug)
  if (!store) return { title: 'Store Not Found | Shraddha Group of Stores' }
  return {
    title: `${store.name} | Shraddha Group of Stores`,
    description: store.description,
  }
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const store = getStore(slug)
  if (!store) notFound()

  const related = stores.filter((s) => s.slug !== store.slug)

  return (
    <>
      <StoreDetail store={store} related={related} />
      <SiteFooter />
    </>
  )
}

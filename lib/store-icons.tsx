import { Package, ShoppingBasket, Cross, type LucideIcon } from 'lucide-react'
import type { StoreSlug } from '@/lib/stores'

export const storeIcons: Record<StoreSlug, LucideIcon> = {
  provision: Package,
  general: ShoppingBasket,
  medical: Cross,
}

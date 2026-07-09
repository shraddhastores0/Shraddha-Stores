export type StoreSlug = 'provision' | 'general' | 'medical'

export type Store = {
  slug: StoreSlug
  name: string
  shortName: string
  tagline: string
  description: string
  longDescription: string
  image: string
  phone: string
  whatsapp: string
  address: string
  hours: { day: string; time: string }[]
  categories: string[]
  suggestedProducts: { name: string; note: string }[]
  mapQuery: string
}

export const stores: Store[] = [
  {
    slug: 'provision',
    name: 'Shraddha Provision Store',
    shortName: 'Provision',
    tagline: 'The pantry your family deserves.',
    description:
      'Premium grains, spices, and everyday essentials sourced for freshness and trusted by generations.',
    longDescription:
      'For over three decades, Shraddha Provision Store has been the heart of the neighbourhood pantry. We hand-pick every grain, spice, and staple to bring you uncompromising freshness and honest value. From fragrant basmati rice to cold-pressed oils and artisanal dry fruits, every shelf is curated with the same care we put into our own kitchens.',
    image: '/images/store-provision.jpg',
    phone: '+91 7698057750 (Darshitbhai)',
    whatsapp: '917698057750',
    address: 'Gunatitnagar chowk, Behind HJ Doshi hospital, Gondal road, Rajkot 360004',
    hours: [
      { day: 'Monday – Saturday', time: '8:00 AM – 9:30 PM' },
      { day: 'Sunday', time: '9:00 AM – 8:00 PM' },
    ],
    categories: [

      'Dal (Lentils)',
      'Flour / Atta',
      'Ready Masala',
      'Ready Roti',
      'Pickles',
      'Kathiyawadi Items',
      'Papad',
      'Mukhwas',
      'Dry Snacks / Farsan',
      'Chikki',
      'Medicines',
      'Papad Khichiya',
      'Oils',
      'Instant Mix',
      'Gathiya',
      'Ready Food',
      'Tea / Tea Masala',
      'Fruit Pulp',
      'Frozen Items',
      'Bakery Items',
      'Dry Fruits',
      'Party Products',
      'Household / Pooja Items',
      'Soda',
      'Medical Products',
      'FMCG Products',
      'Cosmetics',
      'Ice Cream',
      'Cold Drinks / Soft Drinks'

    ],
    suggestedProducts: [
      { name: 'Premium Basmati Rice', note: 'Aged 2 years' },
      { name: 'Cold-Pressed Groundnut Oil', note: 'Wood churned' },
      { name: 'Assorted Dry Fruits', note: 'Hand selected' },
      { name: 'Whole Spice Collection', note: 'Farm fresh' },
    ],
    mapQuery: 'SHRADDHA+GENERAL+STORE,+Rajkot',
  },
  {
    slug: 'general',
    name: 'Shraddha General Store',
    shortName: 'General',
    tagline: 'Everything for a happier home.',
    description:
      'Household, personal care, and daily-use products thoughtfully organised for effortless shopping.',
    longDescription:
      'Shraddha General Store is where convenience meets care. We stock a thoughtfully curated range of household, personal care, and lifestyle products so your daily errands feel effortless. Whether you need cleaning supplies, kitchenware, stationery, or the perfect little gift, our aisles are designed to help you find exactly what you need.',
    image: '/images/store-general.png',
    phone: '+91 85118 87088 (Gopalbhai)',
    whatsapp: '918511887088',
    address: 'Heritage Plus Complex, Shop No. 5 & 6, Krushnagar Main Road, Near Swaminarayan Chowk, Rajkot 360004',
    hours: [
      { day: 'Monday – Saturday', time: '8:30 AM – 9:30 PM' },
      { day: 'Sunday', time: '9:00 AM – 8:00 PM' },
    ],
    categories: [

      'Dal (Lentils)',
      'Flour / Atta',
      'Ready Masala',
      'Ready Roti',
      'Pickles',
      'Kathiyawadi Items',
      'Papad',
      'Mukhwas',
      'Dry Snacks / Farsan',
      'Chikki',
      'Medicines',
      'Papad Khichiya',
      'Oils',
      'Instant Mix',
      'Gathiya',
      'Ready Food',
      'Tea / Tea Masala',
      'Fruit Pulp',
      'Frozen Items',
      'Bakery Items',
      'Dry Fruits',
      'Party Products',
      'Household / Pooja Items',
      'Soda',
      'Medical Products',
      'FMCG Products',
      'Cosmetics',
      'Ice Cream',
      'Cold Drinks / Soft Drinks'

    ],
    suggestedProducts: [
      { name: 'Eco Cleaning Range', note: 'Plant based' },
      { name: 'Premium Kitchenware', note: 'Durable' },
      { name: 'Stationery Essentials', note: 'For school & office' },
      { name: 'Curated Gift Sets', note: 'For every occasion' },
    ],
    mapQuery: 'SHRADDHA+GENERAL+STORE,+Rajkot',
  },
  {
    slug: 'medical',
    name: 'Shraddha Medical Store',
    shortName: 'Medical',
    tagline: 'Care you can count on.',
    description:
      'A trusted pharmacy with genuine medicines, wellness products, and compassionate service.',
    longDescription:
      'Health is the greatest wealth, and Shraddha Medical Store stands by your family through every season of life. Our licensed pharmacy offers genuine prescription and over-the-counter medicines, wellness supplements, and healthcare essentials. With knowledgeable staff and a commitment to authenticity, we make sure you always get the right care at the right time.',
    image: '/images/store-medical.png',
    phone: '+91 74055 81026 (Sanjaybhai)',
    whatsapp: '917405581026',
    address: 'SHRADDHA MEDICAL STORE ,Krushnagar main road Near, swaminarayan chowk,Rajkot 360004',
    hours: [
      { day: 'Monday – Saturday', time: '8:00 AM – 10:00 PM' },
      { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
    ],
    categories: [
      'Prescription Medicines',
      'OTC Medicines',
      'First Aid',
      'Health Supplements',
      'Baby Care',
      'Healthcare Products',
      'Medical Equipment',
      'Pet Foods',
      'Surgical Items',
      'Wide Range Of Pads And Diapers',
      'Cosmetics',
      'Homeopathy And Allopathy Medicines'
    ],
    suggestedProducts: [
      { name: 'Daily Wellness Vitamins', note: 'Doctor recommended' },
      { name: 'First Aid Kits', note: 'Home & travel' },
      { name: 'Baby Care Range', note: 'Gentle & safe' },
      { name: 'Health Monitors', note: 'BP & sugar' },
    ],
    mapQuery: 'Shraddha Medical Stores, 7Q8V+RFG, Krishnanagar Main Rd, beside स्वामिनारायण चौक, Gunatit Nagar, Ganpati Nagar, Sardar Nagar, Rajkot, Gujarat 360004',
  },
]

export function getStore(slug: string) {
  return stores.find((s) => s.slug === slug)
}

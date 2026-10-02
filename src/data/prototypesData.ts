import { PrototypeSpec } from '../types';

export const PROTOTYPE_SPECS: Record<string, PrototypeSpec> = {
  salon: {
    id: 'salon',
    name: 'Barbercrop Salon',
    tagline: 'Professional Barbershop & Men Grooming Atelier',
    category: 'Salon & Barber',
    livePath: '/demo/salon',
    colorScheme: {
      primary: '#E50914',
      accent: '#FF3333',
      bg: '#111111',
      badge: 'bg-red-500/20 text-red-400 border border-red-500/30'
    },
    keyFeatures: [
      'Editorial monochrome hero with vintage typography & crimson accents',
      'Interactive 6-tier grooming service catalog with pricing',
      'Live opening hours timetable & master barber booking system',
      'Curated men styling blog cards & newsletter lead capture'
    ],
    designHighlights: [
      'High-contrast black & red palette inspired by classic barbershops',
      'Oswald condensed display typography paired with crisp sans-serif',
      'Atmospheric dark textures and sleek scissor iconography',
      'Dedicated appointment modal with service & time picker'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'Lucide Icons', 'Motion']
  },
  restaurant: {
    id: 'restaurant',
    name: 'Crunch Restaurant',
    tagline: 'Crispy Flavor, Delivered Fast — Modern Food Ordering Experience',
    category: 'Restaurant & Fast Casual',
    livePath: '/demo/restaurant',
    colorScheme: {
      primary: '#FF6400',
      accent: '#FFA500',
      bg: '#0F0F12',
      badge: 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
    },
    keyFeatures: [
      'Interactive multi-category menu filter (Chicken, Burgers, Wraps, Sides)',
      'Signature dish cards with bestseller badges & instant cart addition',
      'Family sharing bundles & Weekend Crunch Fest promo banner',
      'Real-time animated delivery status tracker & Crunch Rewards wallet'
    ],
    designHighlights: [
      'Energetic dark kitchen aesthetic with sizzling amber & orange highlights',
      'Outfit modern rounded sans typography for appetite appeal',
      'Persistent cart drawer with live subtotal calculation and checkout',
      'Mobile-first layout with fixed app-like bottom navigation'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'Stateful Cart Drawer', 'Order Tracker']
  },
  clinic: {
    id: 'clinic',
    name: 'Evermiles Dental Clinic',
    tagline: 'Modern Dental Care for a Healthier You — Luxury Medical Practice',
    category: 'Healthcare & Clinic',
    livePath: '/demo/clinic',
    colorScheme: {
      primary: '#0D2B24',
      accent: '#2A725D',
      bg: '#F8F7F4',
      badge: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
    },
    keyFeatures: [
      'Refined medical luxury aesthetic with emerald and warm cream palette',
      '4 Core patient pillars: Tech, Team, Personalization, Comfort',
      'Interactive 6-category dental services catalog with detail previews',
      'Verified patient testimonials, practice statistics & consultation booking'
    ],
    designHighlights: [
      'Playfair Display serif headlines paired with Plus Jakarta Sans body',
      'Clean architectural reception layout and airy clinical hierarchy',
      'High-conversion dark emerald CTA banner: "Your Best Smile Is Just a Click Away"',
      'Doctor appointment booking modal with specialty selection'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'Serif Luxury Styling', 'Patient Booking']
  }
};

export const SALON_SERVICES = [
  {
    id: 'haircut',
    title: 'HAIRCUT',
    price: 'FROM $30',
    description: 'Precision scissor cut, hot towel finish, luxury wash and tailored pomade styling.',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'moustache',
    title: 'MOUSTACHE',
    price: 'FROM $30',
    description: 'Bespoke shaping, trimming, contour definition and conditioning wax treatment.',
    duration: '25 mins',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'shave',
    title: 'SHAVE',
    price: 'FROM $30',
    description: 'Traditional straight razor shave with pre-shave oil, hot lathers and soothing balm.',
    duration: '40 mins',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'stacking',
    title: 'STACKING',
    price: 'FROM $30',
    description: 'Modern skin fade layer stacking with seamless graduation and sharp temple tapers.',
    duration: '50 mins',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'beardtrim',
    title: 'BEARDTRIM',
    price: 'FROM $30',
    description: 'Full beard architecture sculpting, line-up razor edging and organic beard oil hydration.',
    duration: '35 mins',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hairdyeing',
    title: 'HAIR DYEING',
    price: 'FROM $30',
    description: 'Subtle gray blending, platinum bleaching or natural tone enhancement with scalp care.',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=600&q=80'
  }
];

export const SALON_HOURS = [
  { day: 'MONDAY', hours: '9:00 am – 7:30 pm' },
  { day: 'TUESDAY', hours: '9:00 am – 7:30 pm' },
  { day: 'WEDNESDAY', hours: '9:00 am – 7:30 pm' },
  { day: 'THURSDAY', hours: '9:00 am – 7:30 pm' },
  { day: 'FRIDAY', hours: '9:00 am – 7:30 pm' },
  { day: 'SAT / SUN', hours: 'CLOSED' }
];

export const SALON_BLOGS = [
  {
    id: 1,
    title: '5 ADVANTAGES WHY YOU SHOULD VISIT BARBERSHOP',
    date: '04 August, 2024',
    readTime: '4 min read',
    excerpt: 'Discover why standard salons cannot replace master barbering techniques, hot lather straight razors, and facial geometry analysis.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'POPULAR COSMETICS FOR HAIR STYLING',
    date: '02 August, 2024',
    readTime: '6 min read',
    excerpt: 'Water-based pomades versus matte clay pastes: choosing the right product for natural hold, texture, and humidity resistance.',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'FEATURES OF BEARD AND MUSTACHE CARE',
    date: '12 July, 2024',
    readTime: '5 min read',
    excerpt: 'Essential daily habits, comb materials, and botanical oils to maintain healthy beard growth without skin irritation.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80'
  }
];

export const RESTAURANT_CATEGORIES = [
  { id: 'chicken', label: 'Fried Chicken', icon: '🍗' },
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'wraps', label: 'Wraps', icon: '🌯' },
  { id: 'sides', label: 'Sides', icon: '🍟' },
  { id: 'drinks', label: 'Drinks', icon: '🥤' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
  { id: 'healthy', label: 'Healthy', icon: '🥗' }
];

export const SIGNATURE_DISHES = [
  {
    id: 'crispy-chicken-bucket',
    title: 'Crispy Chicken Bucket',
    category: 'chicken',
    price: 12.99,
    tag: 'BESTSELLER',
    calories: '840 kcal',
    description: 'Golden double-breaded chicken pieces steeped in 14 aromatic herbs and spices.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spicy-crunch-burger',
    title: 'Spicy Crunch Burger',
    category: 'burgers',
    price: 9.49,
    tag: 'BESTSELLER',
    calories: '650 kcal',
    description: 'Crispy fried thigh fillet, pickled jalapeño crunch, habanero crema on brioche.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'korean-bbq-wings',
    title: 'Korean BBQ Wings',
    category: 'chicken',
    price: 11.49,
    tag: 'BESTSELLER',
    calories: '710 kcal',
    description: 'Crispy wings tossed in gochujang garlic honey glaze topped with toasted sesame.',
    image: 'https://images.unsplash.com/photo-1527477378408-164414f6d338?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chicken-tenders',
    title: 'Chicken Tenders',
    category: 'chicken',
    price: 8.99,
    tag: 'FAVORITE',
    calories: '520 kcal',
    description: 'Hand-cut whole tenderloins served with smoky chipotle dip and pickles.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAMILY_BUNDLES = [
  {
    id: 'family-feast',
    name: 'Family Feast',
    badge: 'FAMILY FEAST',
    price: 29.99,
    description: '10 PCS Chicken + 2 Large Sides + 4 Drinks',
    serves: '3–4 Persons',
    details: 'Includes 10 golden crispy chicken pieces, choice of seasoned wedges or coleslaw, and 4 refreshing soft drinks.',
    image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mega-bundle',
    name: 'Mega Bundle',
    badge: 'MEGA BUNDLE',
    price: 42.99,
    description: '15 PCS Chicken + 3 Large Sides + 6 Drinks',
    serves: '5–7 Persons',
    details: 'Ultimate sharing crate with 15 crisp pieces, loaded cajun fries, mac & cheese, sweet slaw, and 6 cold drinks.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  }
];

export const CLINIC_SERVICES = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Preventive cleanings, digital check-ups, and dental sealants for lifelong oral health.',
    features: ['Comprehensive Oral Exam', 'Ultrasonic Scaling', 'Cavity Prevention'],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Porcelain veneers, laser teeth whitening, and smile makeovers for a radiant appearance.',
    features: ['Philips Zoom Whitening', 'Ultra-Thin Veneers', 'Enamel Recontouring'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent titanium and zirconia tooth replacements designed for maximum comfort and chewing power.',
    features: ['3D CBCT Guided Surgery', 'Single & All-on-4', 'Lifetime Warranty Option'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Clear invisible aligners and discreet modern braces for perfectly aligned smiles at any age.',
    features: ['Invisalign Certified', 'Digital Smile Simulation', 'Accelerated Treatment'],
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pediatric',
    title: 'Child Dentistry',
    description: 'Gentle, anxiety-free pediatric dental care in a welcoming and cheerful environment.',
    features: ['Pain-Free Gentle Numbing', 'Fluoride Protection', 'Friendly Fun Staff'],
    image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Microscopic endodontic therapy that relieves pain and rescues your natural tooth.',
    features: ['Rotary Endodontics', 'Single-Visit Relief', 'High Precision Microscope'],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80'
  }
];

export const CLINIC_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    treatment: 'Invisalign & Whitening',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    review: 'The staff is so friendly and professional. I finally feel confident about my smile! The 3D scan before treatment showed me exactly how my teeth would move.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ahmed R.',
    treatment: 'Dental Implant Restoration',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    review: 'Excellent service and advanced technology. The whole experience was smooth and comfortable. No pain at all during or after the procedure.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ayesha K.',
    treatment: 'Cosmetic Veneers',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    review: 'Best dental clinic in town! They really care about their patients and their comfort. The clinic feels more like a 5-star hotel than a dental practice.',
    rating: 5
  }
];

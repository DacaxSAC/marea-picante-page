import { MenuItem, Testimonial, NavItem, ContactInfo, SocialLink } from '../types';

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Carta', path: '/carta' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Sobre nosotros', path: '/sobre-nosotros' }
];

// Menu items data
export const MENU_ITEMS: MenuItem[] = [
  {
    image: '/src/assets/images/mhf5ra4p-aly5l1e.png',
    title: 'Ceviche Clásico',
    description: 'Pescado fresco marinado en limón, cebolla morada, ají limo y cilantro. Acompañado de camote y choclo.',
    price: 'S/ 28'
  },
  {
    image: '/src/assets/images/mhf5ra4p-mpjjmfy.png',
    title: 'Arroz con Mariscos',
    description: 'Arroz amarillo con mariscos frescos, culantro y ají amarillo. Una explosión de sabores del mar.',
    price: 'S/ 35'
  },
  {
    image: '/src/assets/images/mhf5ra4p-aly5l1e.png',
    title: 'Anticuchos de Pulpo',
    description: 'Tiernos trozos de pulpo marinados en ají panca, acompañados de papa dorada y salsa criolla.',
    price: 'S/ 32'
  },
  {
    image: '/src/assets/images/mhf5ra4p-mpjjmfy.png',
    title: 'Causa Limeña',
    description: 'Papa amarilla con ají amarillo, rellena de pollo o atún, palta y mayonesa. Un clásico renovado.',
    price: 'S/ 24'
  }
];

// Testimonials data
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'María González',
    role: 'Cliente frecuente',
    content: 'La experiencia en Marea Picante es simplemente extraordinaria. Cada plato es una obra de arte que combina sabores auténticos con presentación impecable.',
    rating: 5
  },
  {
    name: 'Carlos Mendoza',
    role: 'Food blogger',
    content: 'Sin duda, uno de los mejores restaurantes de cocina peruana que he visitado. La frescura de los ingredientes y la creatividad en cada preparación es excepcional.',
    rating: 5
  },
  {
    name: 'Ana Rodríguez',
    role: 'Empresaria',
    content: 'Marea Picante se ha convertido en mi lugar favorito para reuniones de negocios. El ambiente, la atención y por supuesto, la comida, son de primera clase.',
    rating: 5
  }
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  address: 'Av. Larco 1234, Miraflores, Lima, Perú',
  phone: '+51 1 234-5678',
  email: 'info@mareapicante.pe',
  hours: 'Lun - Dom: 12:00 PM - 11:00 PM'
};

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', url: 'https://facebook.com/mareapicante', icon: 'f' },
  { platform: 'Instagram', url: 'https://instagram.com/mareapicante', icon: 'ig' },
  { platform: 'Twitter', url: 'https://twitter.com/mareapicante', icon: 'tw' }
];

// Brand information
export const BRAND_INFO = {
  name: 'Marea Picante',
  tagline: 'El sabor del mar en cada bocado',
  description: 'Sabores auténticos del mar peruano en cada bocado. Una experiencia gastronómica que celebra la tradición y la innovación.',
  logo: 'M'
};

// Color palette
export const COLORS = {
  primary: '#48dfd6',
  navy: '#061854',
  white: '#ffffff',
  gray: {
    light: '#f8fafc',
    medium: '#64748b',
    dark: '#334155'
  }
} as const;
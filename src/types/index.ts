// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button component types
export type ButtonVariant = 'primary' | 'secondary' | 'contact' | 'contact-mobile';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Menu item types
export interface MenuItem {
  image: string;
  title: string;
  description: string;
  price: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

// Navigation types
export interface NavItem {
  name: string;
  path: string;
}

// Contact information types
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

// Social media types
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
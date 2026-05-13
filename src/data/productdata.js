import { Globe, ShieldCheck, Truck, Package, MessageSquare } from "lucide-react";

export const PRODUCTS = [
  {
    id: 1,
    name: "AKIJ ESSENTIAL CHINIGURA RICE",
    image: "/images/image-1.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 120 },
      { size: "2kg", packUnits: 5, price: 235 },
      { size: "5kg", packUnits: 2, price: 580 },
    ],
  },
  {
    id: 2,
    name: "AKIJ ESSENTIAL KALIJEERA RICE",
    image: "/images/image-2.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 140 },
      { size: "2kg", packUnits: 5, price: 270 },
      { size: "5kg", packUnits: 2, price: 650 },
    ],
  },
  {
    id: 3,
    name: "Pure Chinigura Rice",
    image: "/images/image-3.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 115 },
      { size: "2kg", packUnits: 5, price: 220 },
      { size: "5kg", packUnits: 2, price: 560 },
    ],
  },
  {
    id: 4,
    name: "Pure Kalijeera Rice",
    image: "/images/image-4.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 135 },
      { size: "2kg", packUnits: 5, price: 260 },
      { size: "5kg", packUnits: 2, price: 640 },
    ],
  },
  {
    id: 5,
    name: "ARK White Binni Rice",
    image: "/images/imgae-5.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 95 },
    ],
  },
  {
    id: 6,
    name: "ARK Red Binni Rice",
    image: "/images/image-3.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 105 },
    ],
  },
  {
    id: 7,
    name: "Essential Rice Flour",
    image: "/images/image-1.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 85 },
    ],
  },
  {
    id: 8,
    name: "Essential Red Lentil",
    image: "/images/image-2.jpg",
    variants: [
      { size: "1000gm", packUnits: 10, price: 150 },
    ],
  },
  {
    id: 9,
    name: "ARK MUNG DAL",
    image: "/images/image-3.jpg",
    variants: [
      { size: "1kg", packUnits: 10, price: 165 },
    ],
  },
  {
    id: 10,
    name: "ARK Kheshari Dal (Yellow Lentil)",
    image: "/images/image-4.jpg",
    variants: [
      { size: "1000gm", packUnits: 10, price: 130 },
    ],
  },
  {
    id: 11,
    name: "ARK Chatpoti Dal (Yellow Peas)",
    image: "/images/imgae-5.jpg",
    variants: [
      { size: "500gm", packUnits: 20, price: 75 },
    ],
  },
  {
    id: 12,
    name: "ARK Red Flattened Rice (Chira)",
    image: "/images/image-1.jpg",
    variants: [
      { size: "500gm", packUnits: 20, price: 60 },
    ],
  },
  {
    id: 13,
    name: "PURE Flattened Rice (Chira)",
    image: "/images/image-4.jpg",
    variants: [
      { size: "500gm", packUnits: 20, price: 65 },
    ],
  },
  {
    id: 14,
    name: "ARK Puffed Rice",
    image: "/images/image-2.jpg",
    variants: [
      { size: "250gm", packUnits: 32, price: 40 },
      { size: "500gm", packUnits: 16, price: 75 },
    ],
  },
  {
    id: 15,
    name: "ACI Pure Vermicelli",
    image: "/images/image-4.jpg",
    variants: [
      { size: "200gm", packUnits: 48, price: 35 },
    ],
  },
];
export const WHY_CHOOSE = [
  {
    icon: Globe,
    title: "Trusted Global Suppliers",
    description:
      "We work only with verified producers and exporters, maintaining long-term partnerships built on consistency and integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety First",
    description:
      "Products are sourced and handled according to international food safety standards, ensuring compliance at every destination.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Efficient shipping, proper documentation, and on-time delivery — from origin to your warehouse with full transparency.",
  },
  {
    icon: Package,
    title: "Flexible Order Volumes",
    description:
      "Suitable for both large-scale buyers and growing businesses. We accommodate your needs as your business scales.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Clear updates from order placement through to delivery, so you always know exactly where your shipment stands.",
  },
];
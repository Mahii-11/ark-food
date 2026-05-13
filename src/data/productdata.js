import { Globe, ShieldCheck, Truck, Package, MessageSquare } from "lucide-react";

export const PRODUCTS = [
  {
    id: 1,
    name: "AKIJ ESSENTIAL CHINIGURA RICE",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 120 },
      { size: "2kg", packUnits: 5, price: 235 },
      { size: "5kg", packUnits: 2, price: 580 },
    ],
  },
  {
    id: 2,
    name: "AKIJ ESSENTIAL KALIJEERA RICE",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 140 },
      { size: "2kg", packUnits: 5, price: 270 },
      { size: "5kg", packUnits: 2, price: 650 },
    ],
  },
  {
    id: 3,
    name: "Pure Chinigura Rice",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 115 },
      { size: "2kg", packUnits: 5, price: 220 },
      { size: "5kg", packUnits: 2, price: 560 },
    ],
  },
  {
    id: 4,
    name: "Pure Kalijeera Rice",
    image: "https://images.unsplash.com/photo-1590333746431-31835978fd65?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 135 },
      { size: "2kg", packUnits: 5, price: 260 },
      { size: "5kg", packUnits: 2, price: 640 },
    ],
  },
  {
    id: 5,
    name: "ARK White Binni Rice",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 95 },
    ],
  },
  {
    id: 6,
    name: "ARK Red Binni Rice",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 105 },
    ],
  },
  {
    id: 7,
    name: "Essential Rice Flour",
    image: "https://images.pexels.com/photos/5765/powder-cooking-ingredient-flour.jpg?auto=compress&cs=tinysrgb&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 85 },
    ],
  },
  {
    id: 8,
    name: "Essential Red Lentil",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1000gm", packUnits: 10, price: 150 },
    ],
  },
  {
    id: 9,
    name: "ARK MUNG DAL",
    image: "https://images.unsplash.com/photo-1585994192629-7a4f9418b63e?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1kg", packUnits: 10, price: 165 },
    ],
  },
  {
    id: 10,
    name: "ARK Kheshari Dal (Yellow Lentil)",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "1000gm", packUnits: 10, price: 130 },
    ],
  },
  {
    id: 11,
    name: "ARK Chatpoti Dal (Yellow Peas)",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "500gm", packUnits: 20, price: 75 },
    ],
  },
  {
    id: 12,
    name: "ARK Red Flattened Rice (Chira)",
    image: "https://images.pexels.com/photos/15720042/pexels-photo-15720042.jpeg?auto=compress&cs=tinysrgb&w=800",
    variants: [
      { size: "500gm", packUnits: 20, price: 60 },
    ],
  },
  {
    id: 13,
    name: "PURE Flattened Rice (Chira)",
    image: "https://images.unsplash.com/photo-1625944525533-473f8a3d54e7?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "500gm", packUnits: 20, price: 65 },
    ],
  },
  {
    id: 14,
    name: "ARK Puffed Rice",
    image: "https://images.unsplash.com/photo-1590333746431-31835978fd65?auto=format&fit=crop&q=80&w=800",
    variants: [
      { size: "250gm", packUnits: 32, price: 40 },
      { size: "500gm", packUnits: 16, price: 75 },
    ],
  },
  {
    id: 15,
    name: "ACI Pure Vermicelli",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800",
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
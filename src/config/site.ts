import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Pusat Bantuan", // shown in the header
  description:
    "Anda punya pertanyaan tentang KLIK Indonesia?",
  image: "/illustration/hero01.svg",
  links: {
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    email: "help@eklik.id",
    whatsapp: "",
    phone: "",
  },
  company: {
    name: "KMP Ardhayana"
  },
  header: {
    logo: "/images/logo.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Courses",
        href: "/courses",
      },
      {
        title: "Useful tools",
        href: "/tools",
      },
    ],
  },
  heroBanner: {
    title: {
      1: [
        { text: "Pusat Bantuan " },
      ],
      2: [{ text: "Klik Indonesia" }],
    },
    subtitle:
      "Kami siap membantu Anda menjelajahi fitur-fitur kami dengan mudah. Temukan solusi cepat untuk pertanyaan Anda di sini!",
    callToActions: [
      {
        label: "Selengkapnya",
        href: "#",
      },
      {
        label: "Explore",
        href: "#",
      },
    ],
  },
}
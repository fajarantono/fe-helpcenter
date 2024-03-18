import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Pusat Bantuan Klik Indonesia", // shown in the header
  description:
    "Anda punya pertanyaan tentang KLIK Indonesia?",
  image: "/images/hero/illustration01.png",
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
      "Make your own portfolio + Notion-powered blog in minutes with Next.js and Vercel.",
    callToActions: [
      {
        label: "Read the blog",
        href: "/blog",
      },
      {
        label: "Explore my projects",
        href: "/#projects",
      },
    ],
  },
}
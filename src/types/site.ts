import { format } from "date-fns"
import { INavItem } from "./nav"

export interface ILinks {
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
  whatsapp?: string
  email?: string
  phone?: string
}

export interface IHeroBanner {
  title: {
    [sectionNumber: string]: {
      text: string
      highlighted?: boolean
    }[]
  }
  subtitle: string
  callToActions: {
    label: string
    href: string
  }[]
}

export interface ISiteConfig {
  name: string
  description: string
  image: string
  links: ILinks
  header: { logo?: string; nav: INavItem[] }
  heroBanner: IHeroBanner
}
import { ReactNode } from "react"

export interface Project {
  id: number
  name: string
  image: string
  shortDescription: string
  showMore: boolean
  description: string
  video?: ReactNode | undefined
  images: string[]
}

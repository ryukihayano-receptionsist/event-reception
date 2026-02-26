import casesData from '@/data/cases.json'
import resourcesData from '@/data/resources.json'
import helpsData from '@/data/helps.json'

export type ContentItem = {
  slug: string
  title: string
  date: string
  excerpt: string
  thumbnail?: string
  content: string
  meta?: Record<string, string>
}

export function getAllCases(): ContentItem[] {
  return casesData as ContentItem[]
}

export function getCaseBySlug(slug: string): ContentItem | undefined {
  return (casesData as ContentItem[]).find((item) => item.slug === slug)
}

export function getAllResources(): ContentItem[] {
  return resourcesData as ContentItem[]
}

export function getResourceBySlug(slug: string): ContentItem | undefined {
  return (resourcesData as ContentItem[]).find((item) => item.slug === slug)
}

export function getAllHelps(): ContentItem[] {
  return helpsData as ContentItem[]
}

export function getHelpBySlug(slug: string): ContentItem | undefined {
  return (helpsData as ContentItem[]).find((item) => item.slug === slug)
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

/** カテゴリID → 表示ラベル */
export const CATEGORY_LABELS: Record<string, string> = {
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  'web-api': 'Web API',
  react: 'React',
  nextjs: 'Next.js',
  go: 'Go',
  backend: 'Backend',
  'cs-fundamentals': 'CS',
  'software-design': 'Design',
}

export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category
}

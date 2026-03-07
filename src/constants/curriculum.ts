/** カテゴリID → 表示ラベル */
export const CATEGORY_LABELS = {
  'js-ts': 'JS/TS',
  react: 'React',
  nextjs: 'Next.js',
  go: 'Go',
  backend: 'Backend',
  'cs-fundamentals': 'CS',
  'software-design': 'Design',
} as const

/** TS/JS/Web API を js-ts にまとめる */
const CATEGORY_MERGE: Record<string, keyof typeof CATEGORY_LABELS> = {
  typescript: 'js-ts',
  javascript: 'js-ts',
  'web-api': 'js-ts',
}

export function normalizeCategory(category: string): keyof typeof CATEGORY_LABELS {
  return CATEGORY_MERGE[category] ?? category
}

export function getCategoryLabel(category: string): string {
  const normalized = normalizeCategory(category)
  return CATEGORY_LABELS[normalized]
}

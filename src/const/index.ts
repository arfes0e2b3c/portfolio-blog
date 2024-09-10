export const PageType = {
	create: 'CREATE',
	edit: 'EDIT',
} as const
export type PageTypeUnion = ConstUnion<typeof PageType>

export type ConstUnion<T> = T[keyof T]

import { ArticleResponse, CategoryResponse } from '@/types'

export const UseFetchCategories = async (): Promise<CategoryResponse> => {
	const categoryList = await fetch('/api/category/list')

	return categoryList.json()
}

import { CategoryResponse } from '@/types'
import { initMicroCms } from './axios'

export const fetchCategoryList = async () => {
	const categoryList = await initMicroCms()
		.get<CategoryResponse>('categories')
		.then((res) => {
			return res.data
		})

	return categoryList
}

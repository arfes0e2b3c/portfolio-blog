import { fetchCategoryList } from '@/api/categoryList'
import { CategoryResponse } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CategoryResponse>
) {
	const categoryList = await fetchCategoryList()
	res.status(200).json(categoryList)
}

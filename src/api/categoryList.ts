import { initMicroCms } from './axios'
import { CategoryResponse } from '@/types'

export const fetchCategoryList = async () => {
  const categoryList = await initMicroCms()
    .get<CategoryResponse>('categories')
    .then((res) => {
      return res.data
    })

  return categoryList
}

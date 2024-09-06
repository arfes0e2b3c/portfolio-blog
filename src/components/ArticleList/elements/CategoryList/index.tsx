import { CategoryResponse } from '@/types'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
	categoryIndex,
	categoryList,
	categoryListItem,
	selected,
} from './style.css'

export const CategoryList = (props: {
	categories: CategoryResponse
	selectedCategory: { index: number; id: string }
	setSelectedCategory: (arg0: { index: number; id: string }) => void
}) => {
	const { categories, selectedCategory, setSelectedCategory } = props
	return (
		<ul
			className={categoryList}
			style={assignInlineVars({
				[categoryIndex]: selectedCategory.index.toString(),
			})}
		>
			<li
				className={[
					categoryListItem,
					selectedCategory.id === '' ? selected : '',
				].join(' ')}
				onClick={() => setSelectedCategory({ index: 0, id: '' })}
			>
				全て
			</li>
			{categories?.contents?.map((category, index) => {
				return (
					<li
						className={[
							categoryListItem,
							selectedCategory.id === category.id ? selected : '',
						].join(' ')}
						key={category.id}
						onClick={() =>
							setSelectedCategory({ index: index + 1, id: category.id })
						}
					>
						{category.name}
					</li>
				)
			})}
		</ul>
	)
}

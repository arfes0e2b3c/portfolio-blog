import { Category } from '@/types'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Noto_Sans_JP, Zen_Kaku_Gothic_Antique } from 'next/font/google'
import { categoryList, categoryListSection } from './index.css'

const notoSansJpThin = Noto_Sans_JP({
	weight: '100',
	subsets: ['latin'],
})

export const CategoryList = (props: {
	categories: Category[]
	onClick: (categoryId: string) => void
}) => {
	return (
		<section className={categoryListSection}>
			<select
				className={categoryList}
				style={assignInlineVars({
					fontFamily: notoSansJpThin.style.fontFamily,
				})}
				name='category'
				id='category'
				onChange={(e) => {
					props.onClick(e.target.value)
				}}
			>
				<option value=''>カテゴリを選択してください</option>
				{props.categories?.map((category) => {
					return (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					)
				})}
			</select>
		</section>
	)
}

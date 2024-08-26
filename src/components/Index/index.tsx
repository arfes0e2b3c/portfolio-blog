import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Pragati_Narrow } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { ProductHead } from './elements/ProductHead'
import { ProfileBody } from './elements/ProfileBody'
import { ProfileHead } from './elements/ProfileHead'
import { RecentPost } from './elements/RecentPost'
import { SkillBody } from './elements/SkillBody'
import { SkillHead } from './elements/SkillHead'
import { ProductBody } from './elements/productBody'
import { UseFetchArticleList } from '@/hooks/articleListHooks'
import { ArticleResponse, ParallaxNums } from '@/types'
import {
	productBody,
	productContainer,
	productHead,
	profileBody,
	profileContainer,
	profileHead,
	skillBody,
	skillContainer,
	skillHead,
} from './index.css'
export const Index = (props: { articleList: ArticleResponse }) => {
	const [displayWidth, setDisplayWidth] = useState(1920)
	useEffect(() => {
		setDisplayWidth(window.innerWidth)
	}, [])

	const {
		data: result,
		isLoading,
		isError,
	} = useQuery('user-articles', UseFetchArticleList, {
		refetchOnWindowFocus: false,
		initialData: props.articleList,
	})
	const articleList = result && result.contents
	if (isLoading) {
		return <span>Loading...</span>
	}

	if (isError) {
		return <span>Error fetching articles</span>
	}

	if (displayWidth > 768) {
		return (
			<>
				<div className={profileContainer}>
					<div className={profileHead}>
						<ProfileHead />
					</div>
					<div className={profileBody}>
						<ProfileBody />
					</div>
				</div>
				<div>
					<RecentPost articleList={articleList ?? []} />
				</div>
				<div className={skillContainer}>
					<div className={skillHead}>
						<SkillHead />
					</div>
					<div className={skillBody}>
						<SkillBody />
					</div>
				</div>
				<div className={productContainer}>
					<div className={productHead}>
						<ProductHead />
					</div>
					<div className={productBody}>
						<ProductBody />
					</div>
				</div>
			</>
		)
	} else {
		return (
			<>
				<ProfileHead />
				<ProfileBody />
				<RecentPost articleList={articleList ?? []} />
				<SkillBody />
				<ProductHead />
				<ProductBody />
			</>
		)
	}
}

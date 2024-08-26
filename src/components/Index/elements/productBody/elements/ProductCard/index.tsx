import Image from 'next/image'
import {
	productCard,
	productCardWrapper,
	productImage,
	productTitle,
	productTitleContainer,
} from './styles/productCard.css'

export const ProductCard = (props: {
	href: string
	imageSrc: string
	title: string
}) => {
	return (
		<a className={productCardWrapper} href={props.href} target='_blank'>
			<div className={productCard}>
				<Image
					className={productImage}
					src={props.imageSrc}
					alt='プロダクトのサムネイル画像'
					width={600}
					height={315}
				/>
				<div className={productTitleContainer}>
					<p className={productTitle}>{props.title}</p>
				</div>
			</div>
		</a>
	)
}

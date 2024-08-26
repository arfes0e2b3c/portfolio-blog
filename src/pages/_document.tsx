import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang='ja'>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='favicons/apple-touch-icon.png'
				/>
				{/* <link rel='icon' type='image/png' sizes='32x32' href='favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicons/favicon-16x16.png' /> */}
				{/* <link rel='manifest' href='favicons/site.webmanifest' crossorigin='use-credentials' /> */}
				<link
					rel='mask-icon'
					href='favicons/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
				<meta property='og:title' content="Arfes's Portfolio & Blog" />
				<meta property='og:description' content="Arfes's Portfolio & Blog" />
				<meta property='og:type' content='article' />
				<meta property='twitter:title' content='Arfes' />
				<meta property='twitter:card' content='summary_large_image' />
				<link rel='icon' href='favicons/favicon.ico' />
				<Script src='https://embed.zenn.studio/js/listen-embed-event.js'></Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

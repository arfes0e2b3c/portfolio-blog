import { Gauge } from './elements/Gauge'
import {
	skillBody,
	skillBodyInner,
	skillContainer,
	skillItem,
	skillList,
	skillTitle,
} from './styles/skillBody.css'

const languages = [
	{
		path: 'html.svg',
		level: '90',
		href: 'https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics',
	},
	{
		path: 'css.svg',
		level: '90',
		href: 'https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/CSS_basics',
	},
	{
		path: 'javascript.svg',
		level: '90',
		href: 'https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
	},
	{
		path: 'typescript.svg',
		level: '80',
		href: 'https://www.typescriptlang.org/',
	},
	{
		path: 'php.svg',
		level: '80',
		href: 'https://www.php.net/manual/ja/index.php',
	},
	{
		path: 'python.svg',
		level: '70',
		href: 'https://www.python.org/',
	},
	{
		path: 'go.svg',
		level: '75',
		href: 'https://www.ruby-lang.org/ja/',
	},
	{
		path: 'ruby.svg',
		level: '20',
		href: 'https://www.ruby-lang.org/ja/',
	},
	{
		path: 'dart.svg',
		level: '10',
		href: 'https://dart.dev/',
	},
	{
		path: 'swift.svg',
		level: '20',
		href: 'https://www.apple.com/jp/swift/',
	},
	{
		path: 'toeic.png',
		level: '88',
		displayLevel: '880',
		href: 'https://www.iibc-global.org/toeic.html',
	},
]
const libraries = [
	{
		path: 'vuejs.svg',
		level: '85',
		href: 'https://ja.vuejs.org/',
	},
	{
		path: 'nuxtjs.svg',
		level: '90',
		href: 'https://nuxtjs.org/',
	},
	{
		path: 'reactjs.svg',
		level: '90',
		href: 'https://ja.legacy.reactjs.org/',
	},
	{
		path: 'nextjs.svg',
		level: '80',
		href: 'https://nextjs.org/',
	},
	{
		path: 'svelte.svg',
		level: '20',
		href: 'https://svelte.jp/',
	},
	{
		path: 'laravel.svg',
		level: '85',
		href: 'https://laravel.com/',
	},
	{
		path: 'rubyonrails.svg',
		level: '15',
		href: 'https://rubyonrails.org/',
	},
	{
		path: 'flutter.svg',
		level: '10',
		href: 'https://flutter.dev/',
	},
]
const tools = [
	{
		path: 'docker.svg',
		level: '40',
		href: 'https://www.docker.com/',
	},
	{
		path: 'github.svg',
		level: '90',
		href: 'https://github.com/arfes0e2b3c',
	},
	{
		path: 'googlecloud.svg',
		level: '40',
		href: 'https://console.cloud.google.com/',
	},
	{
		path: 'firebase.svg',
		level: '50',
		href: 'https://firebase.google.com',
	},
	{
		path: 'vercel.svg',
		level: '80',
		href: 'https://vercel.com/',
	},
	{
		path: 'graphql.svg',
		level: '80',
		href: 'https://graphql.org/',
	},
	{
		path: 'figma.svg',
		level: '40',
		href: 'https://www.figma.com/ja/',
	},
	{
		path: 'aws.svg',
		level: '15',
		href: 'https://aws.amazon.com/jp/',
	},
]

export const SkillBody = () => {
	return (
		<section className={skillBody}>
			<div className={skillBodyInner}>
				<div className={skillContainer}>
					<h2 className={skillTitle}>Languages</h2>
					<ul className={skillList}>
						{languages.map((lang, index) => {
							return (
								<li className={skillItem} key={index}>
									<Gauge
										path={lang.path}
										level={lang.level}
										displayLevel={lang.displayLevel ?? ''}
										href={lang.href}
									/>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={skillContainer}>
					<h2 className={skillTitle}>Libraries</h2>
					<ul className={skillList}>
						{libraries.map((lib, index) => {
							return (
								<li className={skillItem} key={index}>
									<Gauge path={lib.path} level={lib.level} href={lib.href} />
								</li>
							)
						})}
					</ul>
				</div>
				<div className={skillContainer}>
					<h2 className={skillTitle}>Tools</h2>
					<ul className={skillList}>
						{tools.map((tool, index) => {
							return (
								<li className={skillItem} key={index}>
									<Gauge path={tool.path} level={tool.level} href={tool.href} />
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</section>
	)
}

import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { card, logoImage, skillLevel, strokePercent, svg } from './styles/gauge.css'

const circleR = 60

const notoSansJpBold = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const Gauge = (props: { path: string; level: string; href: string }) => {
  return (
    <a href={props.href} target='_blank'>
      <div className={card}>
        <svg className={svg}>
          <circle cx={circleR} cy={circleR} r={circleR}></circle>
          <circle
            cx={circleR}
            cy={circleR}
            r={circleR}
            style={assignInlineVars({
              [strokePercent]: props.level,
            })}
          ></circle>
        </svg>
        <Image
          className={logoImage}
          src={`/lang_logos/${props.path}`}
          alt='スキルレベルを示す画像です'
          width={55}
          height={55}
        />
        <p className={[skillLevel, notoSansJpBold.className].join(' ')}>{props.level}</p>
      </div>
    </a>
  )
}

import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { card, logoImage, skillLevel, strokePercent, strokePercentWithPx, svg } from './styles/gauge.css'


const notoSansJpBold = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const Gauge = (props: { path: string; level: string; href: string }) => {
  const [displayWidth, setDisplayWidth] = useState(0)
  useEffect(() => {
    setDisplayWidth(window.innerWidth)
  }, [])
  const circleR = displayWidth > 0 ? (displayWidth > 768 ? 60 : (displayWidth - 35) * 0.15) : 0
  return (
    <a href={props.href} target='_blank'>
      <div className={card} style={assignInlineVars({
              [strokePercent]: props.level,
              [strokePercentWithPx]: props.level + 'px',
            })}>
        <svg className={svg}>
          <circle cx={circleR} cy={circleR} r={circleR}></circle>
          <circle
            cx={circleR}
            cy={circleR}
            r={circleR}
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

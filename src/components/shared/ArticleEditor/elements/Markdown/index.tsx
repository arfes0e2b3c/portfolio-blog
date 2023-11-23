import { Noto_Sans_JP, Zen_Kaku_Gothic_Antique } from 'next/font/google'
import { useEffect, useState } from 'react'
import markdownToHtml from 'zenn-markdown-html'
import { htmlResult } from './styles/markdownResult.css'

const ZenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
  weight: '400',
  subsets: ['latin'],
})

export const MarkdownResult = (props: { markdownContent: string }) => {
  const [htmlContent, setHtmlContent] = useState('')
  useEffect(() => {
    const text = markdownToHtml(props.markdownContent, {
      embedOrigin: 'https://embed.zenn.studio',
    })
    setHtmlContent(text)
  }, [props.markdownContent])
  return (
    <div
      className={['znc', htmlResult, ZenKakuGothicAntique.className].join(' ')}
      dangerouslySetInnerHTML={{
        __html: htmlContent ? htmlContent : 'ここにプレビューが表示されます',
      }}
    ></div>
  )
}

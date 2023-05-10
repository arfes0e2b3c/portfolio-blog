import { Noto_Sans_JP } from 'next/font/google'
import { useEffect, useState } from 'react'
import markdownToHtml from 'zenn-markdown-html'
import { htmlResult } from './styles/markdownResult.css'

const notoSansJp = Noto_Sans_JP({
  weight: '300',
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
      className={['znc', htmlResult, notoSansJp.className].join(' ')}
      dangerouslySetInnerHTML={{
        __html: htmlContent ? htmlContent : 'ここにプレビューが表示されます',
      }}
    ></div>
  )
}

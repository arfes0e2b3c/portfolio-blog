import { useEffect, useState } from 'react'
import markdownToHtml from 'zenn-markdown-html'
import { createResult } from '../../styles/adminCreate.css'

export const Markdown = (props: { display }) => {
  const [x, setX] = useState('')
  useEffect(() => {
    const text = markdownToHtml(props.display, {
      embedOrigin: 'https://embed.zenn.studio',
    })
    setX(text)
  }, [props.display])
  return (
    <div
      className={['znc', createResult].join(' ')}
      dangerouslySetInnerHTML={{
        __html: x,
      }}
    ></div>
  )
}

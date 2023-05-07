import { useState } from 'react'
import markdownToHtml from 'zenn-markdown-html'
import { Markdown } from './elements/Markdown'
import { useDebounce } from './hooks/useDebounce'
import { createBody, createResult, createTextarea } from './styles/adminCreate.css'
import 'react-split-mde/css/index.css'
export const AdminCreate = () => {
  const [content, setContent] = useState('')
  const debouncedContent = useDebounce(content, 500)
  const changeTextarea = (text: string) => {
    setContent(text)
  }

  return (
    <section>
      <div>
        <h2>新規記事作成</h2>
      </div>
      <div>
        <input type='text' />
      </div>
      <div className={createBody}>
        {/* <Editor parser={parser} value={content} onChange={handleValueChange} /> */}
        <Markdown display={debouncedContent} />
        <textarea
          className={createTextarea}
          name=''
          id=''
          cols={30}
          rows={30}
          onChange={(e) => changeTextarea(e.target.value)}
        ></textarea>
      </div>
    </section>
  )
}

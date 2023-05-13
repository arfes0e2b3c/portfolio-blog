import { Noto_Sans_JP } from 'next/font/google'
import { useState } from 'react'
import { MarkdownResult } from './elements/Markdown'
import { useDebounce } from './hooks/useDebounce'
import {
  buttonContainer,
  editorContainer,
  editorHeader,
  editorTextarea,
  publishButton,
  saveDraftButton,
  titleInput,
} from './styles/articleEditor.css'

const notoSansJp = Noto_Sans_JP({
  weight: '300',
  subsets: ['latin'],
})

export const ArticleEditor = (props: {
  funcDraft: (title: string, content: string, id?: string) => Promise<void>
  funcArticle: (title: string, content: string, id?: string) => Promise<void>
  id?: string
  title?: string
  content?: string
}) => {
  const [title, setTitle] = useState(props.title ?? '')
  const [content, setContent] = useState(props.content ?? '')
  const debouncedContent = useDebounce(content, 500)
  return (
    <>
      <div className={editorHeader}>
        <input
          className={[titleInput, notoSansJp.className].join(' ')}
          name='title'
          type='text'
          value={props.title}
          placeholder='タイトル'
          spellCheck='false'
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={buttonContainer}>
          <button
            className={saveDraftButton}
            onClick={() => props.funcDraft(title, content, props.id)}
          >
            下書き保存
          </button>
          <button
            className={publishButton}
            onClick={() => props.funcArticle(title, content, props.id)}
          >
            公開
          </button>
        </div>
      </div>
      <div className={editorContainer}>
        <MarkdownResult markdownContent={debouncedContent} />
        <textarea
          className={editorTextarea}
          id=''
          cols={30}
          rows={30}
          defaultValue={props.content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='ここに本文を書いてください'
          spellCheck='false'
        ></textarea>
      </div>
    </>
  )
}

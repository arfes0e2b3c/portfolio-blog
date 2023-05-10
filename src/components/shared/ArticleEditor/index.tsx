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
  postDraft: (title: string, content: string) => void
  postArticle: (title: string, content: string) => void
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const debouncedContent = useDebounce(content, 500)
  return (
    <>
      <div className={editorHeader}>
        <input
          className={[titleInput, notoSansJp.className].join(' ')}
          name='title'
          type='text'
          placeholder='タイトル'
          spellCheck='false'
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={buttonContainer}>
          <button className={saveDraftButton} onClick={() => props.postDraft(title, content)}>
            下書き保存
          </button>
          <button className={publishButton} onClick={() => props.postArticle(title, content)}>
            公開
          </button>
        </div>
      </div>
      <div className={editorContainer}>
        <MarkdownResult markdownContent={debouncedContent} />
        <textarea
          className={[editorTextarea].join(' ')}
          name='content'
          id=''
          cols={30}
          rows={30}
          onChange={(e) => setContent(e.target.value)}
          placeholder='ここに本文を書いてください'
          spellCheck='false'
        ></textarea>
      </div>
    </>
  )
}

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
  funcDraft: (title: string, draftContent: string, id?: string) => Promise<void>
  funcArticle: (title: string, content: string, id?: string) => Promise<void>
  id?: string
  title?: string
  draftContent?: string
}) => {
  const [title, setTitle] = useState(props.title ?? '')
  const [draftContent, setDraftContent] = useState(props.draftContent ?? '')
  const debouncedContent = useDebounce(draftContent, 500)
  return (
    <>
      <div className={editorHeader}>
        <input
          className={[titleInput, notoSansJp.className].join(' ')}
          name='title'
          type='text'
          value={title}
          placeholder='タイトル'
          spellCheck='false'
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={buttonContainer}>
          <button
            className={saveDraftButton}
            onClick={() => props.funcDraft(title, draftContent, props.id)}
          >
            下書き保存
          </button>
          <button
            className={publishButton}
            onClick={() => props.funcArticle(title, draftContent, props.id)}
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
          defaultValue={props.draftContent}
          onChange={(e) => setDraftContent(e.target.value)}
          placeholder='ここに本文を書いてください'
          spellCheck='false'
        ></textarea>
      </div>
    </>
  )
}

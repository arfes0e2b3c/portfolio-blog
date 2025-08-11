import { UseFetchTalkAndEvents } from '@/hooks/talkAndEventsHooks'
import { formatTime2Ymd } from '@/utils/function'
import { useQuery } from 'react-query'
import {
  companyImage,
  companyImageContainer,
  companyName,
  historyItem,
  historyItemInner,
  job,
  link,
  period,
  talkAndEventBody,
  talkAndEventBodyInner,
  talkAndEventBodyWrapper,
} from './styles/talkAndEventBody.css'

export const TalkAndEventBody = () => {
  const { data, isLoading, isError } = useQuery(
    'talk-and-events',
    UseFetchTalkAndEvents,
    { refetchOnWindowFocus: false }
  )

  if (isLoading) return null
  if (isError) return null

  const items = (data?.contents ?? [])
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section className={talkAndEventBodyWrapper}>
      <div className={talkAndEventBody}>
        <ul className={talkAndEventBodyInner}>
          {items.map((item) => {
            return (
              <li className={historyItem} key={item.id}>
                <div className={[historyItemInner].join(' ')}>
                  <div>
                    <a
                      className={link}
                      href={item.src || '#'}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <p className={period}>{formatTime2Ymd(item.date)}</p>
                      <p className={companyName}>{item.title}</p>
                      <p className={job}>{item.subTitle}</p>
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

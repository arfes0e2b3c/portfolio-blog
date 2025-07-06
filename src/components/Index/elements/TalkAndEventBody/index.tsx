import Image from 'next/image'
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

const histories = [
  {
    id: 2,
    company: 'フロントエンドカンファレンス北海道2024',
    job: 'スポンサーLT',
    period: '2024/08/27',
    src: 'https://x.com/0e2b3c/status/1827180443227320707',
  },
  {
    id: 1,
    company: 'CTO研修 ISUCON研修おかわり会',
    job: '主催',
    period: '2025/06/26',
  },
]
const reversedHistories = histories.reverse()

export const TalkAndEventBody = () => {
  return (
    <section className={talkAndEventBodyWrapper}>
      <div className={talkAndEventBody}>
        <ul className={talkAndEventBodyInner}>
          {reversedHistories.map((history) => {
            return (
              <li className={historyItem} key={history.id}>
                <div className={[historyItemInner].join(' ')}>
                  <div>
                    <a
                      className={link}
                      href={history.src || ''}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <p className={period}>{history.period}</p>
                      <p className={companyName}>{history.company}</p>
                      <p className={job}>{history.job}</p>
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

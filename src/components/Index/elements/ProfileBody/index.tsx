import Image from 'next/image'
import {
  companyImage,
  companyImageContainer,
  companyName,
  historyItem,
  historyItemInner,
  job,
  period,
  profileBody,
  profileBodyInner,
  profileBodyWrapper,
} from './styles/profileBody.css'

const histories = [
  {
    company: 'Yokohama National University',
    job: 'Faculty of Business Administration',
    period: '2021/04/01~',
  },
  {
    company: 'Lumos Programming Circle',
    job: 'Member',
    period: '2021/11/21~',
    src: '/company_logos/lumos.png',
  },
  {
    company: 'Prince Hotels&Resorts',
    job: 'Waiter',
    period: '2022/02/01~2022/06/30',
  },
  {
    company: 'aidiot inc.',
    job: 'Frontend/Backend Engineer Intern',
    period: '2022/07/01~2023/05/15',
    src: '/company_logos/aidiot.png',
  },
  {
    company: 'YUMEMI Inc.',
    job: 'Frontend Engineer Intern',
    period: '2023/06/12~2023/06/16',
    src: '/company_logos/yumemi.svg',
  },
  {
    company: 'Cookpad Inc.',
    job: 'Tech Workshop Course',
    period: '2023/07/01~2023/07/09',
    src: '/company_logos/cookpad.png',
  },
  {
    company: 'CARTA HOLDINGS',
    job: 'Treasure',
    period: '2023/08/07~2023/08/25',
    src: '/company_logos/carta.png',
  },
  {
    company: 'Cybozu, Inc.',
    job: 'Frontend Rearchitect Course',
    period: '2023/08/28~2023/09/01',
    src: '/company_logos/cybozu.png',
  },
  {
    company: 'Cookpad Inc.',
    job: 'Tech OJT Course',
    period: '2023/10/16~2023/11/10',
    src: '/company_logos/cookpad.png',
  },
  {
    company: 'LayerX Inc.',
    job: 'Software Engineer Intern',
    period: '2023/12/1~2023/12/31',
    src: '/company_logos/layerx.svg',
  },
]

export const ProfileBody = () => {
  return (
    <section className={profileBodyWrapper}>
      <div className={profileBody}>
        <ul className={profileBodyInner}>
          {histories.map((history, index) => {
            return (
              <li className={historyItem} key={index}>
                <div className={[historyItemInner].join(' ')}>
                  <div className={companyImageContainer}>
                    <Image
                      className={companyImage}
                      src={history.src || '/images/no_image.png'}
                      alt={history.company}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <p className={companyName}>{history.company}</p>
                    <p className={job}>{history.job}</p>
                    <p className={period}>{history.period}</p>
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

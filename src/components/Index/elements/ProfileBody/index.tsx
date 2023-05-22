import Image from 'next/image'
import Link from 'next/link'
import {
  companyImage,
  companyImageContainer,
  companyLink,
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
    company: 'Yokohama National Univercity',
    href: 'https://www.ynu.ac.jp/',
    job: 'Faculty of Business Administration',
    period: '2021/04/01~',
    src: '/icons_common/university.svg',
  },
  {
    company: 'Lumos Programming Circle',
    href: 'https://twitter.com/lumos_program',
    job: 'Member',
    period: '2021/11/21~',
    src: '/icons_common/pc.svg',
  },
  {
    company: 'Prince Hotels&Resorts',
    href: 'https://www.princehotels.co.jp/',
    job: 'Waiter',
    period: '2022/02/01~2022/06/30',
    src: '/icons_common/waiter.svg',
  },
  {
    company: 'aidiot inc.',
    href: 'https://aidiot.jp/',
    job: 'Frontend/Backend Engineer',
    period: '2022/07/01~2023/05/15',
    src: '/icons_common/pc.svg',
  },
  // {
  //   company: 'YUMEMI Inc.',
  //   job: 'engineer',
  //   period: '2023/06/12~2023/06/16',
  // },
  // {
  //   company: 'CARTA Holdings',
  //   job: 'engineer',
  //   period: '2023/08/07~2023/08/25',
  // },
  // {
  //   company: 'Nikkei inc.',
  //   job: 'engineer',
  //   period: '2023/09/18~2023/09/22',
  // },
]

export const ProfileBody = () => {
  return (
    <section className={profileBodyWrapper}>
      <div className={profileBody}>
        <ul className={profileBodyInner}>
          {histories.map((history, index) => {
            return (
              <li className={historyItem} key={index}>
                <Link className={[companyLink, historyItemInner].join(' ')} href={history.href}>
                  <div className={companyImageContainer}>
                    <Image
                      className={companyImage}
                      src={history.src}
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
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

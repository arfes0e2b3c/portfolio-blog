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
  },
  {
    company: 'Lumos Programming Circle',
    href: 'https://twitter.com/lumos_program',
    job: 'Member',
    period: '2021/11/21~',
    src: '/company_logos/lumos.png',
  },
  {
    company: 'Prince Hotels&Resorts',
    href: 'https://www.princehotels.co.jp/',
    job: 'Waiter',
    period: '2022/02/01~2022/06/30',
  },
  {
    company: 'aidiot inc.',
    href: 'https://aidiot.jp/',
    job: 'Frontend/Backend Engineer',
    period: '2022/07/01~2023/05/15',
    src: '/company_logos/aidiot.png',
  },
  {
    company: 'YUMEMI Inc.',
    href: 'https://www.yumemi.co.jp/',
    job: 'Frontend Engineer',
    period: '2023/06/12~2023/06/16',
    src: '/company_logos/yumemi.svg',
  },
  {
    company: 'Cookpad Inc.',
    href: 'https://info.cookpad.com/',
    job: 'Tech Workshop Course',
    period: '2023/07/01~2023/07/09',
    src: '/company_logos/cookpad.png',
  },
  // {
  //   company: 'Cookpad Inc.',
  //   job: 'Tech Workshop Course',
  //   period: '2023/07/01~2023/07/09',
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
  //   company: 'Nikkei inc.',
  //   job: 'engineer',
  //   period: '2023/09/18~2023/09/22',
  // },
  //   company: 'Cookpad Inc.',
  //   job: 'Tech Workshop Course',
  //   period: '2023/07/01~2023/07/09',
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
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

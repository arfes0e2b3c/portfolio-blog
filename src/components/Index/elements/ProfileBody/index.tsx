import Image from 'next/image'
import Link from 'next/link'
import {
  companyImage,
  companyLink,
  companyName,
  historyItem,
  job,
  period,
  profileBody,
  profileBodyInner,
} from './styles/profileBody.css'

const histories = [
  {
    company: 'Yokohama National Univercity',
    href: 'https://www.ynu.ac.jp/',
    job: 'Faculty of Business Administration',
    period: '2021/04/01~',
    src: '/logos/ynu.jpg',
  },
  {
    company: 'Lumos Programming Circle',
    href: 'https://twitter.com/lumos_program',
    job: 'Member',
    period: '2021/11/21~',
    src: '/logos/Lumos.jpeg',
  },
  {
    company: 'Prince Hotels&Resorts',
    href: 'https://www.princehotels.co.jp/',
    job: 'Waiter',
    period: '2022/02/01~2022/06/30',
    src: '/logos/prince.jpeg',
  },
  {
    company: 'aidiot inc.',
    href: 'https://aidiot.jp/',
    job: 'Frontend/Backend Engineer',
    period: '2022/07/01~2023/05/15',
    src: '/logos/aidiot.webp',
  },
  {
    company: 'Yokohama National Univercity',
    href: 'https://www.ynu.ac.jp/',
    job: 'Faculty of Business Administration',
    period: '2021/04/01~',
    src: '/logos/ynu.jpg',
  },
  {
    company: 'Lumos Programming Circle',
    href: 'https://twitter.com/lumos_program',
    job: 'Member',
    period: '2021/11/21~',
    src: '/logos/Lumos.jpeg',
  },
  {
    company: 'Prince Hotels&Resorts',
    href: 'https://www.princehotels.co.jp/',
    job: 'Waiter',
    period: '2022/02/01~2022/06/30',
    src: '/logos/prince.jpeg',
  },
  {
    company: 'aidiot inc.',
    href: 'https://aidiot.jp/',
    job: 'Frontend/Backend Engineer',
    period: '2022/07/01~2023/05/15',
    src: '/logos/aidiot.webp',
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
    <section className={profileBody}>
      <ul className={profileBodyInner}>
        {histories.map((history, index) => {
          return (
            <li className={historyItem} key={index}>
              <Image
                className={companyImage}
                src={history.src}
                alt={history.company}
                width={80}
                height={80}
              />
              <div>
                <p className={companyName}>
                  <Link className={companyLink} href={history.href}>
                    {history.company}
                  </Link>
                </p>
                <p className={job}>{history.job}</p>
                <p className={period}>{history.period}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

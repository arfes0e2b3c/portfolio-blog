import Image from 'next/image'
import {
  currentJob,
  fullname,
  iconContainer,
  profileHead,
  profileHeadBody,
  profileHeadInner,
  profileHeadTitle,
  snsIcon,
} from './styles/profileHead.css'

const icons = [
  {
    href: 'https://github.com/arfes0e2b3c',
    src: '/icons_sns/github.svg',
    alt: 'githubのアイコン画像',
  },
  {
    href: 'https://twitter.com/0e2b3c',
    src: '/icons_sns/x.svg',
    alt: 'twitterのアイコン画像',
  },
  {
    href: 'https://zenn.dev/arfes',
    src: '/icons_sns/zenn.svg',
    alt: 'zennのアイコン画像',
  },
  {
    href: 'https://www.wantedly.com/id/yatayuki',
    src: '/icons_sns/wantedly.svg',
    alt: 'wantedlyのアイコン画像',
  },
]

export const ProfileHead = () => {
  return (
    <section className={profileHead}>
      <div className={profileHeadInner}>
        <h2 className={profileHeadTitle}>PROFILE</h2>
        <div className={profileHeadBody}>
          <Image src='/images/yata_icon.jpg' alt='やたのアイコン画像' width={200} height={200} />
          <div>
            <h3 className={fullname}>Yuki Yata</h3>
            <p className={currentJob}>Student/Software Engineer</p>
            <div className={iconContainer}>
              {icons.map((icon, index) => {
                return (
                  <a target='_blank' className={snsIcon} href={icon.href} key={index}>
                    <Image src={icon.src} alt={icon.alt} width={25} height={25} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

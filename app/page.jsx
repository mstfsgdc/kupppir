import { SocialButton } from './components'
import styles from './page.module.scss'

export default function Home() { // https://link.space/?refl=sl-left
  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <SocialButton name="Twitch" description="Canlı yayınlarıma buradan ulaşabilirsin" url="https://www.twitch.tv/kupppir" />
        <SocialButton name="YouTube" description="Kliplerden oluşan Shorts videolarıma buradan ulaşabilirsin" url="https://www.youtube.com/@kupppir" />
        <SocialButton name="TikTok" description="Yayındaki önemli anlardan oluşan videolarıma buradan ulaşabilirsin" url="https://www.tiktok.com/@kupppir" />
        <SocialButton name="Instagram" description="Çeşitli paylaşımlar için hesabımı takip edebilirsin" url="https://www.instagram.com/kupppir/" />
        <SocialButton name="Discord" description="Topluluğumuza katılabilirsin" url="https://discord.gg/vsTT3ssdks" />
      </div>
    </div>
  )
}

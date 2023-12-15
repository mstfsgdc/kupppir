import { SocialButton, TwitchStats } from './components'
import styles from './page.module.scss'

export default function Home() { // https://link.space/?refl=sl-left
  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <TwitchStats />
        <SocialButton className="twitch" name="Twitch" description="Canlı yayınlarıma buradan ulaşabilirsin" url="https://www.twitch.tv/kupppir" />
        <SocialButton className="youtube" name="YouTube" description="Kliplerden oluşan Shorts videolarıma buradan ulaşabilirsin" url="https://www.youtube.com/@kupppir" />
        <SocialButton name="TikTok" description="Yayındaki önemli anlardan oluşan videolarıma buradan ulaşabilirsin" url="https://www.tiktok.com/@kupppir" />
        <SocialButton className="instagram" name="Instagram" description="Çeşitli paylaşımlar için hesabımı takip edebilirsin" url="https://www.instagram.com/kupppir/" />
        <SocialButton className="discord" name="Discord" description="Topluluğumuza katılabilirsin" url="https://discord.gg/vsTT3ssdks" />
      </div>
    </div>
  )
}

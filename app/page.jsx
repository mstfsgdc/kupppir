import {
  faDiscord,
  faInstagram,
  faTiktok,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SocialButton } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  // https://link.space/?refl=sl-left
  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <SocialButton
          className="twitch"
          name="Twitch"
          description="Canlı yayınlarıma buradan ulaşabilirsin"
          url="https://www.twitch.tv/kupppir"
          icon={faTwitch}
        />
        <SocialButton
          className="youtube"
          name="YouTube"
          description="Kliplerden oluşan Shorts videolarıma buradan ulaşabilirsin"
          url="https://www.youtube.com/@kupppir"
          icon={faYoutube}
        />
        <SocialButton
          name="TikTok"
          description="Yayındaki önemli anlardan oluşan videolarıma buradan ulaşabilirsin"
          url="https://www.tiktok.com/@kupppir"
          icon={faTiktok}
        />
        <SocialButton
          className="instagram"
          name="Instagram"
          description="Çeşitli paylaşımlar için hesabımı takip edebilirsin"
          url="https://www.instagram.com/kupppir/"
          icon={faInstagram}
        />
        <SocialButton
          className="discord"
          name="Discord"
          description="Topluluğumuza katılabilirsin"
          url="https://discord.gg/vsTT3ssdks"
          icon={faDiscord}
        />
      </div>
    </div>
  );
}

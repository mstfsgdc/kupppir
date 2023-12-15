import { SocialButton } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <div className={styles.twitchStats}>
          <div className={styles.titles}>
            <h3>Twitch İstatistikleri</h3>
            <h4>(Son 1 Ay)</h4>
          </div>
          <div className={styles.stats}>
            <span className={styles.statsText}>Takipçi: 100</span>
            <span className={styles.statsText}>Toplam İzlenme (saat): 100</span>
            <span className={styles.statsText}>Ortalama İzleyici: 100</span>
            <span className={styles.statsText}>Yayın Süresi (dakika): 100</span>
          </div>
        </div>
        <SocialButton
          className="twitch"
          name="Twitch"
          description="Canlı yayınlarıma buradan ulaşabilirsin"
          url="https://www.twitch.tv/kupppir"
        />
        <SocialButton
          className="youtube"
          name="YouTube"
          description="Kliplerden oluşan Shorts videolarıma buradan ulaşabilirsin"
          url="https://www.youtube.com/@kupppir"
        />
        <SocialButton
          name="TikTok"
          description="Yayındaki önemli anlardan oluşan videolarıma buradan ulaşabilirsin"
          url="https://www.tiktok.com/@kupppir"
        />
        <SocialButton
          className="instagram"
          name="Instagram"
          description="Çeşitli paylaşımlar için hesabımı takip edebilirsin"
          url="https://www.instagram.com/kupppir/"
        />
        <SocialButton
          className="discord"
          name="Discord"
          description="Topluluğumuza katılabilirsin"
          url="https://discord.gg/vsTT3ssdks"
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./Header.module.scss";
import { Logo } from "@/app/assets/images";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={styles.avatar}>
        <Image src={Logo} alt="logo" width={125} height={125} priority />
      </div>
      <div className={styles.username}>
        <h2><Link href={'https://twitch.tv/kupppir'} target="_blank">@kupppir</Link></h2>
      </div>
    </header>
  );
}

import Image from "next/image";
import styles from "./Header.module.scss";
import { Logo } from "@/app/assets/images";

export default function Header() {
  return (
    <header>
      <div className={styles.avatar}>
        <Image src={Logo} alt="logo" width={125} height={125} priority />
      </div>
      <div className={styles.username}>
        <h2>@kupppir</h2>
      </div>
    </header>
  );
}

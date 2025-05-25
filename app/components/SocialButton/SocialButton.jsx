import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialButton.module.scss";

export default function SocialButton(props) {
  return (
    <a
      className={
        props.className
          ? `${styles.main} ${styles[props.className]}`
          : styles.main
      }
      href={props.url || "/"}
      target="_blank"
      rel="norefferer noopener"
    >
      <div className={styles.row}>
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
        <h3>{props.name}</h3>
      </div>
      <span>{props.description}</span>
    </a>
  );
}

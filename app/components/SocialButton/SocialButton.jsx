import styles from "./SocialButton.module.scss";

export default function SocialButton(props) {
  return (
    <a className={styles.main} href={props.url || "/"} target="_blank" rel="norefferer noopener">
      <h3>{props.name}</h3>
      <span>{props.description}</span>
    </a>
  );
}

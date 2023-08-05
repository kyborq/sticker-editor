import { Icon } from "../Icon";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <Icon name="sticker" />
      <h3 className={styles.Title}>Editor</h3>
    </div>
  );
};

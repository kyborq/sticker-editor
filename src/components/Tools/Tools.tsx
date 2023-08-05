import { Icon } from "../Icon";
import styles from "./Tools.module.css";

export const Tools = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Tools}>
        <Icon name="addImage" className={styles.Tool} />
        <Icon name="addText" className={styles.Tool} />
      </div>
    </div>
  );
};

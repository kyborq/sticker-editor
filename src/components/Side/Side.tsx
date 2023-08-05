import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import styles from "./Side.module.css";

export const Side = () => {
  return (
    <div className={styles.Side}>
      <Logo />
      <div className={styles.Actions}>
        <Button icon="newFile" />
        <Button icon="saveFile" />
        <Button icon="openFile" />
      </div>
      <div className={styles.Items}>
        <h2 className={styles.Title}>Stickerpack</h2>
      </div>
      <div className={styles.Footer}>
        <Button title="Export" />
      </div>
    </div>
  );
};

import { useState } from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Stickers } from "../Stickers/Stickers";
import styles from "./Side.module.css";

export const Side = () => {
  const [stickers, setStickers] = useState<string[]>([]);

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
        <Stickers
          list={stickers}
          onNewSticker={() => setStickers([...stickers, "x"])}
        />
      </div>
      <div className={styles.Footer}>
        <Button title="Export" primary />
      </div>
    </div>
  );
};

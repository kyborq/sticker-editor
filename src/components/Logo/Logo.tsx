import { Icon } from "../Icon";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Icon name="logo" />
      <div className={styles.Info}>
        <h1 className={styles.Name}>iStickers</h1>
        <span className={styles.Version}>v0.0.1</span>
      </div>
      <a href="https://github.com/kyborq/sticker-editor" target="_blank">
        <Icon name="github" />
      </a>
    </div>
  );
};

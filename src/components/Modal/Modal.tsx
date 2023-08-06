import { Icon } from "../Icon";
import styles from "./Modal.module.css";

type Props = {
  title: string;
  width?: number;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ title, width, children }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal} style={{ width }}>
        <div className={styles.Header}>
          <h4 className={styles.Title}>{title}</h4>
          <Icon name="trash" />
        </div>
        {children}
      </div>
    </div>
  );
};

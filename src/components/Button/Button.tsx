import { TIcon } from "../../icons/icons";
import { Icon } from "../Icon";

import styles from "./Button.module.css";

type Props = {
  icon?: TIcon;
  title?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ icon, title, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {!!icon && <Icon name={icon} />}
      {!!title && <span className={styles.Title}>{title}</span>}
    </button>
  );
};

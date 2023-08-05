import { TIcon } from "../../icons/icons";
import { classNames } from "../../utils/classNames";
import { Icon } from "../Icon";

import styles from "./Button.module.css";

type Props = {
  icon?: TIcon;
  title?: string;
  primary?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ icon, title, primary, onClick }) => {
  const buttonClassName = classNames(styles.Button, primary && styles.Primary);
  return (
    <button className={buttonClassName} onClick={onClick}>
      {!!icon && <Icon name={icon} />}
      {!!title && <span className={styles.Title}>{title}</span>}
    </button>
  );
};

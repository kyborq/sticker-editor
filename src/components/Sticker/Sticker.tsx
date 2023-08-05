import { classNames } from "../../utils/classNames";
import { Icon } from "../Icon";
import styles from "./Sticker.module.css";

type Props = {
  empty?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

export const Sticker: React.FC<Props> = ({ selected, empty, onClick }) => {
  const selectedClassName = classNames(
    styles.Sticker,
    selected && styles.Selected,
    empty && styles.Empty
  );

  return (
    <div className={selectedClassName} onClick={onClick}>
      {empty && <Icon name="add" className={styles.Icon} />}
    </div>
  );
};

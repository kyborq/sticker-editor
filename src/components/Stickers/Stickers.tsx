import { Sticker } from "../Sticker/Sticker";
import styles from "./Stickers.module.css";

type Props = {
  list: string[];
  onNewSticker?: () => void;
};

export const Stickers: React.FC<Props> = ({ list, onNewSticker }) => {
  const items = list.map((item, index) => {
    return <Sticker key={`${item}-${index}`} selected={index === 0} />;
  });

  return (
    <div className={styles.Gallery}>
      {items}
      <Sticker empty onClick={onNewSticker} />
    </div>
  );
};

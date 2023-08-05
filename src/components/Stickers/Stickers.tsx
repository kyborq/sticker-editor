import styles from "./Stickers.module.css";

type Props = {
  list: string[];
};

export const Stickers: React.FC<Props> = ({}) => {
  return <div className={styles.Gallery}></div>;
};

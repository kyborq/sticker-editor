import { classNames } from "../../utils/classNames";
import styles from "./Tabs.module.css";

type Props = {
  selectedTab: number;
  tabLabels: string[];
};

export const Tabs: React.FC<Props> = ({ selectedTab, tabLabels }) => {
  return (
    <div className={styles.Tabs}>
      {tabLabels.map((tab, tabIndex) => {
        const isSelected = selectedTab === tabIndex;
        return (
          <div
            key={tab}
            className={classNames(styles.Tab, isSelected && styles.Selected)}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

import { useState } from "react";

export const useTabs = (tabs: string[]) => {
  const [currentTab, setTab] = useState(0);
  const tabsLength = tabs.length;

  const nextTab = () => {
    if (tabsLength < tabsLength) {
      setTab((prevTab) => prevTab + 1);
    }
  };

  const previousTab = () => {
    if (tabsLength > 0) {
      setTab((prevTab) => prevTab - 1);
    }
  };

  const selectTab = (number: number) => {
    setTab(number);
  };

  return { currentTab, nextTab, previousTab, selectTab };
};

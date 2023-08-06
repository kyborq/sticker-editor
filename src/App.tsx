import { Side } from "./components/Side/Side";
import { Header } from "./components/Header/Header";

import styles from "./App.module.css";
import { Editor } from "./components/Editor/Editor";
import { Tools } from "./components/Tools/Tools";
import { Modal } from "./components/Modal/Modal";
import { Tabs } from "./components/Tabs/Tabs";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className={styles.App}>
      <Side />
      <div className={styles.Content}>
        <Header />
        <Editor />
        <Tools />
      </div>
      <Modal width={300} title="Новый стикер">
        <Tabs tabLabels={["Загрузить"]} selectedTab={0} />

        <Button primary title="Загрузить" />
      </Modal>
    </div>
  );
}

export default App;

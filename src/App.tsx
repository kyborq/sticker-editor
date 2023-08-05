import { Side } from "./components/Side/Side";
import { Header } from "./components/Header/Header";

import styles from "./App.module.css";
import { Editor } from "./components/Editor/Editor";
import { Tools } from "./components/Tools/Tools";

function App() {
  return (
    <div className={styles.App}>
      <Side />
      <div className={styles.Content}>
        <Header />
        <Editor />
        <Tools />
      </div>
    </div>
  );
}

export default App;

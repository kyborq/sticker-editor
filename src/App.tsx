import { Side } from "./components/Side/Side";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Side />
      <div className={styles.Content}></div>
    </div>
  );
}

export default App;

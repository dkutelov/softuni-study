import Posts from "../post-list";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Some Heading</h1>
      <Posts />
    </main>
  );
};

export default Main;

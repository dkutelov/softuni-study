import styles from "./MenuItem.module.css";

const MenuItem = ({ children }) => {
  return (
    <li className={styles.listItem}>
      <a href="#">{children}</a>
    </li>
  );
};

export default MenuItem;

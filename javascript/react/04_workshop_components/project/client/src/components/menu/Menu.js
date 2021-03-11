import MenuItem from "../menu-item/MenuItem";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <aside className={styles.aside}>
      {Array.from({ length: 11 }, (x, i) => i + 1).map((index) => (
        <MenuItem key={index}>Going to {index}</MenuItem>
      ))}
    </aside>
  );
};

export default Menu;

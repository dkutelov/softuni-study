import styles from "./NavItem.module.css";

const NavItem = ({ children }) => {
  return (
    <li className={styles.listItem}>
      <a href="#">{children}</a>
    </li>
  );
};

export default NavItem;

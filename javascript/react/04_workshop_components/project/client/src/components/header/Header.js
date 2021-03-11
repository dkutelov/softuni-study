import React from "react";

import styles from "./Header.module.css";
import NavItem from "../nav-item";

export default function Header() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.listItem}>
          <img src="/white-origami-bird.png" alt="white origami" />
        </li>
        {Array.from({ length: 11 }, (x, i) => i + 1).map((index) => (
          <NavItem key={index}>Going to {index}</NavItem>
        ))}
      </ul>
    </nav>
  );
}

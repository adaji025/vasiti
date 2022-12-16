import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/svgs/Vasiti-Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`${styles.header__content} ${menuOpen ? styles.isMenu : ""}`}>
          <div className={styles.header__content__logo}>
            <Logo />
          </div>

          <nav className={`${styles.header__content__nav} ${menuOpen ? styles.isMenu : ""}`}>
            <ul>
              <li>
                <a href="/">ABOUT US</a>
              </li>
              <li>
                <a href="/">STORIES</a>
              </li>
              <li>
                <a href="/">CONTACT</a>
              </li>
              <li>
                <a href="/">LOG IN</a>
              </li>
            </ul>
            <button>SIGN UP</button>
          </nav>
          <div
            className={styles.header__content__toggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <AiOutlineClose size={25}  />
            ) : (
              <BiMenuAltRight size={25}  />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

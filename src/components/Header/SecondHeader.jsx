import React from "react";
import styles from "./SecondHeader.module.scss";

const SecondHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span>MARKETPLACE</span>
        <span>WHOLESALE CENTER</span>
        <span>SELLER CENTER</span>
        <span>SERVICES</span>
        <span>INTERNSHIPS</span>
        <span>EVENTS</span>
      </div>
    </div>
  );
};

export default SecondHeader;

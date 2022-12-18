import React from "react";
import styles from "./Experience.module.scss";
import ExpImg from "../../../assets/images/woman-shoppingbag-card.png";

import line from "../../../assets/svgs/line2.svg";

const ExperienceTwo = () => {
  return (
    <div className={styles.experienceTwo}>
      <div className={styles.experienceTwo__wrapper}>
        <div className={styles.experienceTwo__wrapper__left}>
          <div className={styles.experienceTwo__wrapper__left__image}>
            <img src={ExpImg} alt="ladies" />
          </div>
        </div>
        <div className={styles.experienceTwo__wrapper__right}>
          <div className={styles.experienceTwo__wrapper__right__title}>
            <h3> Tolu & Joy’s Experience</h3>
            <button>Customer</button>
          </div>
          <p>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <div className={styles.experienceTwo__wrapper__right__footer}>
            <p>Share your own story!</p>
            <img src={line} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTwo;

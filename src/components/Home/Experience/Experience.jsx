import React from "react";
import ExpImg from "../../../assets/images/exp-image.png";
import line from "../../../assets/svgs/line.svg";

import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experience__wrapper}>
        <div className={styles.experience__wrapper__left}>
          <img src={ExpImg} alt="ladies" />
        </div>
        <div className={styles.experience__wrapper__right}>
          <div className={styles.experience__wrapper__right__title}>
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
          <div className={styles.experience__wrapper__right__footer}>
            <p>Share your own story!</p>
            <img src={line} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

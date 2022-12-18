import React from "react";
import styles from "./Banner.module.scss";

import bannerImg from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__wrapper__left}>
          <h2>
            <span>Amazing</span> Experiences from Our Wonderful Customers
          </h2>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className={styles.banner__wrapper__right}>
          <img src={bannerImg} alt="lady and a guy" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Grid } from "@mantine/core";
import subscribeImage from '../../assets/images/subscribe-banner.png'

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Grid>
          <Grid.Col md="6">
            <img src={subscribeImage} alt="" />
          </Grid.Col>
          <Grid.Col md="6"></Grid.Col>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;

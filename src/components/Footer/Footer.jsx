import React from "react";
import subscribeImage from "../../assets/images/subscribe-banner.png";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__wrapper__content}>
          <div className={styles.footer__wrapper__content__first}>
            <div className={styles.footer__wrapper__content__first__left}>
              <img src={subscribeImage} alt="" />
            </div>
            <div className={styles.footer__wrapper__content__first__right}>
              <div>
                <h2>
                  <span>Be a member</span> <span>of our community 🎉</span>
                </h2>
                <p>
                  We’d make sure you’re always first to know what’s happening on
                  Vasiti—thus, the world.
                </p>
                <div>
                  <input type="text" placeholder="enter your email address" />
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer__wrapper__content__second}>
            <div className={styles.footer__wrapper__content__second__grid}>
              <div>
               <div>
               <h2>Company</h2>
                <div>
                  <span>About us</span>
                  <span>Term of Use</span>
                  <span>Privacy Policy</span>
                  <span>Press & Media</span>
                </div>
               </div>
              </div>
              <div>
                <div>
                  <h2>Products</h2>
                  <div>
                    <span>Marketplace</span>
                    <span>Magazine</span>
                    <span>Seller</span>
                    <span>Wholesale</span>
                    <span>Services</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2>Careers</h2>
                  <div>
                    <span>Become a Campus Rep</span>
                    <span>Become a Vasiti Influencer</span>
                    <span>Become a Campus writer</span>
                    <span>Become an Affiliate</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2>Get in touch</h2>
                  <div>
                    <span>Contact us</span>
                    <span>Contact us</span>
                    <span>Advertise with us</span>
                    <span>Help/FAQs</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h2>Join our community</h2>
                  <div>
                    <span><FaFacebookF /></span>
                    <span><FaInstagram /></span>
                    <span><FaTwitter /></span>
                    <span><GrLinkedinOption /></span>
                  </div>
                  <p>Email Newsletter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

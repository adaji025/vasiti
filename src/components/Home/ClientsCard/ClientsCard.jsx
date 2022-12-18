import React from "react";
import styles from "./ClientsCard.module.scss";

import client1 from "../../../assets/images/client1.png";

const ClientsCard = () => {
  return (
    <div className={styles.clientsCard}>
      <img src={client1} alt="" />
      <div className={styles.clientsCard__content}>
        <div className={styles.clientsCard__content__intro}>
          <h4>Joseph Ike</h4>
          <div>
            <span>In Ikeja</span>
            <button>CUSTOMER</button>
          </div>
        </div>
        <p>
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis
          id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
          cillum minim tempor enim.
        </p>
      </div>
    </div>
  );
};

export default ClientsCard;

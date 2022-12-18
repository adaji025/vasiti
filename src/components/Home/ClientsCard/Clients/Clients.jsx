import { Grid } from "@mantine/core";
import React from "react";
import { clientsData } from "../../../../data/data";
import ClientsCard from "../ClientsCard";

import styles from "./Clients.module.scss";

const Clients = () => {
  return (
    <div className={styles.clients}>
      <Grid style={{ overFlow: "hidden" }}>
        {clientsData.map((client, idx) => (
          <Grid.Col xs="6" lg="4">
            <ClientsCard key={idx} {...{client}} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default Clients;

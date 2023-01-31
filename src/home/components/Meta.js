import React from "react";
import { Helmet } from "react-helmet";

import HomeItem from "./HomeItem";

const Meta = (props) => {
  return (
    <Helmet>
      <title>Statie ITP Timisoara – Pret ITP Timisoara – Programari</title>
      <meta
        name="description"
        content="Ai nevoie de ITP in Timisoara, Sag, Jebel, 
                Ciacova, Deta, Vama Moravita, Padureni, 
                Liebling, Parta, Peciu Nou? Suna acum pentru programare!"
      />
    </Helmet>
  );
};

export default Meta;

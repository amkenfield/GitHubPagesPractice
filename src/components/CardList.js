import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((r) => (
    <Card key={r.id} id={r.id} name={r.name} email={r.email} />
  ));
  return <div>{cardsArray}</div>;
};

export default CardList;

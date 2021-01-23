import React, { useState } from "react";
import { CardItems } from "./Card";
import Button from "@material-ui/core/Button";

const style = {
  width: 300,
  height: 700,
  backgroundColor: "gray",
  margin: "20px",
};

export const Column = ({ title, itemsArr }) => {
  const [cardList, setCardList] = useState(itemsArr);

  let count = 10;
  const addToCardList = () => {
    setCardList([
      {
        id: `${title}${count++}`,
        name: `${title} ${count++}`,
        description: "description about something",
      },
      ...cardList,
    ]);
  };
  const deleteCard = (e) => {
    const cardItemId = e.currentTarget.value;
    const filteredCardList = cardList.filter((card) => card.id !== cardItemId);
    setCardList(filteredCardList);
  };
  return (
    <div style={style}>
      <Button
        size="large"
        style={{ backgroundColor: "white", width: 200, marginTop: "20px" }}
        onClick={addToCardList}
      >
        {" "}
        +{" "}
      </Button>
      <h2>{title}</h2>
      {cardList.map((cardData, idx) => (
        <CardItems
          key={title + idx}
          cardData={cardData}
          onDelete={deleteCard}
        />
      ))}
    </div>
  );
};

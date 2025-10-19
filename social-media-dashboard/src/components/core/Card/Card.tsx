import React from "react";

import classes from "./Card.module.scss";

interface ICardProps {
  children: React.ReactNode;
  type?: "facebook" | "twitter" | "instagram" | "youtube";
  isClickable?: boolean;
}

const Card: React.FC<ICardProps> = ({ children, type, isClickable = true }) => {
  const content = isClickable ? (
    <button type="button" className={`${classes.cardContainer} ${type ? classes[`border-${type}`] : ""}`}>
      {children}
    </button>
  ) : (
    <div className={`${classes.cardContainer} ${type ? classes[`border-${type}`] : ""}`}>{children}</div>
  );
  return <div className={classes.overflowContainer}>{content}</div>;
};

export default Card;

import React, { useState } from "react";

import classes from "./Flipper.module.scss";

interface IFlipperProps {
  front: React.ReactNode;
  back: React.ReactNode;
  direction: "horizontal" | "vertical";
}

const Flipper: React.FC<IFlipperProps> = ({ front, back, direction = "horizontal" }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <button type="button" className={classes.flipContainer} onClick={() => setFlipped((prev) => !prev)}>
      <div className={`${classes.flipWrapper} ${flipped ? classes.flipped : ""}`}>
        <div className={`${classes.flipCard} ${classes[direction]}`}>
          <div className={`${classes.flipFace} ${classes.front} ${classes[direction]}`}>{front}</div>

          <div className={`${classes.flipFace} ${classes.back} ${classes[direction]}`}>{back}</div>
        </div>
      </div>
    </button>
  );
};

export default Flipper;

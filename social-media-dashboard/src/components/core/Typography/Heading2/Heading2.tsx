import type React from "react";

import classes from "./Heading2.module.scss";

interface IHeading2Props {
  children: React.ReactNode;
  large?: boolean;
}

const Heading2: React.FC<IHeading2Props> = ({ children, large }) => {
  return <h2 className={`${classes.h2} ${large ? classes.large : ""}`}>{children}</h2>;
};

export default Heading2;

import type React from "react";

import classes from "./Heading1.module.scss";

interface IHeading1Props {
  children: React.ReactNode;
}

const Heading1: React.FC<IHeading1Props> = ({ children }) => {
  return <h1 className={classes.h1}>{children}</h1>;
};

export default Heading1;

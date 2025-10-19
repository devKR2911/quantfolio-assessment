import type React from "react";

import classes from "./Heading3.module.scss";

interface IHeading3Props {
  children: React.ReactNode;
}

const Heading3: React.FC<IHeading3Props> = ({ children }) => {
  return <h3 className={classes.h3}>{children}</h3>;
};

export default Heading3;

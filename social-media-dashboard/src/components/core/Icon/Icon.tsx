import type React from "react";

import classes from "./Icon.module.scss";

interface IIconProps {
  children: React.ReactNode;
}

const Icon: React.FC<IIconProps> = ({ children }) => {
  return <div className={classes.icon}>{children}</div>;
};

export default Icon;

import type React from "react";

import classes from "./ChangeIndicator.module.scss";

interface IChangeIndicatorProps {
  children: React.ReactNode;
  isIncrement: boolean;
}

const ChangeIndicator: React.FC<IChangeIndicatorProps> = ({ children, isIncrement }) => {
  return <p className={`${classes.info} ${isIncrement ? classes.success : classes.danger}`}>{children}</p>;
};

export default ChangeIndicator;

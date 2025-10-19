import type React from "react";

import classes from "./Grid.module.scss";

interface IGridProps {
  children: React.ReactNode;
}

const Grid: React.FC<IGridProps> = ({ children }) => {
  return <div className={classes.gridContainer}>{children}</div>;
};

export default Grid;

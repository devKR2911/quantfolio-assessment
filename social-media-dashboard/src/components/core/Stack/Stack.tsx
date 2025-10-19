import type React from "react";

import classes from "./Stack.module.scss";

interface IStackProps {
  children: React.ReactNode;
  gap?: "flush" | "small" | "medium" | "large";
}

const Stack: React.FC<IStackProps> = ({ children, gap = "large" }) => {
  return <div className={`${classes.stack} ${gap ? classes[`space-${gap}`] : ""}`}>{children}</div>;
};

export default Stack;

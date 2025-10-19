import type React from "react";

import classes from "./Paragraph.module.scss";

interface IParagraphProps {
  children: React.ReactNode;
  bold?: boolean;
  primary?: boolean;
  light?: boolean;
  small?: boolean;
  centered?: boolean;
}

const Paragraph: React.FC<IParagraphProps> = ({ children, bold, primary, light, small, centered }) => {
  return (
    <p
      className={`${classes.p} ${bold ? classes.b : ""} ${primary ? classes.primary : ""} ${light ? classes.light : ""} ${small ? classes.small : ""} ${centered ? classes.centered : ""}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;

import React from "react";

import ThemeSwitcher from "@core/ThemeSwitcher/ThemeSwitcher";
import Heading1 from "@core/Typography/Heading1/Heading1";
import Paragraph from "@core/Typography/Paragraph/Paragraph";
import Stack from "@core/Stack/Stack";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className={classes.header}>
        <Stack gap="small">
          <Heading1>Social Media Dashboard</Heading1>
          <Paragraph bold>Total Followers: 23,004</Paragraph>
        </Stack>
        <div className={classes.horizontalLine}>
          <hr />
        </div>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Header;

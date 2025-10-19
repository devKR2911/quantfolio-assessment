import React, { useEffect, useState, type ChangeEvent } from "react";

import Paragraph from "@core/Typography/Paragraph/Paragraph";

import classes from "./ThemeSwitcher.module.scss";

const suportedThemes = ["light", "dark"];

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("quantfolio-theme");
    return storedTheme && suportedThemes.includes(storedTheme) ? storedTheme : "light";
  });
  const onThemeSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const isDarkModeSelected = e.target.checked;
    localStorage.setItem("quantfolio-theme", isDarkModeSelected ? "dark" : "light");
    setTheme(isDarkModeSelected ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className={classes.toggleSwitchContainer}>
      <label htmlFor="themeToggler">
        <Paragraph bold>Dark Mode</Paragraph>
      </label>
      <label className={classes.switch}>
        <input id="themeToggler" type="checkbox" checked={theme === "dark"} onChange={(e) => onThemeSelected(e)} />
        <span className={`${classes.slider} ${classes.round}`}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

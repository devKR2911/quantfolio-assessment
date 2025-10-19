import classes from "./Layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={classes.layoutContainer}>
      <div className={classes.backgroundContainer}>
        <div className={classes.topSegment}></div>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Layout;

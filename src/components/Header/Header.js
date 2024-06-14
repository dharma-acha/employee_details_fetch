import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <header className={classes.header}>Employee Details</header>
    </div>
  );
};

export default Header;

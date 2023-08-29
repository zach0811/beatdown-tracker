import classes from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        {/* <img src="" alt="logo" /> */}
        <h1>Beatdown Calculator</h1>
      </header>
    </div>
  );
};

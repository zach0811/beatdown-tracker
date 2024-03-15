import classes from "./Total.module.css";

export const Totals = (props) => {
  return (
    <div className={classes.total}>
      <h1>Total Beatdowns</h1>
      <h2>Beatdowns: {props.totals} </h2>
      <h2>Total Beatdowns:</h2>
      <h2>Total Q's: </h2>
    </div>
  );
};

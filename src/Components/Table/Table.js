import classes from "./Table.module.css";

export const Table = (props) => {
  return (
    <div>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>AO Location</th>
            <th>Q: Y/N</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((beatdown, index) => (
            <tr key={index}>
              <td>{beatdown.day}</td>
              <td>{beatdown.date}</td>
              <td>{beatdown.location.label}</td>
              <td>{beatdown.ledWorkout.charAt(0).toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

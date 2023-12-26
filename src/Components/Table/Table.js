import classes from "./Table.module.css";

export const Table = (props) => {

  const handleDelete = (event) => {
    event.preventDefault();
    props.onDeleteBeatdown();
  };
  return (
    <div>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>AO Location</th>
            <th>Q: Y/N</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((beatdown, index) => (
            <tr key={index}>
              <td>{beatdown?.day}</td>
              <td>{beatdown?.date}</td>
              <td>{beatdown?.location?.label}</td>
              <td>{beatdown?.ledWorkout.charAt(0).toUpperCase()}</td>
              <td>
                <button onClick={handleDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

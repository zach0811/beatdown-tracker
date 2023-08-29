import classes from "./Table.module.css";

export const Table = (props) => {
  return (
    <div>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Date</th>
            <th>AO Location</th>
            <th>Q: Y/N</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              {/* <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearData.savingsEndOfYear -
                    props.initialInvestment -
                    yearData.yearlyContribution * yearData.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    yearData.yearlyContribution * yearData.year
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

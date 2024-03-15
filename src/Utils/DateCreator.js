export const DateCreator = (startDate, endDate, meetingDays) => {
  // Convert start_date and end_date strings to Date objects
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  // Initialize an empty array to store table rows
  let tableRows = [];

  // Iterate through the dates from startDate to endDate
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    // Check if the current date's weekday is in meetingDays
    if (meetingDays.includes(currentDate.getDay())) {
      // Add the day of the week and date to the tableRows array
      tableRows.push({
        dayOfWeek: currentDate.toLocaleDateString("en-US", { weekday: "long" }),
        date: currentDate.toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        }),
      });
    }
    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return tableRows;
};

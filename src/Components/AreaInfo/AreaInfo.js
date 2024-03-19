import React from "react";
import classes from "./AreaInfo.module.css";

const siteInfo = {
  site: "Rubicon",
  meetingDays: [2, 4],
  days: ["Tuesday", "Thursday"],
  time: "5:30 AM",
  location: "Wills Park",
  siteQ: "Avis",
  subregion: "Alpha Central",
  type: "Bootcamp",
  closestAED: "N/A",
  launchDate: "1/2/2023",
};

export const SiteInformationComponent = () => {
  return (
    <div className={classes.areaInfo}>
      <h2>{siteInfo.site}</h2>
      <p>
        <strong>Meeting Days:</strong> {siteInfo.days.join(", ")}
      </p>
      <p>
        <strong>Time:</strong> {siteInfo.time}
      </p>
      <p>
        <strong>Location:</strong> {siteInfo.location}
      </p>
      <p>
        <strong>Site Q:</strong> {siteInfo.siteQ}
      </p>
      <p>
        <strong>Subregion:</strong> {siteInfo.subregion}
      </p>
      <p>
        <strong>Type:</strong> {siteInfo.type}
      </p>
      <p>
        <strong>Closest AED:</strong> {siteInfo.closestAED}
      </p>
      <p>
        <strong>Launch Date:</strong> {siteInfo.launchDate}
      </p>
    </div>
  );
};

export default SiteInformationComponent;

import { Table } from "../Table/Table";
import { Header } from "../Header/Header";
import { Form } from "../Form/Form";
import { useState } from "react";
import { Totals } from "../Totals/Totals";

export const Page = () => {
  const [beatdowns, setBeatdowns] = useState([]);
  const [beatdownCount, setBeatdownCount] = useState();

  const handleAddBeatdownCount = () => {
    setBeatdownCount(beatdownCount);
  };

  const handleAddBeatdown = (beatdown) => {
    setBeatdowns((prevBeatdowns) => [...prevBeatdowns, beatdown]);
  };

  return (
    <>
      <Header />
      <Form onAddBeatdown={handleAddBeatdown} />
      {!beatdowns && <h1 style={{ textAlign: "center" }}>No data to show!</h1>}
      {beatdowns && <Table data={beatdowns} />}
      <Totals onAddBeatdownCount={beatdownCount} />
    </>
  );
};

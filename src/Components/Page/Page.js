import { Table } from "../Table/Table";
import { Header } from "../Header/Header";
import { Form } from "../Form/Form";
import { useState } from "react";
import { Totals } from "../Totals/Totals";

export const Page = () => {
  const [beatdowns, setBeatdowns] = useState([]);
  const [beatdownTotal, setBeatdownTotal] = useState();

  const handleAddBeatdownCount = (beatdownTotal) => {
    setBeatdownTotal(beatdownTotal);
    console.log("page count", beatdownTotal);
  };

  const handleAddBeatdown = (beatdown) => {
    setBeatdowns((prevBeatdowns) => [...prevBeatdowns, beatdown]);
  };

  const handleDeleteBeatdown = (index) => {
    const newBeatdowns = [...beatdowns];
    newBeatdowns.splice(index, 1);
    setBeatdowns(newBeatdowns);
  };

  return (
    <>
      <Header />
      <Form
        onAddBeatdown={handleAddBeatdown}
        onAddBeatdownCount={handleAddBeatdownCount}
      />
      {!beatdowns && <h1 style={{ textAlign: "center" }}>No data to show!</h1>}
      {beatdowns && (
        <Table data={beatdowns} onDeleteBeatdown={handleDeleteBeatdown} />
      )}
      <Totals totals={beatdownTotal} />
    </>
  );
};

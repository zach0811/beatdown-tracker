import "./App.css";
import { EnterBeatdown } from "./Components/EnterBeatdown";
import { BeatdownTable } from "./Components/BeatdownTable";
import { Card } from "antd";

function App() {
  return (
    <div className="App">
      <Card style={{ display: "grid", placeItems: "center" }}>
        <EnterBeatdown />
        <BeatdownTable />
      </Card>
    </div>
  );
}

export default App;

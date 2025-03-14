import { useState } from "react";
import Table from "./Components/Table";
import HeroSection from "./Components/HeroSecction";
import "./index.css";

function App() {
  const [showHeroSection, setShowHeroSection] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const onShow = () => {
    setShowHeroSection(false);
    setShowTable(true);
  };

  return (
    <div className="">
      {showHeroSection && <HeroSection onShow={onShow} />}
      <div id="project-Table">{showTable && <Table />}</div>
    </div>
  );
}

export default App;

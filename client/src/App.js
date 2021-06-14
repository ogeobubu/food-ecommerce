import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="main-container">
        <Dashboard open={open} setOpen={setOpen} />
        <Sidebar open={open} />
      </div>
    </>
  );
}

export default App;

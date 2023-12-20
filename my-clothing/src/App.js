import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Hats = () =>{
  return(
    <h1>this is hats page</h1>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<Hats/>}/>
      </Routes>
    </div>
  );
}

export default App;

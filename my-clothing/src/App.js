import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/shop.component.jsx";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

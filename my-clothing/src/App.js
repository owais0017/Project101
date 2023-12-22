import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/shop.component.jsx";
import Header from "./components/menu-item/header/header.component.jsx";
import SignInAndSignUp from "./pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

function App() {
  return (
    <div>
       <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/signin" element={<SignInAndSignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;

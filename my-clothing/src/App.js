import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/shop.component.jsx";
import Header from "./components/menu-item/header/header.component.jsx";
import SignInAndSignUp from "./pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth,createUserProfileDocument } from './firebase/firebase.utils.js';
import { useState, useEffect } from "react";
import {  onSnapshot } from "firebase/firestore";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged  (async userAuth => {    
      if (userAuth) {
        const userRef =await createUserProfileDocument(userAuth)
        onSnapshot(userRef,snapshot => {
         
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          
          
        })
      } else {
        setCurrentUser(userAuth);
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]); // Empty dependency array ensures that the effect runs once on mount

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;

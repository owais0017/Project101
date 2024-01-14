import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/shop.component.jsx";
import Header from "./components/menu-item/header/header.component.jsx";
import SignInAndSignUp from "./pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth,createUserProfileDocument } from './firebase/firebase.utils.js';
import {  useEffect } from "react";
import {  onSnapshot } from "firebase/firestore";
import { useDispatch,useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user.reducer.js";
import CheckoutPage from "./pages/homepage/checkout/checkout.component.jsx";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
 
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged  (async userAuth => {   
      if (userAuth) {
        const userRef =await createUserProfileDocument(userAuth)
        onSnapshot(userRef,snapshot => {
         dispatch(
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
         );
          
        })
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]); // Empty dependency array ensures that the effect runs once on mount


  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route excat path="/checkout"  Component={CheckoutPage} />
        <Route excat path="/signin" element={currentUser?(<Navigate to='/'/>):<SignInAndSignUp/>}/>
      </Routes>
    </div>
  );
}



export default App;

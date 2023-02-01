import { useDispatch } from "react-redux";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import { useEffect } from "react";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckOut from "./routes/checkout/checkout.component";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Runs every time user signs in or signs out
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // If user signs out -> store null
      // If user signs in  -> store user
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={"shop/*"} element={<Shop />} />
        <Route path={"auth"} element={<Authentication />} />
        <Route path={"checkout"} element={<CheckOut />} />
      </Route>
    </Routes>
    // Changed this while implementing routing. Now only returning the home route component
    // <Directory categories={categories} />
    // Moved all of this into its own component "Directory"
    // <div className={"categories-container"}>
    //   {categories.map((category) => {
    //     return (
    //       // Moved all this into its own component "CategoryItem"
    //       // <div key={category.id} className={"category-container"}>
    //       //   {/* <img className={"background-image"} src={category.imageUrl}/> */}
    //       //   <div className={'background-image'} style={{
    //       //     backgroundImage: `url(${category.imageUrl})`
    //       //   }} />
    //       //   <div className={"category-body-container"}>
    //       //     <h2>{category.title}</h2>
    //       //     <p>Shop Now</p>
    //       //   </div>
    //       // </div>
    //       <CategoryItem key={category.id} category={category} />
    //     );
    //   })}
    // </div>
  );
};

export default App;

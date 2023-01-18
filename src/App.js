// import logo from './logo.svg';
// import './App.css';
// import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';
import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { Routes, Route, Outlet } from 'react-router-dom';

const Shop = () => {
  return(
    <h1>I am the shop page</h1>
  );
}

const App = () => {

  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={"shop"} element={<Shop />} />
        <Route path={"auth"} element={<Authentication />} />
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
}

export default App;

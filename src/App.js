// import logo from './logo.svg';
// import './App.css';
// import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';
import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <Directory categories={categories} />
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

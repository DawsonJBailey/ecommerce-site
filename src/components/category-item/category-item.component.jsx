import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    return (
      <div className={"category-container"}>
        {/* <img className={"background-image"} src={category.imageUrl}/> */}
        <div
          className={"background-image"}
          style={{
            backgroundImage: `url(${category.imageUrl})`,
          }}
        />
        <div className={"category-body-container"}>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
}

export default CategoryItem;
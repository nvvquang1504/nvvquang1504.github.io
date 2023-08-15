import Products from "../Products";
import "./style.scss";
const Category = () => {
  return (
    <div className={"category-main-content"}>
      <div className="layout">
        <div className="category-title">Category Title</div>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default Category;

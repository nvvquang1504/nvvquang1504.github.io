import { useNavigate } from "react-router-dom";
import { REACT_APP_DEV_URL } from "../../../env.ts";
import "./style.scss";
const Category = ({ categories }: { categories?: any }) => {
  const navigate = useNavigate();

  return (
    <div className={"shop-by-category"}>
      <div className="categories">
        {categories?.data?.map((item: any) => {
          const { attributes } = item;
          return (
            <div
              key={item.id}
              className="category"
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <img
                src={
                  item.attributes.img.data.attributes.url
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

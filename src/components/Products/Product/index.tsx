import { REACT_APP_DEV_URL } from "../../../env.ts";
import { useNavigate } from "react-router-dom";
import "./style.scss";
type ProductProps = {
  id?: any;
  data?: any;
};
const Product = ({ id, data }: ProductProps) => {
  const navigate = useNavigate();

  return (
    <div className={"product-card"} onClick={() => navigate(`/product/${id}`)}>
      <div className="thumbnail">
        <img src={data.img.data[0].attributes.url} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="price">{data?.price} &#x20AB;</span>
      </div>
    </div>
  );
};

export default Product;

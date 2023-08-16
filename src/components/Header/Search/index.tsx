import { MdClose } from "react-icons/md";
import "./style.scss";
import prod from "../../../assets/products/earbuds-prod-3.webp";
const Search = ({ setShowSearch }: { setShowSearch: any }) => {
  return (
    <div className={"search-modal"}>
      <div className="form-field">
        <input type="text" autoFocus placeholder={"Search for products"} />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product name</span>
              <span className="desc">Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

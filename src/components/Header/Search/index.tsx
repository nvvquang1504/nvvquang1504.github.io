import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useFetchData } from "../../../hooks/useFetchData.ts";
import "./style.scss";
import { REACT_APP_DEV_URL } from "../../../env.ts";
import prod from "../../../assets/products/earbuds-prod-3.webp";
const Search = ({ setShowSearch }: { setShowSearch: any }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleOnChange(event: any) {
    setQuery(event.target.value);
  }
  let { data } = useFetchData(
    `/api/products?populate=*&filters[title][$contains]=${query}`,
  );
  if (!query.length) {
    data = null;
  }
  return (
    <div className={"search-modal"}>
      <div className="form-field">
        <input
          value={query}
          onChange={handleOnChange}
          type="text"
          autoFocus
          placeholder={"Search for products"}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      {data?.data?.map((item: any, index: number) => {
        return (
          <div key={item.id} className="search-result-content">
            <div className="search-results">
              <div
                className="search-result-item"
                onClick={() => {
                  navigate("/product/" + item.id);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img
                    src={
                      item.attributes.img.data[0].attributes.url
                    }
                    alt=""
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="desc">{item.attributes.desc}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;

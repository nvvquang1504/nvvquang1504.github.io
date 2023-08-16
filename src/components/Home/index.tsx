import { useEffect } from "react";
import "./style.scss";
import Banner from "./Banner";
import Category from "./Category";
import Products from "../Products";
import { fetchDataFromApi } from "../../store/services/api.ts";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks.ts";
import {
  SET_CATEGORIES,
  SET_PRODUCTS,
} from "../../store/features/globalSlice.ts";
const Home = () => {
  const dispatch = useAppDispatch();
  const { categories, products } = useAppSelector((state) => state.global);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  function getCategories() {
    fetchDataFromApi("/api/categories?populate=*")
      .then((rs) => {
        dispatch(SET_CATEGORIES(rs));
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  function getProducts() {
    fetchDataFromApi("/api/products?populate=*")
      .then((rs) => {
        dispatch(SET_PRODUCTS(rs));
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText={"Popular Products"} />
        </div>
      </div>
    </div>
  );
};

export default Home;

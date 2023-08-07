import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ProductList from "../ProductList";
const products = [
  {
    name: "Product 01",
    price: 29,
  },
  {
    name: "Product 02",
    price: 69,
  },
  {
    name: "Product 03",
    price: 49,
  },
  {
    name: "Product 04",
    price: 79,
  },
  {
    name: "Product 05",
    price: 49,
  },
  {
    name: "Product 06",
    price: 89,
  },
  {
    name: "Product 07",
    price: 19,
  },
  {
    name: "Product 08",
    price: 19,
  },
];
const NewProducts = () => {
  return (
    <Container>
      <SectionTitle
        text1={"Discover NEW arrivals"}
        text2={"Recently added shirts!"}
      />
      <ProductList data={products} />
    </Container>
  );
};

export default NewProducts;

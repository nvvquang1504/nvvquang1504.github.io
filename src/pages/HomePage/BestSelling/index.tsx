import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ProductList from "../ProductList";
import MyButton from "../../../components/MyButton";
import HorizontalStack from "../../../components/HorizontalStack";
const products = [
  {
    name: "product 09",
    price: 49,
  },
  {
    name: "product 10",
    price: 69,
  },
  {
    name: "product 11",
    price: 29,
  },
  {
    name: "product 12",
    price: 39,
  },
];

const BestSelling = () => {
  return (
    <Container>
      <SectionTitle
        text1={"Top Sellers"}
        text2={"Browse our top-selling products"}
      />
      <ProductList data={products} />
      <HorizontalStack
        justifyContent={"center"}
        alignItems={"center"}
        py={"4.4rem"}
      >
        <MyButton isRoundCorner={false} type={"primary"}>
          SHOP NOW
        </MyButton>
      </HorizontalStack>
    </Container>
  );
};

export default BestSelling;

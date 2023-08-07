import PageLayout from "../../layouts/PageLayout";
import Container from "../../components/Container";
import VerticalStack from "../../components/VerticalStack";
import { Grid, Box, Typography } from "@mui/material";
import MyCarousel from "./MyCarousel";
import ProductDetail from "./ProductDetail";

const SingleProductPage = () => {
  return (
    <PageLayout>
      <Container>
        <VerticalStack>
          <Grid container columnSpacing={4}>
            <Grid
              item
              mobile={12}
              tablet={5}
              sx={{
                "& img": {
                  width: "100%",
                },
              }}
            >
              <MyCarousel />
            </Grid>
            <Grid item mobile={12} tablet={7}>
              <ProductDetail />
            </Grid>
          </Grid>
          <Box
            mt={12}
            mb={1}
            sx={{
              "& table": {
                width: "100%",
                borderCollapse: "collapse",
                "& tbody": {
                  "& td": {
                    border: "1px solid #EBEBEB",
                  },
                  "& .description, .review": {
                    cursor: "pointer",
                    width: "8.5rem",
                    height: "3.5rem",
                    textAlign: "center",
                    bgcolor: "info.main",
                    color: "text.secondary",
                    fontWeight: 700,
                    "&.active": {
                      background: "white",
                      color: "black",
                    },
                  },
                },
              },
            }}
          >
            <table>
              <tbody>
                <tr>
                  <td className={"description active"}>Description</td>
                  <td className={"review"}>Review</td>
                  <td
                    style={{
                      border: "none",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <Typography p={5} align={"justify"}>
                      A key objective is engaging digital marketing customers
                      and allowing them to interact with the brand through
                      servicing and delivery of digital media. Information is
                      easy to access at a fast rate through the use of digital
                      communications. Users with access to the Internet can use
                      many digital mediums, such as Facebook, YouTube, Forums,
                      and Email etc. Through Digital communications it creates a
                      Multi-communication channel where information can be
                      quickly exchanged around the world by anyone without any
                      regard to whom they are.[28] Social segregation plays no
                      part through social mediums due to lack of face to face
                      communication and information being wide spread instead to
                      a selective audience.
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </VerticalStack>
      </Container>
    </PageLayout>
  );
};

export default SingleProductPage;

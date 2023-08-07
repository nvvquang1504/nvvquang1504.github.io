import { PropsWithChildren } from "react";
import HorizontalStack from "../../../../components/HorizontalStack";
import VerticalStack from "../../../../components/VerticalStack";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = (
  props: PropsWithChildren & { testimonialImage: string },
) => {
  return (
    <HorizontalStack
      spacing={6}
      className={"testimonial"}
      sx={(theme) => ({
        [theme.breakpoints.between("mobile", "tablet")]: {
          flexDirection: "column",
          alignItems: "center",
          "& p": {
            // textAlign: "justify",
          },
        },
      })}
    >
      <VerticalStack
        sx={{
          "& img": {
            width: "13.125rem",
            height: "13.125rem",
            borderRadius: "50%",
          },
        }}
      >
        <img src={props.testimonialImage} alt="" />
      </VerticalStack>
      <VerticalStack
        justifyContent={"space-between"}
        sx={{
          "& svg": {
            width: "3rem",
            height: "3rem",
          },
        }}
      >
        <BiSolidQuoteAltLeft />
        {props.children}
      </VerticalStack>
    </HorizontalStack>
  );
};

export default Testimonial;

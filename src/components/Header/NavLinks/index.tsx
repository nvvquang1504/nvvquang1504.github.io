import HorizontalStack from "../../HorizontalStack";
import { NavLink } from "react-router-dom";
import { Typography, IconButton } from "@mui/material";
import { GiTireIronCross } from "react-icons/gi";
const NavLinks = (props: {
  closeNav: () => void;
  isMobileNavOpen: boolean;
}) => {
  const fontWeight = 800;
  return (
    <HorizontalStack
      spacing={3}
      justifyContent={"center"}
      alignItems={"center"}
      className={props.isMobileNavOpen ? "open" : ""}
      sx={(theme) => ({
        "&.open": {
          left: 0,
        },
        "& a": { textDecoration: "none" },
        transition: "all .5s",
        ml: 15,
        "& .MuiTypography-root": {
          fontWeight,
          cursor: "pointer",
          "&:hover": {
            color: "primary.light",
          },
        },
        "& .MuiIconButton-root": {
          display: "none",
        },
        [theme.breakpoints.between("mobile", "tablet")]: {
          position: "fixed",
          top: 0,
          zIndex: 10,
          left: "-110%",
          ml: 0,
          flexDirection: "column",
          justifyContent: "center",
          height: "100dvh",
          width: "100dvw",
          bgcolor: "primary.main",
          "& a": {
            pb: 8,
            ml: "0 !important",
            "& p": {
              color: "white",
            },
          },
          "& .MuiIconButton-root": {
            display: "inline-flex",
            position: "absolute",
            top: "1%",
            left: "2%",
          },
        },
      })}
    >
      <IconButton
        sx={{
          color: "white",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
          },
          "& svg": {
            color: "red",
            // fill: "red",
          },
        }}
        onClick={props.closeNav}
      >
        <GiTireIronCross />
      </IconButton>
      <NavLink to={"/"}>
        <Typography color={"black"}>HOME</Typography>
      </NavLink>
      <NavLink to={"/about"}>
        <Typography color={"black"}>ABOUT</Typography>
      </NavLink>
      <NavLink to={"/contact"}>
        <Typography color={"primary"}>CONTACT US</Typography>
      </NavLink>
    </HorizontalStack>
  );
};
export default NavLinks;

import HorizontalStack from "../HorizontalStack";
import { IconButton, Box, Typography, Badge, Theme } from "@mui/material";
import { PropsWithChildren, useState, useCallback } from "react";
import Container from "../Container";

import { FiUser, FiShoppingBag } from "react-icons/fi";
import { LiaHamburgerSolid } from "react-icons/lia";
import { useMediaQuery } from "@mui/material";
import NavLinks from "./NavLinks";
const LogoContainer = (props: PropsWithChildren) => {
  return <HorizontalStack>{props.children}</HorizontalStack>;
};

const LeftUI = (props: { closeNav: () => void; isMobileNavOpen: boolean }) => {
  const matches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("mobile", "tablet"),
  );
  return (
    <HorizontalStack>
      {!matches && (
        <LogoContainer>
          <Typography variant={"h4"}>NorthStar</Typography>
        </LogoContainer>
      )}

      <NavLinks
        closeNav={props.closeNav}
        isMobileNavOpen={props.isMobileNavOpen}
      ></NavLinks>
    </HorizontalStack>
  );
};
const RightUI = () => {
  const iconSize = 24;
  return (
    <HorizontalStack
      alignItems={"center"}
      spacing={3}
      sx={{
        "& svg": {
          cursor: "pointer",
        },
      }}
    >
      <Badge badgeContent={0} color={"primary"}>
        <FiUser size={iconSize} />
      </Badge>
      <Badge badgeContent={4} color={"primary"}>
        <FiShoppingBag size={iconSize} />
      </Badge>
    </HorizontalStack>
  );
};
const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const matches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("mobile", "tablet"),
  );
  const openNav = useCallback(() => {
    setIsMobileNavOpen(true);
  }, []);
  const closeNav = useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);
  return (
    <Box>
      <Container>
        <HorizontalStack justifyContent={"space-between"} py={3}>
          {matches ? (
            <Box>
              <IconButton onClick={openNav}>
                <LiaHamburgerSolid />
              </IconButton>
              <LeftUI closeNav={closeNav} isMobileNavOpen={isMobileNavOpen} />
            </Box>
          ) : (
            <>
              <LeftUI closeNav={closeNav} isMobileNavOpen={isMobileNavOpen} />
              <RightUI />
            </>
          )}
        </HorizontalStack>
      </Container>
    </Box>
  );
};

export default Header;

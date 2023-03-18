import {
  Box,
  Flex,
  IconButton,
  Image,
  Skeleton,
  Spacer,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import Menu from "./Menu";

const Navigation = () => {
  const [phoneSize] = useMediaQuery("(max-width: 500px)");
  const btnDisplay = useBreakpointValue({ base: "none", md: "inline-flex" });

  return (
    <Box
      paddingY={5}
      paddingX={10}
      position="sticky"
      top="0"
      bg="white"
      zIndex={10}
      w="100%"
    >
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <Menu />
        </Box>
        <Spacer />
        <Link to="/">
          <Skeleton
            fadeDuration="5"
            isLoaded
            height={phoneSize ? "60px" : "70px"}
          >
            <Image src={logo} h="100%" alt="ecommerce logo" objectFit="cover" />
          </Skeleton>
        </Link>
        <Spacer />
        <Link to="/cart">
          <IconButton
            display={btnDisplay}
            aria-label="Cart"
            icon={<FaShoppingCart />}
            variant="ghost"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;

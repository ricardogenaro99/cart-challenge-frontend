import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { FaBars, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { logo } from "../../assets";
import MenuButton from "./MenuButton";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton aria-label="Menu" icon={<FaBars />} onClick={onOpen} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.50" maxW="292px" padding="20px 10px">
          <Box borderBottomWidth="1px" padding="7%" marginBottom="50px">
            <Image src={logo} alt="ecommerce logo" objectFit="cover" />
          </Box>
          <Box>
            <Link to="/" onClick={onClose}>
              <MenuButton
                name="&nbsp;&nbsp;Shop&nbsp;&nbsp;"
                icon={<FaShoppingBag />}
              />
            </Link>
            <Link to="/cart" onClick={onClose}>
              <MenuButton name="Carrito" icon={<FaShoppingCart />} />
            </Link>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;

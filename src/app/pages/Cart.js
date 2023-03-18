import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { CartItem, CartOrderSummary } from "../components";

const cartData = [
  {
    id: "1",
    price: 39.99,
    currency: "GBP",
    name: "Ferragamo bag",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl: "https://via.placeholder.com/600/?text=Estatico",
  },
  {
    id: "2",
    price: 39.99,
    currency: "GBP",
    name: "Bamboo Tan",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl: "https://via.placeholder.com/600/?text=Estatico",
  },
  {
    id: "3",
    price: 39.99,
    currency: "GBP",
    name: "Yeezy Sneakers",
    description: "Tan, 40mm",
    quantity: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  },
];

const Cart = () => (
  <Box
    mx="auto"
    w="100%"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
    bg="gray.50"
  >
    <Stack
      direction={{ base: "column", lg: "row" }}
      align={{ lg: "flex-start" }}
      spacing={{ base: "8", md: "16" }}
    >
      <Stack spacing={{ base: "8", md: "10" }} flex="2">
        <Heading fontSize="2xl" fontWeight="extrabold">
          Carrito de compras ({cartData.length} items)
        </Heading>

        <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>o</p>
          <Link to="/" color={mode("blue.500", "blue.200")} as={LinkRouter}>
            Continuar comprando
          </Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
);

export default Cart;

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobal } from "../../contexts/GlobalProvider";
import { addProductCart } from "../../services";
import { renderAmount } from "../../utils";

const ProductInfo = ({ productId, name, amount, description }) => {
  const { cartIdGlobal, changeCartIdGlobal, hideLoader, showLoader } =
    useGlobal();
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      showLoader();
      const payload = { cartId: cartIdGlobal, productId, quantity };
      const res = await addProductCart(payload);
      toast({
        title: "Carrito actualizado",
        status: "success",
        isClosable: true,
        position: "top",
      });
      setQuantity(1);
      changeCartIdGlobal(res.data.id);
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error?.message;
      toast({
        title: errorMessage,
        status: "error",
        isClosable: true,
        position: "top",
      });
    } finally {
      hideLoader();
    }
  };

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="flex-start"
      as="form"
      onSubmit={handleSubmit}
    >
      <Box paddingTop={2}>
        <Heading>{name}</Heading>
        <Text color="gray.500" fontSize="21px">
          {renderAmount(amount)}
        </Text>
      </Box>
      <Text marginTop="3" marginBottom="auto">
        {description}
      </Text>
      <Divider marginY={7} />
      <NumberInput min={1} w="100%" value={quantity} onChange={setQuantity}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        width="100%"
        marginTop={2}
        leftIcon={<FaShoppingCart />}
        type="submit"
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ProductInfo;

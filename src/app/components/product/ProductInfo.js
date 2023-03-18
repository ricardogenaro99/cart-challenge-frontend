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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { renderAmount } from "../../utils";

const ProductInfo = ({ productId, name, amount, description }) => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productId, quantity });
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

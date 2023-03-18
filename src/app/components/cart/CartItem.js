import { CloseButton, Flex, Select, useColorModeValue } from "@chakra-ui/react";
import { CartProductMeta } from "./CartProductMeta";
import PriceTag from "./PriceTag";

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

const CartItem = (props) => {
  const {
    isGiftWrapping,
    name,
    description,
    quantity,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={"https://via.placeholder.com/500/?text=Estatico"}
        isGiftWrapping={isGiftWrapping}
      />
      <Flex width="full" justify="space-between">
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
        />
      </Flex>
    </Flex>
  );
};

export default CartItem;

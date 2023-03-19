import { HStack, Text, useColorModeValue as mode } from "@chakra-ui/react";
import { renderAmount } from "../../utils";

const PriceTag = ({
  amount,
  salePrice,
  rootProps,
  priceProps,
  salePriceProps,
}) => {
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {renderAmount(amount)}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>{renderAmount(salePrice)}</SalePrice>
      )}
    </HStack>
  );
};

const Price = ({ isOnSale, children, textProps }) => {
  const defaultColor = mode("gray.700", "gray.400");
  const onSaleColor = mode("gray.400", "gray.700");
  const color = isOnSale ? onSaleColor : defaultColor;
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? "line-through" : "none"}
      {...textProps}
    >
      {children}
    </Text>
  );
};

const SalePrice = (props) => (
  <Text
    as="span"
    fontWeight="semibold"
    color={mode("gray.800", "gray.100")}
    {...props}
  />
);

export default PriceTag;

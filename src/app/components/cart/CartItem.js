import {
  Flex,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useGlobal } from "../../contexts/GlobalProvider";
import { updateCart } from "../../services";
import { CartProductMeta } from "./CartProductMeta";
import PriceTag from "./PriceTag";

const CartItem = ({ data, onChangeQuantity, reload }) => {
  const { changeCartIdGlobal, hideLoader, showLoader } = useGlobal();
  const { cartId, productId, name, description, quantity, amount } = data;
  const toast = useToast();
  const [quantityItem, setQuantityItem] = useState(quantity);

  useEffect(() => {
    setQuantityItem(quantity);
  }, [quantity]);

  const generalUpdate = async (quantityProp) => {
    try {
      showLoader();
      const payload = { cartId, productId, quantity: quantityProp };
      const res = await updateCart(payload);
      toast({
        title: "Carrito actualizado",
        status: "success",
        isClosable: true,
        position: "top",
      });
      if (!changeCartIdGlobal(res.data.id)) reload();
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

  const handleClickDelete = async (e) => {
    await generalUpdate(0);
  };

  const handleClickUpdate = async (e) => {
    await generalUpdate(quantityItem);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      gap={2}
    >
      <CartProductMeta
        name={name}
        description={description}
        image={"https://via.placeholder.com/500/?text=Estatico"}
      />
      <Flex width="full" justify="space-between">
        <NumberInput
          min={1}
          w="100px"
          value={quantityItem}
          onChange={setQuantityItem}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <PriceTag amount={amount} />
        <Flex alignItems="center" gap={2}>
          <IconButton
            icon={<GrClose />}
            aria-label={`Eliminar ${name} del carrito`}
            onClick={handleClickDelete}
          />
          <IconButton
            icon={<FaRegSave />}
            aria-label={`Actualizar ${name} del carrito`}
            onClick={handleClickUpdate}
            isDisabled={quantityItem === quantity}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;

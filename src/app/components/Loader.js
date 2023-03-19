import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useGlobal } from "../contexts/GlobalProvider";

function Loader() {
  const { loadComponentIsVisible, isGlobalProviderLoading } = useGlobal();

  return (
    <Modal
      isOpen={loadComponentIsVisible || isGlobalProviderLoading.current}
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </ModalContent>
    </Modal>
  );
}

export default Loader;

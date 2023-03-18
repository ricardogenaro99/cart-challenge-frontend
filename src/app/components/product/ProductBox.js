import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { renderAmount } from "../../utils";

const ProductBox = ({ img, name, amount }) => {
  return (
    <Box
      w="100%"
      bg="white"
      shadow="md"
      borderRadius={9}
      padding={4}
      marginTop={50}
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Image
          src={img}
          borderRadius={7}
          shadow="md"
          objectFit="cover"
          w="100%"
          h="250px"
        />
        <Heading size="md" marginTop="30px">
          {name}
        </Heading>
        <Text color="#6a6a6a">{renderAmount(amount)}</Text>
      </Flex>
    </Box>
  );
};

export default ProductBox;

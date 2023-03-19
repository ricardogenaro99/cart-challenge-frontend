import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export const CartProductMeta = ({ image, name, description }) => {
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={description}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{description}</Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};

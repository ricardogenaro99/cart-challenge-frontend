import { Box, Center, Grid, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductImage, ProductInfo } from "../components";

const Product = () => {
  const params = useParams();

  useEffect(() => {
    const { productId } = params;
  }, [params]);

  const responsiveGrid = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
  });

  return (
    <Box bg="gray.50" w="100%" paddingY={9} paddingX={10} maxW="800px">
      <Center>
        <Box width="100%">
          <Grid templateColumns={responsiveGrid} gap="30px">
            <Box bg="white" shadow="md" borderRadius="5px">
              <Center>
                <ProductImage />
              </Center>
            </Box>
            <Box marginX={4}>
              <ProductInfo
                productId=""
                name="Product"
                amount={10.4}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima est magnam adipisci modi quos voluptatibus quae perferendis saepe placeat similique?"
              />
            </Box>
          </Grid>
        </Box>
      </Center>
    </Box>
  );
};

export default Product;

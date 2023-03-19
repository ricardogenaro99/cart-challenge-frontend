import {
  Box,
  Center,
  Grid,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductImage, ProductInfo } from "../components";
import { useGlobal } from "../contexts/GlobalProvider";
import { getProductById } from "../services";

const Product = () => {
  const { hideLoader, showLoader } = useGlobal();
  const params = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        showLoader();
        const { productId } = params;
        const res = await getProductById(productId);
        if (!res.data) throw new Error("No se encontro el producto");
        setData(res.data);
      } catch (error) {
        toast({
          title: error.message,
          status: "error",
          isClosable: true,
          position: "top",
        });
        navigate("/");
      } finally {
        hideLoader();
      }
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                productId={data?.id}
                name={data?.description}
                amount={data?.amount}
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

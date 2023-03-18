import {
  Box,
  Flex,
  Grid,
  Heading,
  Skeleton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProductBox } from "./../components";

const Shop = () => {
  const responsiveGrid = useBreakpointValue({
    base: "repeat(auto-fill, minmax(min(100%, 250px), 1fr))",
  });

  const products = [
    {
      id: 1,
      description: "Producto estatico 1",
      amount: "100.50",
    },
    {
      id: 2,
      description: "Producto estatico 2",
      amount: "24.99",
    },
  ];

  return (
    <Box marginBottom={5} width="100%" paddingY={7}>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Box marginBottom={6}>
          <Flex
            width="100%"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading marginBottom={2} size="lg">
              Ultima Colección
            </Heading>
            <Text marginX={5} align="center">
              Esta colección de productos electrónicos es una selección
              cuidadosamente curada de dispositivos de alta tecnología diseñados
              para satisfacer las necesidades de los usuarios más exigentes.
              Esta colección incluye una amplia gama de productos electrónicos,
              desde teléfonos inteligentes y tabletas hasta portátiles y
              accesorios de alta calidad. Entre los dispositivos destacados se
              encuentran los últimos modelos de teléfonos inteligentes de las
              principales marcas del mercado, con pantallas de alta definición,
              cámaras avanzadas y características innovadoras para mejorar la
              productividad y el entretenimiento. También incluye una selección
              de tabletas de última generación, con pantallas grandes y nítidas,
              procesadores rápidos y baterías de larga duración para ofrecer una
              experiencia de usuario inigualable.
            </Text>
          </Flex>
        </Box>
        <Grid h="auto" w="100%" templateColumns={responsiveGrid} gap="30px">
          {products.map((product, i) => (
            <Skeleton isLoaded key={i}>
              <Link to={`/shop/${String(product.id)}`}>
                <ProductBox
                  img={"https://via.placeholder.com/600/?text=Estatico"}
                  name={product.description}
                  amount={product.amount}
                />
              </Link>
            </Skeleton>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Shop;
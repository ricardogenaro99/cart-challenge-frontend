import { Box, Center, ChakraProvider, Container, Grid } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { CustomCarousel, Footer, Loader, Navigation } from "./app/components";
import { About, Cart, Product, Shop } from "./app/pages";

function App() {
  return (
    <ChakraProvider>
      <Grid
        gridTemplateRows={"auto 1fr auto"}
        gridTemplateColumns={"1fr"}
        w="100%"
        h="100%"
        minH="100vh"
        bg="gray.100"
      >
        <Navigation />
        <Box h="100%">
          <CustomCarousel />
          <Box>
            <Container w="100%" maxW="8xl" p={10}>
              <Center>
                <Routes>
                  <Route path="/">
                    <Route index element={<Shop />} />
                    <Route path="shop">
                      <Route path=":productId" element={<Product />} />
                    </Route>
                    <Route path="cart" element={<Cart />} />
                  </Route>
                </Routes>
              </Center>
            </Container>
          </Box>
        </Box>
        <Footer />
      </Grid>
      <Loader />
    </ChakraProvider>
  );
}

export default App;

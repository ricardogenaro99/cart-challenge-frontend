import { Box, Center, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { slider, slider2 } from "../../assets";

const CustomCarousel = () => {
  const images = [slider, slider2];

  return (
    <>
      <Center w="100%">
        <Box shadow="lg" w="100%">
          <Carousel
            width="100%"
            dynamicHeight={true}
            autoPlay
            infiniteLoop
            emulateTouch
            interval={2500}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            {images.map((e, i) => (
              <Box height="300px" key={i}>
                <Image
                  borderRadius="md"
                  alt="carousel image"
                  src={e}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Center>
    </>
  );
};

export default CustomCarousel;

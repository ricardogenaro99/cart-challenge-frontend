import {
  Center,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from "@chakra-ui/react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ImageTab = ({ src }) => {
  return <Image src={src} width="40px" />;
};

const ProductImage = () => {
  const responsiveWidth = useBreakpointValue({
    base: undefined,
    sm: 300,
    md: 350,
  });

  const srcBase = "https://via.placeholder.com/600";

  const emptyArray = new Array(4).fill(0);

  return (
    <>
      <Tabs defaultIndex={0} variant="enclosed">
        <TabPanels>
          {emptyArray.map((_, i) => (
            <TabPanel key={i}>
              <InnerImageZoom
                src={`${srcBase}/?text=Estatico${i + 1}`}
                width={responsiveWidth}
              />
            </TabPanel>
          ))}
        </TabPanels>
        <Center>
          <TabList>
            {emptyArray.map((_, i) => (
              <Tab key={i}>
                <ImageTab src={`${srcBase}/?text=Estatico${i + 1}`} />
              </Tab>
            ))}
          </TabList>
        </Center>
      </Tabs>
    </>
  );
};

export default ProductImage;

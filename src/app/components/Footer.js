import { Box, Flex, IconButton, Text } from "@chakra-ui/react";

import { FaGithub, FaInstagram, FaRegEnvelope } from "react-icons/fa";

const IconFooter = ({ mx, icon }) => {
  return (
    <IconButton
      bg="gray.700"
      color="white"
      variant="ghost"
      aria-label="icon"
      icon={icon}
      size="md"
      marginX={mx}
      _hover={{ bg: "gray.700" }}
      _active={{ bg: "gray.700" }}
      _focus={{ boxShadow: "0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)" }}
    />
  );
};

const Footer = () => {
  const buttonLinks = [
    {
      href: "mailto:genaro.choquehuanca.palli@gmail.com",
      icon: <FaRegEnvelope />,
    },
    {
      href: "mailto:genaro.choquehuanca.palli@gmail.com",
      icon: <FaInstagram />,
    },
    {
      href: "mailto:genaro.choquehuanca.palli@gmail.com",
      icon: <FaGithub />,
    },
  ];

  return (
    <Box w="100%" bg="white">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100%"
          bg="gray.300"
          paddingY={5}
          gap={3}
        >
          {buttonLinks.map((e, i) => (
            <a key={i} href={e.href} target="_blank" rel="noopener noreferrer">
              <IconFooter icon={e.icon} />
            </a>
          ))}
        </Flex>
        <Flex
          bg="gray.700"
          color="white"
          w="100%"
          justifyContent="center"
          paddingY={3}
        >
          <Text fontWeight="thin" fontSize="15px">
            &copy; Ricardo Genaro 2023 - XcaleConsulting Cart Challenge
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;

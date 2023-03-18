import { Button } from "@chakra-ui/react";

const MenuButton = ({ icon, name }) => {
  return (
    <div>
      <Button
        _hover={{ bg: "gray.600", color: "white" }}
        _active={{ bg: "gray.700", color: "white" }}
        width="272px"
        paddingRight={105}
        iconSpacing={78}
        leftIcon={icon}
        variant="ghost"
        size="md"
        marginBottom="5px"
        marginX="auto"
      >
        {name}
      </Button>
    </div>
  );
};

export default MenuButton;

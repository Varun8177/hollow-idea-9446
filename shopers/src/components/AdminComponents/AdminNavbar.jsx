import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { ImMobile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import shoperzLogo from "../images/shoperzLogo.png";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none" }}
      w="fit-content"
    >
      {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
}

export default function AdminNavbar() {
  const navigate = useNavigate();
  const { handleSearchValue, Searchvalue } = useContext(SearchContext);
  const { colorMode } = useColorMode();
  const login = localStorage.getItem("login");
  return (
    <Box
      borderWidth={"1px"}
      w={"100%"}
      zIndex={"2"}
      h={"126px"}
      position={{ base: "none", sm: "none", md: "sticky", lg: "sticky" }}
      top={"0"}
      bgColor={colorMode === "light" ? "white" : "black"}
      mb={{ base: "200px", sm: "170px", md: "20px", lg: "20px" }}
    >
      <Box
        color="white"
        h={{ base: "130px", sm: "130px", md: "72px", lg: "72px" }}
        bgColor={colorMode === "light" ? "white" : "black"}
      >
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          w="87%"
          // color="#333333"
          h={"72px"}
          m={"auto"}
          alignItems={"center"}
          bgColor={colorMode === "light" ? "white" : "black"}
        >
          {/* Logo section & search bar */}

          <Image
            m={"auto"}
            src={shoperzLogo}
            alt="logo"
            height={"50px"}
            w={"136px"}
            mt={"10px"}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
              });
              handleSearchValue("");
              navigate("/profile/Admin");
            }}
          />
          <Box>
            <ColorModeToggle />
          </Box>
        </Flex>

        {/* Download app...Etc */}
      </Box>
    </Box>
  );
}

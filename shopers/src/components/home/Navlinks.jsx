import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.css";

export default function NavLinks() {
  const links = [
    { path: "/women-ethnic", title: "Women Ethnic" },
    { path: "/women-western", title: "Women Western" },
    { path: "/men", title: "Men" },
    { path: "/kids", title: "Kids" },
    { path: "/home-&-kitchen", title: "Home & Kitchen" },
    { path: "/beauty-&-health", title: "Beauty & Health" },
    { path: "/jewellery-&-accessories", title: "Jewellery & Accessories" },
    { path: "/bags-&-footwear", title: "Bags & Footwear" },
    { path: "/electronics", title: "Electronics" },
  ];
  return (
    <Flex
      justifyContent={"space-between"}
      height={"fit-content"}
      w="87%"
      h={"52px"}
      m={"auto"}
      alignItems={"center"}
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
    >
      {links.map((link) => {
        return (
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
            key={link.path}
            to={link.path}
          >
            {link.title}
          </NavLink>
        );
      })}
    </Flex>
  );
}

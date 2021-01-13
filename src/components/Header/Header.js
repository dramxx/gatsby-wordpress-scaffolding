import React from "react"

import { BrandPart, MenuPart, StyledHeader } from "./style"
import LinkTo from "../Commons/link"

const Header = () => (
  <StyledHeader>
    <BrandPart>
      <LinkTo target={"/"} text={"gatsby-wordpress"} color={"#000"} />
    </BrandPart>
    <MenuPart>
      <LinkTo target={"/second"} text={"second"} color={"#000"} />
      <LinkTo target={"/third"} text={"third"} color={"#000"} />
      <LinkTo target={"/fourth"} text={"fourth"} color={"#000"} />
    </MenuPart>
  </StyledHeader>
)

export default Header

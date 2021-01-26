import React from "react"

import { Brand, Menu, Navbar } from "./style"
import LinkTo from "../Commons/link"

const Header = () => (
  <Navbar>
    <Brand>
      <LinkTo target={"/"} text={"gatsby-wordpress"} color={"#000"} />
    </Brand>
    <Menu>
      <LinkTo target={"/second"} text={"second"} color={"#000"} />
      <LinkTo target={"/third"} text={"third"} color={"#000"} />
      <LinkTo target={"/fourth"} text={"fourth"} color={"#000"} />
    </Menu>
  </Navbar>
)

export default Header

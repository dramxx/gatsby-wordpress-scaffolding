import React from "react"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { StyledMain } from "./style"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"gatsby-wordpress-demo"} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

export default Layout

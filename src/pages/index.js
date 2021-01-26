import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Commons/seo"

const WelcomeMessage = styled.h1`
  font-size: 100px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeMessage>hello, Artin &#10084;&#65039;</WelcomeMessage>
  </Layout>
)

export default IndexPage

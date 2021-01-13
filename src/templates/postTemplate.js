import React from "react"

import Layout from "../components/Layout/Layout"

const postTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <section dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}

export default postTemplate

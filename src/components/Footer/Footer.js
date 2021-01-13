import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { pathOr } from "rambda"

import { StyledFooter } from "./style"
import LinkTo from "../Commons/link"

const Footer = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <StyledFooter>
        {pathOr([], ["allWordpressPost", "edges"], data).map((article, i) => (
          <div key={i}>
            <LinkTo
              isBlog
              target={article.node.slug}
              text={article.node.slug}
              color={"#000"}
            />
          </div>
        ))}
      </StyledFooter>
    )}
  />
)

export default Footer

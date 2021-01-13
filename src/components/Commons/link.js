import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`
const LinkTo = ({ target, text, color, isBlog = false }) => {
  return (
    <StyledLink to={isBlog ? `/blog/${target}` : target} color={color}>
      {text}
    </StyledLink>
  )
}

export default LinkTo

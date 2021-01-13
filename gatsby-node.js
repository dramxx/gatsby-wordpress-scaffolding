const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/postTemplate.js`)

  const {
    data: {
      allWordpressPost: { edges: allPosts },
    },
  } = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            content
          }
        }
      }
    }
  `)

  allPosts.forEach(post => {
    const article = post.node

    createPage({
      path: `/blog/${article.slug}/`,
      component: slash(postTemplate),
      context: article,
    })
  })
}

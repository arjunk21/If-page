/** @format */

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const WebsiteTemplate = require.resolve(`./src/templates/WebsiteTemplate.js`)
  const LandingPageTemplate = require.resolve(`./src/templates/LandingPageTemplate.js`)

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 100000) {
          edges {
            node {
              frontmatter {
                id
                type
                title
                description
                keywords
                pathname
              }
            }
          }
        }
      }
    `
  )
  const markdownFiles = allMarkdown.data.allMarkdownRemark.edges

  // generate website pages
  markdownFiles
    .filter(item => item.node.frontmatter.type === 'page')
    .forEach(({ node }) => {
      const pathname = node.frontmatter.pathname
      const lowerPathname = String(node.frontmatter.pathname).toLowerCase()
      if (node.frontmatter.id === 'home') {
        createPage({
          path: '/',
          component: WebsiteTemplate,
          context: {
            pageId: node.frontmatter.id
          }
        })
      }
      createPage({
        path: pathname || `${node.frontmatter.id}`,
        component: WebsiteTemplate,
        context: {
          pageId: node.frontmatter.id
        }
      })
      if (pathname && pathname !== lowerPathname) {
        createPage({
          path: lowerPathname,
          component: WebsiteTemplate,
          context: {
            pageId: node.frontmatter.id
          }
        })
      }
    })

  // generate landing pages
  markdownFiles
    .filter(item => item.node.frontmatter.type === 'landingPage')
    .forEach(({ node }) => {
      const pathname = node.frontmatter.pathname
      const lowerPathname = String(node.frontmatter.pathname).toLowerCase()
      createPage({
        path: pathname || `${node.frontmatter.id}`,
        component: LandingPageTemplate,
        context: {
          pageId: node.frontmatter.id
        }
      })
      if (pathname && pathname !== lowerPathname) {
        createPage({
          path: lowerPathname,
          component: LandingPageTemplate,
          context: {
            pageId: node.frontmatter.id
          }
        })
      }
    })
}

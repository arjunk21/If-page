/** @format */

import React from 'react'
import { graphql } from 'gatsby'

import classes from './content.module.css'

import SEO from '../components/SEO/SEO'
import Footer from '../components/Footer'
import Header from '../components/Header'

import renderAst from '../lib/renderAst'

class WebsiteTemplate extends React.Component {
  render() {
    const {
      data: { page }
    } = this.props

    return (
      <React.Fragment>
        <SEO frontmatter={page.frontmatter} />
        <Header />
        <div className="w-100">
          <div className={`row justify-content-center align-items-center ${classes.content}`}>
            <div className="col-12">
              <div className="row">
                <div className="col">
                  <div>{renderAst(page.htmlAst)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default WebsiteTemplate

export const query = graphql`
  query($pageId: String!) {
    page: markdownRemark(frontmatter: { id: { eq: $pageId } }) {
      htmlAst
      frontmatter {
        title
        description
        keywords
        pathname
      }
    }
  }
`

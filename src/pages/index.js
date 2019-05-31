import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/imageGal"


const IndexPage = (props) => {
  return (
  <Layout>
    <SEO title="Home" />
    <Gallery data={props.data} />

  </Layout>
  );
}

export default IndexPage


export const query = graphql`query{
  allPixabayPhoto(limit: 50) {
      edges {
        node {
          id
          previewURL
          largeImageURL
          pageURL
          tags
          user
        }
      }
    }
}`

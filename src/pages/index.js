import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useBreakpoint from '../components/breakpoint'

const IndexPage = (props) => {
  const point = useBreakpoint();
  if (point === 'mobile') {
    return(
      <React.Fragment>
        <Layout>
          <SEO title="Home" />
          <p>A recent Durham Law(LLB) graduate with honours with experience in Corporate Finance Law, as well as Land and Conveyance Law in Hong Kong. Tech-curious, I can provide full-stack support with a suite of languages such as Ruby, Python, ReactJS, and SQL. </p>
        </Layout>
      </React.Fragment>
      
    );
  } else {
    return (
      <React.fragment>
        <Layout>
        <SEO title="Home" />
      </Layout>
      <p>A recent Durham Law(LLB) graduate with honours with experience in Corporate Finance Law, as well as Land and Conveyance Law in Hong Kong. Tech-curious, I can provide full-stack support with a suite of languages such as Ruby, Python, ReactJS, and SQL. </p>
      </React.fragment>
    );
  };
 
}


export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleSwiper from "../components/swiper"
import CirVit from "../images/final-cv-win.jpg"


const cv = () => (
  <React.Fragment>
    
    <Layout>
      
      <SEO title="Cirriculum Vitae" />
      <p>Click to download the full file</p>
      <a href="https://drive.google.com/file/d/19ed0vvZSTFcXav2MYhGF93h99N4IhQlm/view?usp=sharing" className="bigger-content" title="Click to download">
        <img src={CirVit}></img>
      </a>
      
      
      <h4>Explore more</h4>
    </Layout>
    
    
    
    
  </React.Fragment>
  
)

  

  
    




export default cv
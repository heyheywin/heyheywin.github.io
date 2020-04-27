import React from "react"
import { Link } from "gatsby"
import Media from 'react-media'

import Layout from "../components/layout"
import SEO from "../components/seo"

import CirVit from "../images/winfield-fan-cv.jpg"



const Cv = () => {
  return(
    <div>
            <Media queries={{
                mobile: "(max-width: 599px)",
                desktop: "(min-width: 600px)", 
            }}>
            {matches => (
                <React.Fragment>
                    {matches.mobile && 
                    
                        <React.Fragment>
                        <Layout>
          
          <SEO title="Cirriculum Vitae" />
          <div className="main-container">
          <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`, width: `100%`, margin: `0 auto`}}>Click for full CV</h4>
            <a href="https://drive.google.com/file/d/10SmAYJOMOycJlrhrlTvh1MNtoM1A3AqT/view?usp=sharing"  className="img-responsive" title="Click to download">
              <img src={CirVit} className="bigger-content"></img>
            </a>         
          </div>
          
        </Layout>
                        </React.Fragment>}
                    {matches.desktop &&
                    <React.Fragment>
                    <div style={{display: `flex`, marginTop:`7vh`}} >
          <div style={{minWidth: 350, paddingLeft: `1em`}}>
              <Layout>
              
              <SEO title="Cirriculum Vitae" />
              
              </Layout>
          </div>
          
          <div style={{maxWidth:1000, padding: `4em 2em 2em 0em`, margin:`0 auto`, width:`0 auto`, }}>
          <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Click to Download full CV</h4>
            <a href="https://drive.google.com/file/d/19ed0vvZSTFcXav2MYhGF93h99N4IhQlm/view?usp=sharing"  className="img-responsive" title="Click to download">
              <img src={CirVit} className="bigger-content"></img>
             
            </a>  
          </div>
        </div>
                  </React.Fragment>}
                </React.Fragment>
            )}
            </Media>
        </div>
    );
}

// help




export default Cv
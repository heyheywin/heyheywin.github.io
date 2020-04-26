import React from "react"
import { Link } from "gatsby"
import Media from 'react-media'

import Layout from "../components/layout"
import SEO from "../components/seo"

import CirVit from "../images/winfield-fan-cv.jpg"
import useBreakpoint from '../components/breakpoint.js';


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
          <p>Click to download the full file</p>
          <a href="https://drive.google.com/file/d/19ed0vvZSTFcXav2MYhGF93h99N4IhQlm/view?usp=sharing"  className="img-responsive" title="Click to download">
            <img src={CirVit} className="bigger-content"></img>
          </a>  
        </Layout>
                        </React.Fragment>}
                    {matches.desktop &&
                    <React.Fragment>
                    <div style={{display: `flex`, marginTop:`7vh`}} >
          <div style={{minWidth: 350, paddingLeft: `2em`}}>
              <Layout>
              
              <SEO title="Cirriculum Vitae" />
              
              </Layout>
          </div>
          
          <div style={{maxWidth:1000, padding: `4em 2em 2em 0em`, margin:`0 auto`, width:`0 auto`, }}>
          <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Click to download the full file</h4>
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
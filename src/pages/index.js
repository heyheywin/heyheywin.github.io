import React from "react"
import { Link } from "gatsby"
import Media from 'react-media'


import Layout from "../components/layout"
import SEO from "../components/seo"

import LeWagon from "../images/lewagon.png"
import Ruby from "../images/ruby.svg"
import Smile from "../images/smile.png"
import Python from "../images/python.svg"
import ReactLogo from "../images/react.png"
import Mysql from "../images/mysql.svg"









const SecondPage = () => {
  
    return (
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
                    <SEO title="Home" />
                        <div className="main-container" style={{width: `80%`}}>
                        <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Tech curious</h4>
                       <p>> Self-taught developer with experience in Ruby, Python, React JS</p>
                       <p>> Curious about new technologies that impact the way we do business</p>
                       {/* <p>Expect full-stack support with a suite of languages such as Python, ReactJS, and SQL. </p> */}
                       <h4 style={{borderBottom: `1px solid #000`, padding: `3px 0`}}>Tax Professional with a background in Law</h4>
                       <p style={{padding:`0.5vh 0`}}> >Specialisation in M&A Tax and corporate tax structuring/efficiency</p>
                       <p style={{padding:`0.5vh 0`}}>> Durham Law (LLB) graduate with honours</p>
                      <p style={{padding:`0.5vh 0`}}>> Practical experience in Corporate IPO with Magic Circle firm in the Asia-Pacific</p>
                      {/* <p style={{padding:`0.5vh 0`}}>Familiar with Land and Conveyance Law in Hong Kong</p> */}
                    
                        </div>
                    
                     </Layout> 
                   </React.Fragment>}
                    {matches.desktop &&
                    <React.Fragment>
                    <div style={{display: `flex`, marginTop:`7vh`}} >
                      <div style={{minWidth: 350, paddingLeft: `1em`}}>
                          <Layout>
                          
                          <SEO title="Home" />
                          
                          </Layout>
                      </div>
                      
                      <div style={{maxWidth:1000, padding: `4em 2em 2em 0em`, margin:`0 auto`, width:`0 auto`}}>
                          <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Tech curious</h4>
                      <p>> Self-taught developer with experience in Ruby <img src={Ruby} alt='on rails' style={{height: 25}}></img>, Python and JS</p>
                      <p>> Curious about new technologies that impact the way we do business in the future</p>
                      <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Tax Professional with a background in Law</h4>
                      <p style={{padding:`0.5vh 0`}}>> Specialisation in M&A Tax and corporate tax structuring/efficiency</p>
                        <p style={{padding:`0.5vh 0`}}>> Durham Law (LLB) graduate with honours</p>
                      <p style={{padding:`0.5vh 0`}}>> Practical experience in Corporate IPO with Magic Circle firm in the Asia-Pacific</p>
                      </div>
                    </div>
                  </React.Fragment>}
                </React.Fragment>
            )}
            </Media>
        </div>
    );
}
      





  
    





  
    

export default SecondPage
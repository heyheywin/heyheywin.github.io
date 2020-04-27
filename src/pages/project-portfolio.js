import React from "react"
import { Link } from "gatsby"
import Media from 'react-media'


import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleSwiper from "../components/swiper"




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

                        <SEO title="Project Portfolio" />
                        <div className="main-container">
                        <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Project Portfolio</h4>
                        <SimpleSwiper></SimpleSwiper>
                        </div>
                        
                        </Layout> 
                        
                        </React.Fragment>
                   
                        }
                    {matches.desktop &&
                    <React.Fragment>
                    <div style={{display: `flex`, marginTop:`7vh`}} >
                      <div style={{minWidth: 350, paddingLeft: `1em`}}>
                          <Layout>
                          
                          <SEO title="Project Portfolio" />
                          
                          </Layout>
                      </div>
                      
                      <div style={{maxWidth:1000, padding: `4em 2em 2em 0`, width:`0 auto`, margin: `0 auto`,}}>
                      <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Project Portfolio</h4>
                          <SimpleSwiper></SimpleSwiper>
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
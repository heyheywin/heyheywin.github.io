import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleSwiper from "../components/swiper"
import useBreakpoint from '../components/breakpoint'



const SecondPage = (props) => {
  const point = useBreakpoint();
  if (window !== 'undefined'){
  
  if (point === 'mobile') {
    return (
      <React.Fragment>
    
       <Layout>
      
       <SEO title="Project Portfolio" />
        <SimpleSwiper></SimpleSwiper>
        </Layout> 
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div style={{display: `flex`, marginTop:`7vh`}} >
          <div style={{minWidth: 350, paddingLeft: `2em`}}>
              <Layout>
              
              <SEO title="Project Portfolio" />
              
              </Layout>
          </div>
          
          <div style={{maxWidth:1000, padding: `4em 2em 2em 0`, width:`0 auto`, margin: `0 auto`,}}>
          <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Project Portfolio</h4>
              <SimpleSwiper></SimpleSwiper>
          </div>
        </div>
      </React.Fragment>
    );  
  };
}
}



  
    

export default SecondPage

import React from "react"
import { Link } from "gatsby"
import Media from 'react-media'


import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleSwiper from "../components/swiper"
import useBreakpoint from '../components/breakpoint'
import LeWagon from "../images/lewagon.png"
import Ruby from "../images/ruby.svg"
import Smile from "../images/smile.png"
import Python from "../images/python.svg"
import ReactLogo from "../images/react.png"
import Mysql from "../images/mysql.svg"








const Landing = () => {
  
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
                    <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Tech curious</h4>
                       <p>Started on Ruby thanks to LeWagon <img src={LeWagon} alt='coding bootcamp' style={{height: 40}}></img> </p>
                       <p>Expect full-stack support with a suite of languages such as Python, ReactJS, and SQL. </p>
                       <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Avid student of the Law</h4>
                       <p>A recent Durham Law(LLB) graduate with honours with experience in Corporate Finance Law, as well as Land and Conveyance Law in Hong Kong. </p>
                    <SEO title="Home" />
                     </Layout> 
                   </React.Fragment>}
                    {matches.desktop &&
                    <React.Fragment>
                    <div style={{display: `flex`, marginTop:`7vh`}} >
                      <div style={{minWidth: 350, paddingLeft: `2em`}}>
                          <Layout>
                          
                          <SEO title="Home" />
                          
                          </Layout>
                      </div>
                      
                      <div style={{maxWidth:1000, padding: `4em 2em 2em 0em`, margin:`0 auto`, width:`0 auto`}}>
                          <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Tech curious</h4>
                      <p>> Started on Ruby <img src={Ruby} alt='on rails' style={{height: 40, paddingTop: `2vh`}}></img> thanks to LeWagon <img src={LeWagon} alt='coding bootcamp' style={{height: 40}}></img> </p>
                      <p>> I love web-development both in mobile and desktop and am not afraid to try new things!  <img src={Smile} alt='smiley' style={{height: 40}}></img></p>
                      <p>> Expect full-stack support with a suite of languages such as Python <img src={[Python]} alt='Py' style={{height: 50, paddingTop: `3vh`}}></img>  /  ReactJS<img src={ReactLogo} alt='React' style={{height: 60, paddingTop:`3vh`}}></img> /   MySQL<img src={Mysql} alt='sql' style={{height: 40, marginBottom: `0.6em`}}></img></p>
                      <h4 style={{borderBottom: `1px solid #000`, paddingBottom: `3px`}}>Avid student of the Law</h4>
                      <p style={{padding:`2vh 0`}}>> Recent Durham Law (LLB) graduate with honours</p>
                      <p style={{padding:`2vh 0`}}>> Practical experience in securities law with Magic Circle firm in the Asia-Pacific</p>
                      <p style={{padding:`2vh 0`}}>> Familiar with Land and Conveyance Law in Hong Kong</p>
                      </div>
                    </div>
                  </React.Fragment>}
                </React.Fragment>
            )}
            </Media>
        </div>
    );
}
      





  
    





  
    

export default Landing
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faWeixin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Modal } from "react-bootstrap"


import Header from "./header"
import face from "../images/face.png"
import "./layout.css"
import "../css/typography.css"
import Weixin from "../images/weixin.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import Favicon from "../images/favicon.png"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          image
        }
      }
    }
  `)

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <img src={Favicon} style={{visibility: `hidden`}}></img>
      <Link to="/" >
      <img src={face} alt="Profile Picture" className="my-face" ></img>
        
      </Link>
    
        <Header siteTitle={data.site.siteMetadata.title} className = "link"/>
      
        
        <div
          style={{
           
            width: `100%`,
          }}
        >
        <main>{children}</main>
        <footer> 
        <div style={{marginTop: `1rem`, paddingLeft: `2em`}}>
        <div className="links">
            <Link to="/" className = "link" activeClassName="active">About me</Link>
          </div>
          <div className="links">
            <Link to="/project-portfolio/" className = "link" activeClassName="active">Project Portfolio</Link>
          </div>
          <div className="links">
            <Link to="/cirriculum-vitae/" className = "link" activeClassName="active">Curriculum Vitae</Link>
          </div>
          <div className="links">
            <p style={{fontWeight: `700`, border: `1px solid black`, maxWidth:`150px`, padding:`.8em`, color: `#f7f7f7`, backgroundColor: `#111111`, display: `flex`, justifyContent:`center`}}>Contact me:</p>
          </div>
          </div>
          
          <div className="contact-container">
            <a href="https://www.linkedin.com/in/winfieldfan" id="contact-link"><FontAwesomeIcon icon={faLinkedin} className="contact fa"></FontAwesomeIcon></a>
            <a href="mailto:faefaehk@gmail.com" id="contact-link" title="faefaehk@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="contact fa"></FontAwesomeIcon></a>
          </div>
          <div className="contact-container">
          <a href="https://github.com/heyheywin/heyheywin.github.io" id="contact-link" title="View the repository for this site"><FontAwesomeIcon icon={faGithub} className="contact"></FontAwesomeIcon></a>
            <FontAwesomeIcon icon={faWeixin} className="contact" id="contact-link" onClick={handleShow}></FontAwesomeIcon>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                
                <Modal.Body><img src={Weixin} alt="Winfield826" className="contact"></img></Modal.Body>
                
              </Modal.Header>
            </Modal>
          </div>
          
          

         
        </footer>
        
      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

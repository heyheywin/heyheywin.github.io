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



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link to="/" className="big-content">
      <img src={face} alt="Profile Picture" className="my-face"></img>
        <Header siteTitle={data.site.siteMetadata.title} />
      </Link>
        
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
        <main>{children}</main>
        <footer> 
        <div className="links">
            <Link to="/"><p style={{color:`#007AFF`, margin:`0`}}>> About me</p></Link>
          </div>
          <div className="links">
            <Link to="/project-portfolio/"><p style={{color:`#007AFF`, margin:`0`}}> > Project Portfolio</p></Link>
          </div>
          <div className="links">
            <Link to="/cirriculum-vitae/"><p style={{color:`#007AFF`, margin:`0`}}>> Curriculum Vitae</p></Link>
          </div>
          <div className="links">
            <p style={{fontWeight: `700`}}>Contact me:</p>
          </div>
          
          <div className="contact-container">
            <a href="www.linkedin.com/in/winfieldfan" id="contact-link"><FontAwesomeIcon icon={faLinkedin} className="contact"></FontAwesomeIcon></a>
            <a href="mailto:faefaehk@gmail.com" id="contact-link" title="faefaehk@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="contact"></FontAwesomeIcon></a>
            <a href="https://github.com/heyheywin/heyheywin.github.io" id="contact-link" title="View the repository for this site"><FontAwesomeIcon icon={faGithub} className="contact"></FontAwesomeIcon></a>
            <FontAwesomeIcon icon={faWeixin} className="contact" onClick={handleShow}></FontAwesomeIcon>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                
                <Modal.Body><img src={Weixin} alt="Winfield826"></img></Modal.Body>
                
              </Modal.Header>
            </Modal>
            
          </div>
          
          

         
        </footer>
        
      </div>
      <div className="watermark">
            <p>Built on Gatsby</p>
            <p>© {new Date().getFullYear()}</p>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

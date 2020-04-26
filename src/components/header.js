import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
     
      marginBottom: `2rem`,
    }}
  >
    <div
      style={{
        margin: `0 30px`,
        maxWidth: 300,
        
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#191515`,
            textDecoration: `none`,
            fontFamily: `"Monteserrat", sans-serif`,
            
          }}
          className="big-content"
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

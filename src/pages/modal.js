import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
const Modal = () => (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <Link to={closeTo}>
              Close
            </Link>
          ) : (
            <header>
              <h1>
                Website Title
              </h1>
            </header>
          )}
  
          <h2>Modal Page</h2>
  
          <Link to="./cirriculum-vitae">Go back</Link>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
  
  export default Modal
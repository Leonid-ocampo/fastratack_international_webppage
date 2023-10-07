import React from "react"
import "./FooterStyles.css"

const Footer = () =>{
  return(
    <div className="Footer">
      <div className="top">
        
        <div>
          <a href="https://www.facebook.com/FTLJC/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
          <h2>CONTACT US</h2>
          <p>info@fasttrack-languages.com</p>
          <p>(201) 685 8220 - (718) 825 6598</p>
          <p>78 Erie St Jersey City, NJ 07302 EE. UU.</p>
          <p>"It is never too late to be what you might have been" –George Eliot</p>
      </div>
    </div>
  )
}

export default Footer;
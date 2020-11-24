import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className = "footer">
      <div className = "companyList">
        <p><b>Company</b></p>
          <ul>
            <li>About us</li>
            <li>Subscribe</li>
            <li>Careers</li>
            <li>Company Login</li>
          </ul>
      </div>
      <div className = "categoriesList">
        <p><b>Categories</b></p>
          <ul>
            <li>Romance</li>
            <li>Comedy</li>
            <li>Reality</li>
            <li>Documentary</li>
          </ul>
      </div>
      <div className = "email">
        <p><b>Want more? Join our weekly newsletter</b></p>
          <form className = "emailForm">
            <input type="email" placeholder="EMAIL ADDRESS"></input>
            <button>GO!</button>
          </form>
        <p><b>Connect</b></p>
        <p>Icon images will go here</p>
      </div>
    </footer>
  )
}

export default Footer;

import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className = "footer">
      <div className = "companyList">
        <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Subscribe</li>
            <li>Careers</li>
            <li>Company Login</li>
          </ul>
      </div>
      <div className = "categoriesList">
        <h4>Categories</h4>
          <ul>
            <li>Romance</li>
            <li>Comedy</li>
            <li>Reality</li>
            <li>Documentary</li>
          </ul>
      </div>
      <div className = "email">
        <h4>Want more? Join our weekly newsletter</h4>
        <input type="email" placeholder="email address"></input>
        <button>Go!</button>
      </div>
      <div className = "connect">
        <h4>Connect</h4>
      </div>
    </footer>
  )
}

export default Footer;

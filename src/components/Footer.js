import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className = "footer">
      <div className = "companyList">
        <p>Company</p>
          <ul>
            <li>About us</li>
            <li>Subscribe</li>
            <li>Careers</li>
            <li>Company Login</li>
          </ul>
      </div>
      <div className = "categoriesList">
        <p>Categories</p>
          <ul>
            <li>Romance</li>
            <li>Comedy</li>
            <li>Reality</li>
            <li>Documentary</li>
          </ul>
      </div>
      <div className = "email">
        <p>Want more? Join our weekly newsletter</p>
          <form className = "emailForm">
            <input type="email" placeholder="EMAIL ADDRESS"></input>
            <button>GO!</button>
          </form>
      </div>
      <div className = "connect">
        <p>Connect</p>
      </div>
    </footer>
  )
}

export default Footer;

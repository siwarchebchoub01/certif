import React from 'react'
import "./Footer.css"
function Footer() {
  return (
   <div> 
 
<div>
  
  <footer className="footer-distributed">
    <div className="footer-left">
    
      <p className="footer-links">
        <a href="#" className="link-1">Home</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </p>
      <p className="footer-company-name">TICKET MAGNET © 2015</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p><span>WEBSITE</span> GOMYCODE LAC1</p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>27312773</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p><a href="mailto:support@company.com">siwarchebchoub09@gmail.com</a></p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
         
       
      </p>
      
    </div>
  </footer>
</div>

</div>

  )
}

export default Footer
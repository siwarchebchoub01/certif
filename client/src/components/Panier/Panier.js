import React from 'react';
import  './Panier.css'
import { Link } from 'react-router-dom';
const Panier = () => {
  return (
    <div className=" panier ">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col"><h4><b>Shopping Cart</b></h4></div>
         
            </div>
          </div>    
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" alt="Shirt" /></div>
              <div className="col">
                <div className="row text-muted">Shirt</div>
                <div className="row">Cotton T-shirt</div>
              </div>
               
              <div className="col">€ 44.00  </div>
            </div>
          </div>
          <div className="row">
            {/* Repeat similar structure for other items */}
          </div>
           <div>
           <Link to={"/Pay"}><button className='passe'>Passer Au Paiement</button></Link>
          
           </div>
        </div>
       
      </div>
    </div>
  );
}

export default Panier;

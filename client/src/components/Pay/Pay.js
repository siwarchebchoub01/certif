import React from 'react'
import  './Pay.css'
function Pay() {
  return (
<div> 
  <section className="backy"  >
    <div className="custom-row d-flex justify-content-center">
      <div className="custom-col-md-10 custom-col-lg-8 custom-col-xl-5">
        <div className="custom-card rounded-3">
          <div className="custom-card-body p-4">
            <div className="custom-text-center mb-4">
               
              <h6 className='paye'>Custom Payment</h6>
            </div>
            <form action>
              <p className="custom">Custom Saved cards:</p>
              <div className="custom-d-flex flex-row align-items-center mb-4 pb-1">
                <img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                <div className="custom-flex-fill mx-3">
                  <div className="custom-form-outline">
                    <input type="text" id="customFormControlLgXc" className="form-control form-control-lg" defaultValue="**** **** **** 3193" />
                    <label className="form-label" htmlFor="customFormControlLgXc">Card Number</label>
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <div className="custom-d-flex flex-row align-items-center mb-4 pb-1">
                <img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" />
                <div className="custom-flex-fill mx-3">
                  <div className="custom-form-outline">
                    <input type="text" id="customFormControlLgXs" className="form-control form-control-lg" defaultValue="**** **** **** 4296" />
                    <label className="form-label" htmlFor="customFormControlLgXs">Card Number</label>
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <p className="fw-bold mb-4">Custom Add new card:</p>
              <div className="custom-form-outline mb-4">
                <input type="text" id="customFormControlLgXsd" className="form-control form-control-lg" defaultValue="Anna Doe" />
                <label className="form-label" htmlFor="customFormControlLgXsd">Cardholder's Name</label>
              </div>
              <div className="custom-row mb-4">
                <div className="custom-col-7">
                  <div className="custom-form-outline">
                    <input type="text" id="customFormControlLgXM" className="form-control form-control-lg" defaultValue="1234 5678 1234 5678" />
                    <label className="form-label" htmlFor="customFormControlLgXM">Card Number</label>
                  </div>
                </div>
                <div className="custom-col-3">
                  <div className="custom-form-outline">
                    <input type="password" id="customFormControlLgExpk" className="form-control form-control-lg" placeholder="MM/YYYY" />
                    <label className="form-label" htmlFor="customFormControlLgExpk">Expire</label>
                  </div>
                </div>
                <div className="custom-col-2">
                  <div className="custom-form-outline">
                    <input type="password" id="customFormControlLgcvv" className="form-control form-control-lg" placeholder="Cvv" />
                    <label className="form-label" htmlFor="customFormControlLgcvv">Cvv</label>
                  </div>
                </div>
              </div>
              <button className="btn btn-success btn-lg btn-block">Custom Add card</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>






    
  )
}

export default Pay

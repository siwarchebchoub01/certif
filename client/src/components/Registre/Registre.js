import React, { useState } from 'react'
import PHOTO from './TicketMagnet1.png'
import "./Registre.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/Action/actionUser';
 

function Registre() {
  const [newname, setname] = useState("");
  const [newemail, setemail] = useState("");
  const [newpassword, setpassword] = useState("");
  const [img, setimg] = useState();
  
  const navigate = useNavigate();
  const Disptach=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hi");
    if(img==null) 
    {alert(" please add your photo") }

  
    const data = new FormData();
   
     data.append("email", newemail)
     data.append("password",newpassword)
      data.append("name",newname)
     data.append("file",img)
 
     Disptach(addUser(data, navigate))
  }

  return (
    <div  className=" register  " > 


    <div className="container py-5  ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card card_register   rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6 register-body   ">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                  <img src={PHOTO} className='logo'/>
                    <h4 className="mt-1 mb-5 pb-1">We are TicketMagnet Team</h4>
                  </div>
                  <form>
                
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setname(e.target.value)} type="text" id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                      <label className="form-label" htmlFor="form2Example11">Username</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input  onChange={(e) => setemail(e.target.value)} type="email" id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                      <label className="form-label" htmlFor="form2Example11">Email</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input  onChange={(e) => setpassword(e.target.value)} type="password" id="form2Example22" className="form-control" />
                      <label className="form-label" htmlFor="form2Example22">Password</label>
                    </div>
                     
                    <div className="form-outline mb-4">
                      <input  onChange={(e) => setimg(e.target.files[0])} type="file" id="form2Example22" className="form-control" />
                      <label className="form-label" htmlFor="form2Example22">image</label>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">

                      
                        <button  onClick={handleSubmit}   className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">register
                        </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
      </div>
  )
}

export default Registre
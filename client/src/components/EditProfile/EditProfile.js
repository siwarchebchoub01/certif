import React from 'react'
import './EditProfile.css';
function EditProfile() {
  return (
 <div className="container rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="etat3">Edogaru</span><span className="etat3">edogaru@mail.com.my</span><span> </span></div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-right">Profile Settings</h3>
        </div>
        <div className="row mt-2">
          <div className="col-md-6"><label className="etat5">Name</label><input type="text" className="etat"    /></div>
          <div className="col-md-6"><label className="etat5">Surname</label><input type="text" className="etat"   /></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12"><label className="etat5">Mobile Number</label><input type="text" className="etat"   /></div>
           
          <div className="col-md-12"><label className="etat5">Email </label><input type="text" className="etat"   /></div>
         
        </div>
       
        <div className="mt-5 etat1"><button className="BOUTTONS" type="button">Save Profile</button></div>
      </div>
    </div>
     
  </div>
</div>

  )
}

export default EditProfile
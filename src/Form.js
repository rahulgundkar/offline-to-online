import React from 'react'
//bootstarp files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Form.css'
import Navbar from './Navbar';
function Form() {
  return (
    <>    
    <Navbar/> 
    <form class="row g-3 bg-light m-4" action="./result.html" method="get">
<span className='heading-form'> Registration Form</span>
<div class="col-md-6">
    <label for="inputshopname" class="form-label">Name of the Shop</label>
    <input type="name" class="form-control" id="inputshopname" placeholder="Enter Shop Name" />
  </div>
<div class="col-md-6">
  <label for="inputname" class="form-label">Owner Name</label>
  <input type="name" class="form-control" id="inputname" placeholder="Enter Name" />
</div>
<div class="col-md-6">
    <label for="inputemailid" class="form-label">Email Id</label>
    <input type="email" class="form-control" id="inputemailname" placeholder="Enter email id"/ >
  </div>
<div class="col-md-6" id="nametag">
    <label for="inputnumber" class="form-label">Mobile No.</label>
    <input type="number" class="form-control" id="inputnumber" placeholder="Enter Mobile No." />
  </div>
  <div class="col-md-6" id="nametag">
    <label for="inputAlternatenumber" class="form-label">Alternate Mobile No.</label>
    <input type="number" class="form-control" id="inputAlternatenumber" placeholder="Enter Mobile No." />
  </div>
<div class="col-md-6">
  <label for="inputPassword4" class="form-label">Password</label>
  <input type="password" class="form-control" id="inputPassword4"/>
</div>
<div class="col-md-6" id="nametag">
    <label for="inputid" class="form-label">UPI ID</label>
    <input type="id" class="form-control" id="inputid" placeholder="Enter Upi Id" />
  </div>
<div class="col-12">
  <label for="inputAddress1" class="form-label">Address 1</label>
  <input type="text" class="form-control" id="inputAddress1" placeholder="1234 Main St"/>
</div>
<div class="col-12">
  <label for="inputAddress2" class="form-label">Address 2</label>
  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
</div>
<div class="col-md-6">
  <label for="inputCity" class="form-label">City</label>
  <input type="text" class="form-control" id="inputCity"/>
</div>
<div class="col-md-4">
  <label for="inputState" class="form-label">State</label>
  <select id="inputState" class="form-select">
    <option selected>Choose...</option>
    <option>Andhra Pradesh</option>
    <option>Arunachal Pradesh</option>
    <option>Assam</option>
    <option>Bihar</option>
    <option>Chattisgarh</option>
    <option>Goa</option>
    <option>Gujrat</option>
    <option>Haryana</option>
    <option>Himachal Pradesh</option>
    <option>Jharkhand</option>
    <option>Karnataka</option>
    <option>Kerala</option>
    <option>Madhya Pradesh</option>
    <option>Maharashtra</option>
    <option>Manipur</option>
    <option>Meghalaya</option>
    <option>Mizoram</option>
    <option>Nagaland</option>
    <option>Odisha</option>
    <option>Punjab</option>
    <option>Rajasthan</option>
    <option>Sikkim</option>
    <option>Tamil Nadu</option>
    <option>Telangana</option>
    <option>Tripura</option>
    <option>Uttar Pradesh</option>
    <option>Uttarakhand</option>
    <option>West Bengal</option>
  </select>
</div>
<div class="col-md-2">
  <label for="inputZip" class="form-label">Zip Code</label>
  <input type="text" class="form-control" id="inputZip"/>
</div>
<div class="col-12">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck"/>
    <label class="form-check-label" for="gridCheck">
      The detail above is correct do you agree the statemate;
    </label>
  </div>
</div>
<div class="col-12">
  <button type="submit" class="btn btn-dark submit" onclick="uesrinput(),pageready()">Submit</button>
</div>
</form>
</>

  )
}

export default Form
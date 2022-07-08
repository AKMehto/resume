import React from 'react'
import './navbar.css'
export default function navbar(props) {

const image_handler=()=>{
  alert("The Form has been Submitted.");
  document.body.src = 'profile';
  
}

const toggle=()=>{
   props.change_mode();
  console.log(props.darkmode);
}

  return (
    <div className="sticky"><nav className={`navbar navbar-expand-lg  bg-${props.darkmode}`}>
    <div className="container-fluid">
      <a className="navbar-brand text-info person-name" href="#">A.K METHO</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-list" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-item">
          <li className="nav-item">
            <a className="nav-link color_white" aria-current="page" href="#" >Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link color_white" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle color_white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Project
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item "  href="#dice">Dice</a></li>
              <li><a className="dropdown-item" href="#">Mock Alloatment</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">File Sharing</a></li>
              <li><a className="dropdown-item" href="#">Message</a></li>
              <li><a className="dropdown-item" href="#">E-Mail</a></li>
              <li><a className="dropdown-item" href="www">Library-Management</a></li>
            </ul>
          </li>
       
        </ul>
        <div class="form-check form-switch">
  <input onClick={toggle} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
  
</div>
<button className='btn' onClick={image_handler} >
  <div className="text-center">

<img src="profile.jpg" width="30vw"  height="30vh" class="rounded" alt="no" />
</div>
  </button>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav></div>
  )
}

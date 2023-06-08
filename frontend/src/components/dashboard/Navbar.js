import logo from '../../assets/logo.png';
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{background:'#202F2C'}} className=" navbar navbar-expand-sm d-flex justify-content-center w-100 px-4">
        <div className="d-flex justify-content-between w-100">
            <img style={{height:'3rem'}} src={logo}/>
            <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="fa-solid fa-bars"/></span>
            </button>
        </div>
        
        <div className="collapse navbar-collapse w-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav navLinks w-100 menu gap-5">
                <Link to='/' className="text-decoration-none w-auto d-flex gap-2 align-items-center" >
                    <i className="fa-regular fa-circle-question"></i>
                    <span className="texts">Soporte</span>
                </Link>
                <Link to='/' className="text-decoration-none w-auto d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-shop"></i>
                    <span className="texts">Tienda</span>
                </Link>
                <Link to='/' className="text-decoration-none w-auto d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-user"></i>
                    <span className="texts">Perfil</span>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
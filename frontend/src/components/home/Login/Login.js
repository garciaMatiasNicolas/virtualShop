import React from 'react';
import LoginForm from './LoginForm';
import img from '../../../assets/4530199.jpg';
import logo from '../../../assets/logo.png';

const Login = () => {
  return (
    <div>
      <div className="row w-100">
        <div style={{background:'#EADCCC', boxShadow:'0 0 11px rgba(0,0,0,.25)'}} className="col-12 col-md-4 d-flex justify-content-start flex-column align-items-end pt-5">
          <div className='w-100 d-flex justify-content-center gap-5 flex-column align-items-center p-4'>
            <div className='d-flex justify-content-center align-items-center'>
                <img style={{width: '350px'}} src={logo}/>
            </div>
            <h1 className='subtitles w-100' style={{color:'#22715E', fontSize:'2rem', maxWidth:'325px'}}>Gestiona tu tienda</h1>
          </div>
          <LoginForm/>
        </div>
        <div className="d-flex justify-content-center align-items-center col col-md-8">
              <img className='w-75 h-100' src={img} />
        </div>
      </div>
    </div>
  )
}

export default Login


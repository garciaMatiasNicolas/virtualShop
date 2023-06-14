import React, { useContext, useState } from 'react'
import axios from 'axios';
import { NavContext } from '../../context/contextNav';

const SignInForm = () => {

    const {setComponent} = useContext(NavContext);

    const signIn = () => {
        axios({
            method: 'post',
            data: data,
            withCredentials: true,
            url: 'http://localhost:8080/signin'
        }) 
        .then( res => console.log(res));
    
    } // Fetch the API //

    const [data, setData] = useState({fullname: "", email:"", dni:"", store:"", password:""}); // Save the data from the Form //

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    } // Get the data from the inputs //
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    } // prev default action of the Form //
  
    return (
    <div className='mt-2 w-100'>
        <form onSubmit={handleSubmit} className="animation d-flex flex-column justify-content-between align-items-center">

            <div className="form-floating w-75 mb-2">
                <input value={data.fullname} onChange={handleInput} type="text" className="form-control subtitles fs-6" placeholder="fulname" name="fullname" autoComplete="off"/>
                <label className="texts text-black fs-6" htmlFor="fullname">Nombre completo</label>
            </div>

            <div className="form-floating w-75 mb-2">
                <input value={data.email} onChange={handleInput} type="email" className="form-control subtitles fs-6" placeholder="email" name="email" autoComplete="off"/>
                <label className="texts text-black fs-6" htmlFor="email">Email</label>
            </div>

            <div className="form-floating w-75 mb-2">
                <input value={data.dni} onChange={handleInput} type="number" className="form-control subtitles fs-6" placeholder="dni" name="dni" autoComplete="off"/>
                <label className="texts text-black fs-6" htmlFor="dni">DNI</label>
            </div>

            <div className="form-floating w-75 mb-2">
                <input value={data.store} onChange={handleInput} type="text" className="form-control subtitles fs-6" placeholder="store" name="store" autoComplete="off"/>
                <label className="texts text-black fs-6" htmlFor="store">Nombre de tu tienda</label>
            </div>
            
            <div className="form-floating w-75">
                <input value={data.password} onChange={handleInput} type="password" className="form-control subtitles fs-6" placeholder="password" name="password" autoComplete="off"/>
                <label className="texts text-black fs-6" htmlFor="password">Contraseña</label>
            </div>

            <button type="button" onClick={signIn} className="subtitles fs-6 w-75 rounded mt-3 ">Registrate</button>
            
            <p className="d-flex justify-content-center align-items-center gap-2 mt-3 w-100 subtitles text-black">Ya creaste tu tienda?<a className="subtitles" onClick={()=>{setComponent('logIn')}} style={{color:'#22715E', cursor:'pointer'}}>Ingresa</a> </p>
        </form>
    </div>
  )
}

export default SignInForm
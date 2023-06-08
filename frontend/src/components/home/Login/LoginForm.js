import React, { useState } from 'react'
import '../../styles/home/Login.css'
import {  useNavigate } from 'react-router-dom';

const LoginForm = () => {
    
    const [data, setData] = useState({email:"", password:""});

    const [signIn, setSignIn] = useState(false);

    const navigate = useNavigate();

   /* const returnData = () => {
        axios({
            method: 'post',
            data: data,
            withCredentials: true,
            url: 'http://localhost:8080/user/log-in'
        }) 
        .then( res => res.data.status === 'error' ?    Swal.fire({title: 'Error!', text: 'Contraseña y/o mail incorrectos', icon: 'error',confirmButtonText: 'Reintentar'}) : navigate(`/user/${res.data.userId}`))
    
    };*/

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="mt-5 w-100">
            { signIn == false ? 
                <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-between align-items-center">
                    <div className="form-floating w-75 mb-2">
                        <input value={data.email} onChange={handleInput} type="email" className="form-control subtitles fs-6" placeholder="email" name="email" autoComplete="off"/>
                        <label className="texts text-black fs-6" htmlFor="email">Email</label>
                    </div>
                    
                    <div className="form-floating w-75">
                        <input value={data.password} onChange={handleInput} type="password" className="form-control subtitles fs-6" placeholder="password" name="password" autoComplete="off"/>
                        <label className="texts text-black fs-6" htmlFor="password">Contraseña</label>
                    </div>

                    <button type="button" className="subtitles fs-6 w-75 rounded mt-3 ">Ingresa a tu shop</button>
                    
                    <p className="d-flex justify-content-center align-items-center gap-2 mt-3 w-100 subtitles text-black">No tienes cuenta?<a className="subtitles" onClick={()=>{setSignIn(true)}} style={{color:'#22715E', cursor:'pointer'}}>Registarte</a> </p>
                </form>
            :
            
            <form onSubmit={handleSubmit} className={signIn == true ? "animation d-flex flex-column justify-content-between align-items-center" : "d-flex flex-column justify-content-between align-items-center"}
            >

                <div className="form-floating w-75 mb-2">
                    <input value={data.email} onChange={handleInput} type="email" className="form-control subtitles fs-6" placeholder="email" name="email" autoComplete="off"/>
                    <label className="texts text-black fs-6" htmlFor="email">Email</label>
                </div>

                <div className="form-floating w-75 mb-2">
                    <input value={data.email} onChange={handleInput} type="email" className="form-control subtitles fs-6" placeholder="email" name="email" autoComplete="off"/>
                    <label className="texts text-black fs-6" htmlFor="email">Email</label>
                </div>
                
                <div className="form-floating w-75">
                    <input value={data.password} onChange={handleInput} type="password" className="form-control subtitles fs-6" placeholder="password" name="password" autoComplete="off"/>
                    <label className="texts text-black fs-6" htmlFor="password">Contraseña</label>
                </div>

                <button type="button" className="subtitles fs-6 w-75 rounded mt-3 ">Registrate</button>
                
                <p className="d-flex justify-content-center align-items-center gap-2 mt-3 w-100 subtitles text-black">Ya creaste tu tienda?<a className="subtitles" onClick={()=>{setSignIn(false)}} style={{color:'#22715E', cursor:'pointer'}}>Ingresa</a> </p>
            </form>
        }
        </div>
    )
}


export default LoginForm
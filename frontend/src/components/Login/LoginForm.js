import React, { useContext, useState } from 'react'
import { NavContext } from '../../context/contextNav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const { setComponent } = useContext(NavContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        const response = await axios.post('http://localhost:8080/login', { email, password });

        if (response.data.result == 'succed') {
            const token = response.data.token;
            // Almacenar el token en el almacenamiento local (localStorage)
            localStorage.setItem('token', token);
            // Obtener el nombre de la tienda y pasarlo por query params
            let store = response.data.store;
            // Actualizar el estado de inicio de sesión
            navigate(`/dashboard/${store}`);
        } else {
            console.log(response.data);
        }
    };
  
    const handleSubmit = e => {
      e.preventDefault();
    };

    return (
        <div className="mt-2 w-100">
            <form onSubmit={handleSubmit} className="animation d-flex flex-column justify-content-between align-items-center">
                <div className="form-floating w-75 mb-2">
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control subtitles fs-6" placeholder="email" name="email" autoComplete="off"/>
                    <label className="texts text-black fs-6" htmlFor="email">Email</label>
                </div>
                    
                <div className="form-floating w-75">
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control subtitles fs-6" placeholder="password" name="password" autoComplete="off"/>
                    <label className="texts text-black fs-6" htmlFor="password">Contraseña</label>
                </div>

                <button type="submit" onClick={()=>{handleLogin(email, password)}} className="subtitles fs-6 w-75 rounded mt-3 ">Ingresa a tu shop</button>
                    
                <p className="d-flex justify-content-center align-items-center gap-2 mt-3 w-100 subtitles text-black">No tienes cuenta?<a className="subtitles" onClick={()=>{setComponent('signIn')}} style={{color:'#22715E', cursor:'pointer'}}>Registarte</a> </p>
            </form>
        </div>
    )
}


export default LoginForm
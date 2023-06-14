import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavContext, Provider } from './context/contextNav';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/routes/PrivateRoute';

const App = () => {

  const {setLoggedIn, loggedIn} = useContext(NavContext)
  /*useEffect(() => {
    // Verificar si hay un token almacenado en el localStorage al cargar la aplicación
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);*/

  const handleLogout = () => {
    // Eliminar el token del almacenamiento local (localStorage)
    localStorage.removeItem('token');

    // Actualizar el estado de inicio de sesión
    setLoggedIn(false);
  };

  return (
    <Provider>
      {console.log(loggedIn)}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path='/dashboard/:store' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

/*const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Dashboard = ({ handleLogout }) => {
  useEffect(() => {
    // Realizar la solicitud para obtener los productos al cargar el Dashboard
    const getProducts = async () => {
      try {
        // Obtener el token almacenado en el localStorage
        const token = localStorage.getItem('token');

        // Configurar los encabezados de la solicitud con el token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Realizar la solicitud al backend para obtener los productos
        const response = await axios.get('/api/products', config);
        const products = response.data;

        // Manejar los productos obtenidos
        console.log(products);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        // Manejar el error al obtener los productos
      }
    };

}*/
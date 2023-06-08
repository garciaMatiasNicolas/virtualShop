import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import { Provider } from './context/contextNav';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;

import React, { useContext, useState } from 'react';
import '../styles/dashboard/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faShoppingCart, faCreditCard, faChartBar, faPalette, faBoxes, faQuestionCircle, faUserPlus, faCog, faTags, faGlobe, faChartLine, faUsers, faShareAlt, faTrash, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import { NavContext } from '../../context/contextNav';

const Sidebar = () => {
  const {setNavValue} = useContext(NavContext);
  
  const [isTiendaOpen, setIsTiendaOpen] = useState(false);

  const handleTiendaClick = () => {
    setIsTiendaOpen(!isTiendaOpen);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" onClick={handleTiendaClick}>
            <FontAwesomeIcon icon={faStore} />
            TIENDA
            {isTiendaOpen ? (
              <FontAwesomeIcon icon={faAngleUp} className="arrow-icon ms-2" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} className="arrow-icon ms-2" />
            )}
          </a>
          {isTiendaOpen && (
            <ul className="sub-menu">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCog} />
                  METODOS DE ENVIO
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTags} />
                  SECCIONES
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faGlobe} />
                  DOMINIO
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faChartLine} />
                  VENTAS
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faUsers} />
                  CLIENTES
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faShareAlt} />
                  REDES SOCIALES
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTrash} />
                  ELIMINAR TIENDA
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={()=>{setNavValue('products')}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            PRODUCTOS
          </a>
        </li>
        <li>
          <a href="#" onClick={()=>{setNavValue('payments')}}>
            <FontAwesomeIcon icon={faCreditCard} />
            METODOS DE PAGO
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faChartBar} />
            INFORMES
          </a>
        </li>
        <li>
          <a href="#" onClick={()=>{setNavValue('design')}}>
            <FontAwesomeIcon icon={faPalette} />
            DISENO
          </a>
        </li>
        <li>
          <a href="#" onClick={()=>{setNavValue('stock')}}>
            <FontAwesomeIcon icon={faBoxes} />
            CONTROL DE STOCK
          </a>
        </li>
        <li>
          <a href="#" onClick={()=>{setNavValue('help')}}>
            <FontAwesomeIcon icon={faQuestionCircle} />
            AYUDA
          </a>
        </li>
        <li>
          <a href="#" onClick={()=>{setNavValue('suscription')}}>
            <FontAwesomeIcon icon={faUserPlus} />
            MI SUSCRIPCION
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

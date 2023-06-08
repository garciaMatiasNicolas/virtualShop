import React, { useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Index from './Index';
import { NavContext } from '../../context/contextNav';
import Design from './design/Design';
import Help from './help/Help';
import Payments from './payments/Payments';
import Products from './products/Products';
import Stock from './stock/Stock';
import Store from './store/Store';
import Suscription from './suscription/Suscription';

const Dashboard = () => {
  const {navValue} = useContext( NavContext );
  let component;
  if(navValue == '') component = <Index/>;
  if(navValue == 'design') component = <Design/>;
  if(navValue == 'help') component = <Help/>;
  if(navValue == 'payments') component = <Payments/>;
  if(navValue == 'products') component = <Products/>;
  if(navValue == 'stock') component = <Stock/>;
  if(navValue == 'store') component = <Store/>;
  if(navValue == 'suscription') component = <Suscription/>;

  return (
    <div className='d-flex flex-column justify-content-between '>
      <Navbar/>
      <div className='d-flex align-items-center justify-content-between'>
        <Sidebar/>
        {component}
      </div>
    </div>
  )
}

export default Dashboard
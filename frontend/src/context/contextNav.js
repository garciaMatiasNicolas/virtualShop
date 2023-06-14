import { createContext, useState } from "react";

const NavContext = createContext([]);


const Provider = ({children}) => {
    const [navValue, setNavValue] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [component, setComponent] = useState('logIn');


    const context = {
        navValue, // For sidebar
        setNavValue, // For sidebar
        component, // For login
        setComponent, // For login 
        loggedIn,
        setLoggedIn
    }

    return(
        <NavContext.Provider value={context}>
            {children}
        </NavContext.Provider>
    )
}


export { Provider, NavContext };
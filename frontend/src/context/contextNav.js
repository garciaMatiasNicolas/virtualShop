import { createContext, useState } from "react";

const NavContext = createContext([]);


const Provider = ({children}) => {
    const [navValue, setNavValue] = useState('');
    
    const context = {
        navValue,
        setNavValue
    }

    return(
        <NavContext.Provider value={context}>
            {children}
        </NavContext.Provider>
    )
}


export { Provider, NavContext };

import { useState } from "react";
import { createContext } from "react";

const AppContext =  createContext();  

const AppProvider =({children})=>{
    const [isDark,setIsDark] = useState(false);
    const toggleDarkMode = () => {
        setIsDark((prevMode) => !prevMode);
      };

    return(
        <AppContext.Provider value={{isDark,toggleDarkMode}} >
        {children}
        </AppContext.Provider>
    )
}

export{AppContext,AppProvider}
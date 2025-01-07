import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () =>{
    return useContext(ThemeContext);
}

export const Provider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const switchTheme = () => {
        setTheme((prevTheme) => {
            if(prevTheme === 'light'){
                return 'dark';
            }
            return 'light';
        });
    }

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

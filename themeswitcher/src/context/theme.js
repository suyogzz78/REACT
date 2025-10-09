import { createContext,useContext } from "react";
const ThemeContext = createContext({
    themeMode: "light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export default ThemeContext;

import React ,{ useState} from "react";

export const Context = React.createContext();

export default function ContextSelect({children}){
    let [state,setatate] = useState(0)
    

    return <>
        <Context.Provider value={[state,setatate]}>
            {children}
        </Context.Provider>
    </>
}
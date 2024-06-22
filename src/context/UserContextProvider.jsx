import { useState } from "react";
import { createContext } from "react"

const userContext=createContext();

const UserContextProvider = (props) => {

    const [showHide, setShowHide] = useState(true);

    const [users,setUsers]=useState([
        {id:1,name:"manas"},
        {id:2,name:"liza"},
        {id:3,name:"rupa"},
    ]);

  return (
    <userContext.Provider value={{
        users,
        showHide,
        setActive:()=> setShowHide(!showHide),
        setUsers
    }}>
        {props.children}
    </userContext.Provider>
    )
}

export {UserContextProvider,userContext};
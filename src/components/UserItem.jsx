import { useContext, useState } from "react";
import { userContext } from "../context/UserContextProvider";



const UserItem = () => {
  
  const context=useContext(userContext);
  const [userName, setUserName] = useState("");

  const onAddNewUser = () =>{
    if(userName.trim() =="") return;
    context.setUsers((prev)=>{
      return [...prev,{
        id:context.users.length,
        name:userName
      }]
    })

    setUserName("");

  }

  return (
    <>
      <h1>Users list</h1>
      {
        context.showHide && (
          context.users.map((item,index)=>(
          <h3 key={index}>{item.name}</h3>
        ))
        )
      }
      <hr />
      <button onClick={context.setActive}>Toggle Users</button>
      <hr />
      <h1>Add new Users</h1>
      <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <button onClick={onAddNewUser}>Add</button>

    </>
  )
}

export default UserItem;
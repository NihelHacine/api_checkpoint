import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Userlist() {
    const [users, setusers] = useState([]);
    useEffect(() => {
        try {
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{setusers(res.data)});  
        } catch (error) {
            console.log(error)
        }
     
    }, [])
  return (
    <div>
       {users?users.map((el)=><div>
        <h1>{el.name}</h1>
        <h3>{el.email}</h3>
       </div>):<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt=""  />}
    </div>
  )
}

export default Userlist
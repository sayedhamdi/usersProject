import React from "react";
import UsersList from "../../components/UsersList/UsersList"

export default function UsersPage(){
    const [users,setUsers] = React.useState([]);
    React.useEffect(async ()=>{
        console.log("houni bech n'affichi el data")
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        //nestana fi reponse mel serveur
        console.log(response)
        //nestana fel data 
        const data = await response.json();
        setUsers(data)
    
    },[])
    return (
        <div >
            <h1>Users Page</h1>
            <UsersList users={users} />
        </div>
    )
}
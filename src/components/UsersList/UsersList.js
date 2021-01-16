import React from "react";
import "./UsersList.styles.css"
import {Link} from "react-router-dom"
export default function UsersList({users}){
    return (
    <div className="users-list"> 
        {users.map((user)=>{
            return (
               <User key={user.id} user={user} />
            )
        })}
    </div>
    )
}

function User({user}){
    return (
        <div className="user">
            <div> Name : {user.name } </div>
            <div> Emai : {user.email } </div>
            <div> <Link to={`/user/${user.id}`} >go to my page</Link> </div>
        </div>
    )
}

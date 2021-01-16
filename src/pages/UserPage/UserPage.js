import React from "react";

import {useParams} from "react-router-dom";

export default function UserPage(){
    const [user,setUser] = React.useState({})
    const [loading,setLoading] = React.useState(true)
    const [error,setError] = React.useState(false)
    const {id} = useParams();
    React.useEffect(async ()=>{
        console.log("houni bech n'affichi el data")
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        //nestana fi reponse mel serveur
        console.log(response)
        //nestana fel data 
        const data = await response.json();
        console.log(data);
        
        /*if (!user){
            setError(true)
        }*/
        setUser(data);
        setLoading(false)
    },[])
    /*
    if (error){
        return <div>error Couldn't load the user ! :'(</div>
    }
    */
    if (loading){
        return <div>Loading...</div>
    }
   
    return (
        <div>
            <h1>Hello {user.name}</h1>
            <img src="https://loremflickr.com/320/240" alt="cat image"/>
            <div> {user.email }</div>
            <div> {user.username }</div>
            <div> {user.phone }</div>
            <div><a target="_blank" href={user.website}>Go to my website </a></div>
        </div>
    )
}
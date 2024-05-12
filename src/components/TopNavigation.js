import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

function TopNavigation() {
    let navigate = useNavigate();

let storeObj = useSelector((store)=>{
 return store;
})

useEffect(()=>{
if(storeObj && storeObj.loginDetails && storeObj.loginDetails.email){

}else{
navigate("/");
}
},[])
  return (
    <div>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
            <NavLink to="/editprofile">EditProfile</NavLink>
            <NavLink to="/leaves">Leaves</NavLink>
            <NavLink to="/" onClick={()=>{
              localStorage.clear();
            }}>SignOut</NavLink>

        </nav>
    </div>
  )
}

export default TopNavigation
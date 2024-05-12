import React from 'react'
import { useSelector } from 'react-redux'
import TopNavigation from './TopNavigation';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  let storeObj = useSelector((store)=>{
    console.log(store);
return store;
  });

  let deleteProfileFromServer = async()=>{

 let dataToSend = new FormData();
 dataToSend.append("email",storeObj.loginDetails.email);

 let reqOptions= {
  method:"DELETE",
  body:dataToSend,
 };

let  JSONData = await fetch("http://localhost:1403/deleteProfile",reqOptions);

let JSOData =  await JSONData.json();
alert(JSOData.msg);
if(JSOData.status="Success"){
navigate("/");
}

 console.log(JSOData);
  };
  return (
    <div>
     <TopNavigation/>
        <h1>Home</h1>
        <h2>Welcome {storeObj.loginDetails.firstName} {" "} {storeObj.loginDetails.lastName}</h2>
        <br></br>
        <img className='profilePic' src={`http://localhost:1403/${storeObj.loginDetails.profilePic}`}></img>
        <div>
          <button onClick={()=>{
            deleteProfileFromServer();
          }}>
            Delete Profile
          </button>
        </div>
    </div>
  )
}

export default Home
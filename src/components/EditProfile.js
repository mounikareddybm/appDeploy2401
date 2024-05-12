import React, { useEffect, useRef, useState } from 'react'
import TopNavigation from './TopNavigation';
import { useSelector } from 'react-redux';

function EditProfile() {

let firstNameInputRef = useRef();
let lastNameInputRef = useRef();
let ageInputRef = useRef();
let emailInputRef = useRef();
let passwordInputRef = useRef();
let mobileNoInputRef = useRef();
let profilePicInputRef = useRef();

let [profile,setProfile] = useState("./images/noImage2.png");

let storeObj = useSelector((store)=>{
return store;
})

useEffect(()=>{
firstNameInputRef.current.value = storeObj.loginDetails.firstName;
lastNameInputRef.current.value = storeObj.loginDetails.lastName;
ageInputRef.current.value = storeObj.loginDetails.age;
emailInputRef.current.value = storeObj.loginDetails.email;
mobileNoInputRef.current.value = storeObj.loginDetails.mobileNo;
setProfile(`http://localhost:1403/${storeObj.loginDetails.profilePic}`);

},[]);

let updateDataToServerFD =  async ()=>{
   
    let dataToSend = new FormData();
      dataToSend.append("firstName",firstNameInputRef.current.value);
      dataToSend.append("lastName",lastNameInputRef.current.value);
      dataToSend.append("age",ageInputRef.current.value);
      dataToSend.append("email",emailInputRef.current.value);
      dataToSend.append("password",passwordInputRef.current.value);
      dataToSend.append("mobileNo",mobileNoInputRef.current.value);

      for(let i = 0;i<profilePicInputRef.current.files.length;i++){
        dataToSend.append("profilePic",profilePicInputRef.current.files[i]);
      }
      
   let reqOptions = {
    method:"PUT",
    body:dataToSend,
   };

   let JSONData =  await fetch("http://localhost:1403/updateProfile",reqOptions);

   let JSOData = await JSONData.json();
   alert(JSOData.msg);
   console.log(JSOData);

};


  return (
    <div>
        <TopNavigation/>
        <form>
            <h2>Edit Profile</h2>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='number'ref={ageInputRef}></input>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef} readOnly></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Mobile No</label>
                <input ref={mobileNoInputRef}></input>
            </div>
            <div>
                <label>Profile Pic</label>
                <input ref={profilePicInputRef} type='file'  
                onChange={(eventObj)=>{
                    setProfile(URL.createObjectURL(eventObj.target.files[0]));

                }}></input>
                <br></br>
                <img className='image' src={profile}></img>
            </div>
            <div>
               <button   type="button" onClick={()=>{
                updateDataToServerFD();
               }}>Update Profile</button>
            </div> 
        </form>

    </div>
  )
}

export default EditProfile
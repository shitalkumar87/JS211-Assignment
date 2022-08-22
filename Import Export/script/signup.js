import { navbar } from "./navbar.js";

 document.getElementById("navbar").innerHTML=navbar()
   
 let submit=document.getElementById("submit")
 submit.onclick=()=>{
    register(event)
 }
 let register=async(e)=>{
       e.preventDefault()
    let data={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
    }

     
      
     
    let res= await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
       
     method:"POST",
      body:JSON.stringify(data),

    headers:
    {
        'Content-Type':'application/json'
    },
    });

     let result=await res.json()
     console.log(result)
      if(result.error==false){
        alert("Signup Succesfull")
        window.location.href="login.html"
      }

      if(result.error==true){

        alert("Registration failed, user already exists")
        window.location.href="login.html"
      }
    //  

 }
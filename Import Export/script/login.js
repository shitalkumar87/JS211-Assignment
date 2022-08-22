import { navbar } from "./navbar.js";

 document.getElementById("navbar").innerHTML=navbar()


 let submit=document.getElementById("submit")
 submit.onclick=()=>{
    login(event)
 }

 let login=async(e)=>{
    e.preventDefault()
      let data={
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
         
      }
        
      let user=data.username
      
      let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",

        body:JSON.stringify(data),

        headers:
        {
            'Content-Type':'application/json'
        },
      })

      let result=await res.json()
      saveuser(user,result.token,10000)
      if(result.error==false){
        alert("Login Succesfull")
        window.location.href="admin.html"
      }
 }

 let saveuser=(user,token,time)=>{
       
  let data={
    user,
    token,
  }
    
    
  localStorage.setItem("user_details",JSON.stringify(data))

  setTimeout(()=>{
    localStorage.setItem("user_details",JSON.stringify(null))
  },time);

   
 }


 



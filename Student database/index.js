// https://limitless-reaches-27114.herokuapp.com/api/users

window.addEventListener("load",()=>{
  getdata()
})
  
  let data;
let getdata=async()=>{

  let res=await fetch('https://murmuring-dusk-39071.herokuapp.com/api/student')
   data=await res.json()
  console.log(data)
   renderdon(data)
}
  
 
let renderdon=(data)=>{

  let cont=document.getElementById("container")
  cont.innerHTML=null


  data.forEach(({name,id,age,batch,course,mobile,score})=>{
    
      let div=document.createElement("div")
       div.id="studentbox"
      let Name=document.createElement("p")

       
      let p1=document.createElement("p")
      let p2=document.createElement("p")
      let p3=document.createElement("p")
      let p4=document.createElement("p")
      let p5=document.createElement("p")
      let p6=document.createElement("p")
      
        
      let removebtn=document.createElement("button")
        removebtn.onclick=()=>{
          remove(id)
        }

        let edit_btn=document.createElement("button")
        edit_btn.onclick=()=>{

          editTodo(id)
        }
        Name.innerText=`Name:${name}`
         
        p1.innerText=`Batch:${batch}`
        p2.innerText=`Age:${age}`
        p3.innerText= `Id:${id}`
        p4.innerText= `Score:${score}`
        p5.innerText=`Mobile:${mobile}`
        p6.innerText= `Course:${course}`
       
      removebtn.innerText="Remove"
      edit_btn.innerText="Update Score"
      div.append(Name,p1,p2,p3,p4,p5,p6,removebtn,edit_btn)
      cont.append(div)
  })
}

 
let todo =async()=>{
 

 let N=document.getElementById("name").value
 let B=document.getElementById("batch").value
 let C=document.getElementById("course").value
 let A=document.getElementById("age").value
 let M=document.getElementById("mobile").value
 let S=document.getElementById("score").value

  
  let data={
         name:N,
         batch:B,
         course:C,
         age:A,
         mobile:M,
         score:S,
         id:Date.now()
         
       }
       
       
       let res=await fetch("https://murmuring-dusk-39071.herokuapp.com/api/student",{

        method:"POST",
        body:JSON.stringify(data),
    
        headers:{
            "Content-Type": "application/json",
        }
        })
    
         getdata()

         document.getElementById("name").value="";
       document.getElementById("batch").value="";
       document.getElementById("course").value="";
       document.getElementById("age").value="";
       document.getElementById("mobile").value="";
       document.getElementById("score").value="";
      
    
          let rt=await res.json()
          console.log(rt)
 
}




let del=async()=>{
   let id=document.getElementById("id").value
  let res=await fetch(`https://murmuring-dusk-39071.herokuapp.com/api/student/${id}` ,{

     method:"DELETE",
     headers:{
         "Content-Type": "application/json",
     }
     })
       
      
       getdata()
     

}

let sortageasc=async()=>{

  let res=await fetch('https://murmuring-dusk-39071.herokuapp.com/api/student?_sort=age&_order=asc')
   res=await res.json()
   console.log(res)
   renderdon(res)
  //  getdata()
}

let sortagedesc=async()=>{

  let res=await fetch('https://murmuring-dusk-39071.herokuapp.com/api/student?_sort=age&_order=desc')
   res=await res.json()
   console.log(res)
   renderdon(res)
  //  getdata()
}

let filtercourse=async()=>{
     
  let value=document.getElementById("user_courses").value
   console.log(value)
  let res=await fetch(`https://murmuring-dusk-39071.herokuapp.com/api/student?course=json-server&course=${value}`)
  res= await res.json()
  console.log(res)
  renderdon(res)
}
 
let remove=async(id)=>{
       
  let res=await fetch(`https://murmuring-dusk-39071.herokuapp.com/api/student/${id}` ,{

method:"DELETE",
body:JSON.stringify(data),

headers:{
    "Content-Type": "application/json",
}
})
getdata()
// showbuttons()
// showdata()
}

let editTodo=async(id)=>{
   
  let todo= await fetch(`https://murmuring-dusk-39071.herokuapp.com/api/student/${id}`)
       todo=await todo.json()
        
       let p=prompt('Update your score')
       
      let data={score:p}
                 
                    
        console.log(todo)
      let res=await fetch(`https://murmuring-dusk-39071.herokuapp.com/api/student/${id}` ,{
 
         method:"PATCH",
         body:JSON.stringify(data),
     
         headers:{
             "Content-Type": "application/json",
         }
         })
           
         getdata()
          
         // let result=res.json()
         // console.log(result)
 
 }
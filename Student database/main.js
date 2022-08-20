let data;
let data_div=document.getElementById("data_div")
 async function main(){

  data=await getdata()

  console.log(data)
  showbuttons(1)
 }
  main()
async function getdata(){

  let res=await fetch('https://murmuring-dusk-39071.herokuapp.com/api/student/')

  let data=await res.json()

  return data
}

  
  function showbuttons(index){
       
    if(index<=2){
      index=2
    }
      let btn_div=document.getElementById("btn_div")
      btn_div.innerHTML=null

      for(var i=index-1;i<index+4;i++){
          //  console.log(index)
         let btn=document.createElement("button")
          btn.innerText=i

          btn.setAttribute("id",`${i-1}`)
           btn.onclick=showdata
          btn_div.appendChild(btn)


  }
}


function showdata(){

 let id=Number(this.id)
console.log(id)

let pagedata=data.slice(id*5,id*5+5)

console.log(pagedata)

data_div.innerHTML=null
pagedata.forEach(({name,batch,age,score,id,mobile,course})=>{
    
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
       del(id)
     }

     let edit_btn=document.createElement("button")
     edit_btn.onclick=()=>{

       editTodo(id)
     }
   Name.innerText=`Name:${name}`
   
   p1.innerText=`Batch:${batch}`
   p2.innerText=`Age:${age}`
   p3.innerText= `Id:${id}`
   p4.innerText= `score:${score}`
   p5.innerText=`Mobile:${mobile}`
   p6.innerText= `course:${course}`
    
   removebtn.innerText="Remove"
   edit_btn.innerText="Update score"
   div.append(Name,p1,p2,p3,p4,p5,p6, removebtn,edit_btn)
   data_div.appendChild(div)

     
 })

 showbuttons(id)
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

let del=async(id)=>{
 
let res=await fetch(`https://murmuring-dusk-39071.herokuapp.com/api/student/${id}` ,{

method:"DELETE",
body:JSON.stringify(data),

headers:{
"Content-Type": "application/json",
}
})
// getdata()
// showbuttons()
// showdata()
}
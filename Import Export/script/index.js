 
 import { navbar } from "./navbar.js";

 document.getElementById("navbar").innerHTML=navbar()
 
 

let data;

 let getdata=async()=>{

    let res=await fetch('https://dry-scrubland-61459.herokuapp.com/api/menu')

      data=await res.json()
     append(data)
    console.log(data)
 }

 getdata()


 let append=((data)=>{
   let cont=document.getElementById("container")
   cont.innerHTML=null

   data.forEach(({description,title,image,price,rating})=>{

    let div=document.createElement("div")
        div.id="menu_box"
    let pic=document.createElement("img")
     pic.src=image

     let Title=document.createElement("h3")
         Title.innerText=title

     let desc=document.createElement("h4")
     desc.innerText=description

     let amt=document.createElement("p")
     amt.innerText=`Rs:${price}`

     let rate=document.createElement("h4")
     rate.innerText=`Rating:${rating}`
      
     div.append(pic,Title,desc,amt,rate)

     cont.append(div)
   })
 })
 ////sort through price
      document.getElementById("lth").addEventListener("click",function(){
           sortpricelth()
      })
      document.getElementById("htl").addEventListener("click",function(){
        sortpricehtl()
   })
///// sort through ratings
   document.getElementById("lthr").addEventListener("click",function(){
    sortratingslthr()
})
document.getElementById("htlr").addEventListener("click",function(){
    sortratingshtlr()
})
 let sortpricelth=()=>{
     
    data.sort(function(a,b){

        return a.price-b.price
    })
    
    append(data)
 }

 let sortpricehtl=()=>{
    data.sort(function(a,b){

        return b.price-a.price
    })
    
    append(data)
 }

 let sortratingslthr=()=>{
    data.sort(function(a,b){

        return a.rating-b.rating
    })
    
    append(data)
 }

 let sortratingshtlr=()=>{
    data.sort(function(a,b){

        return b.rating-a.rating
    })
    
    append(data)
 }
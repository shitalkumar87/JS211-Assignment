// let arrow=()=>{
//     this.a="avinash"
// }

// arrow()

// let person = {
//      name:"Atal",
//      address:{
//          street:"atal",
//          lane:34,
//          pin:"847226"
//      },
//      mob:"8709551217"
// }

//  class Stack{

//     constructor(){
//         this.length=0
//         this.stack=[]
//     }

//     push(el){
//         this.stack.push(el)
//         this.length++
//     }

//     pop(){
//        if (this.stack.length==0) console.log("Empty")
//        else this.stack.pop()
//        this.length--
//     }

//  }

//  let s1=new Stack()
 
//  s1.push(1)
//  s1.push(2)

//  console.log(s1)


 class Counter{
     #value;
     #onupdatecallback
     #addcallback
     #sumcallback
     constructor(init){

        this.#value=init

     }

     get value(){
        return this.#value
     }

     set value(newValue){
        this.#value=newValue
     }

     get callback(){
        return this.#onupdatecallback
     }
     set callback(cb){
        return this.#onupdatecallback=cb
     }

     get addcallback(){
        return this.#addcallback
     }
     set addcallback(add){
        return this.#addcallback=add
     }

     get sumcallback(){
        return this.#sumcallback
     }
     set sumcallback(add){
        return this.#sumcallback=add
     }
 }

 let counter=new Counter(0)
//   counter.value=2
//  console.log(s2.value)
 
let id;
 window.addEventListener("load",()=>{
   
    let value=document.getElementById("value")
    value.textContent=counter.value
    counter.callback=renderDom;
    counter.addcallback=add
    counter.sumcallback=sum
    const btn=document.getElementById("add-btn")

   id= setInterval(()=>{

        
            counter.addcallback()
            counter.callback()
        

    },1000)

    btn.addEventListener("click",()=>{
        clearInterval(id)
        counter.addcallback()
        counter.callback()
    })
      

      const btn2=document.getElementById("sum-btn")
      btn2.addEventListener("click",()=>{
        clearInterval(id)
          counter.sumcallback()
          counter.callback()
      })


 })

 function renderDom(){
    value.textContent=counter.value
    
 }
  function add(){
    counter.value++
  }
  function sum(){
    counter.value--
  }
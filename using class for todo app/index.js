class Todo{
    #todos
    constructor(){
       this.#todos=[];
    }

    get items(){
        return this.#todos
    }

    set items(title){

        const newItem={
            id:Date.now(),
            title:title,
            status:false
        }
        this.#todos=[...this.#todos,newItem]
    }
   
 toggleStatus(id){
    this.#todos=this.#todos.map((el)=>{
        el.id===id ?{...el,status: !el.status}:el
         
    })
 }
 deleteItem(id){
    this.#todos=this.#todos.filter((el)=> el.id!==id)
 };
    
}
  
const list=new Todo()

window.addEventListener("load",()=>{

    const addBtn=document.getElementById("Add-btn")
addBtn.onclick=()=>{

    const text=document.getElementById("input").value
    list.items=text
    console.log(list.items)
     
    renderdom()
}

})

function Todoitem({  id,  title,  status}){
      
    const div=document.createElement("div")
    const li=document.createElement("li")
    li.innerHTML=`${title} - ${status} -${id}`
    

    let btn=document.createElement("button")
    btn.textContent="Toggle"
    btn.onclick=()=>{
         
        list.toggleStatus(id)
        renderdom()
    }

    let del=document.createElement("button")
    del.textContent="Remove"
    del.onclick=()=>{
        list.deleteItem(id)
        renderdom()
    }
    div.append(li,btn,del)
    return div
}

let renderdom=()=>{
    let cont=document.getElementById("container")
    cont.innerHTML=null


    list.items.forEach((el)=>{
    let newItem=Todoitem(el)
    cont.append(newItem)
});
}
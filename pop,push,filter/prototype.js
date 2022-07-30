
function MyArray(){
    this.length=0
    Object.defineProperties(this,'length',{
          value:0,
          Enumerable:false,
          Writable:true
    })
}

// push pop map

MyArray.prototype.push=function(elem){

    this[this.length]=elem
    this.length++
    return this.length
}

MyArray.prototype.pop=function(){
    this.length--
    var popElem=this[this.length]
    delete this[this.length]
    return popElem
}


MyArray.prototype.map=function(cb){
     var result =new MyArray()
    for(index in this){
        if(this.hasownproperty(index)){
           result.push( cb(this[index],index,this))
        }
    }
    return result
}
let s1=new Array()

s1.push(2)
s1.push(3)
s1.push(4)
s1.pop()
console.log(s1)

 var res=s1.map(function(val){
    console.log(val)
    return
 })

 console.log(res)
 
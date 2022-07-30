class array{

    constructor(){

        this.arr=[];
        this.length=0;
    }

   
}

 array.prototype.push = function(...arr)
 {
    arr.forEach((el)=>{

        let index=this.length
        this.arr[index]=el
        this.length++
    });
}

array.prototype.pop = function()
{
    if(this.length == 0)
    {
        return null;
    }
    let ans = this.arr[this.length-1]
    this.length--
    this.arr.length--
    return ans;   
}

array.prototype.forEach=function(func)
{
    for(let i=0; i<this.length; i++)
    {
        func(this.arr[i]);
    }
    
}

array.prototype.map = function(func)
{
    let newArr = new array();
    for(let i=0; i<this.length; i++)
    {
        newArr.push(func(this.arr[i]));
    }
    return newArr;
}

array.prototype.filter = function(func){
    let newArr = new array();
    for(let i=0; i<this.length; i++)
    {
        if(func(this.arr[i]) === true)
        {
            newArr.push(this.arr[i]);
        }
    }
    return newArr;
    
}

let s1=new array()
s1.push(10,30,40,48);

function mult3(a)
{
    return a%3 === 0;
}

let g = s1.filter(mult3);
console.log(g);


 
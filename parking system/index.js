class vehicle{
    constructor(car,regnum,color){
        this._type=car
        this.registrationNum=regnum
        this.color=color
    }

    get type(){
        return this._type
        
    }

    set type(value){
        this._type=value
    }
}


class car extends vehicle{

    constructor(car,regnum,color){
        super("car",color,regnum)
        
    }
}


class bike extends vehicle{
    constructor(car,regnum,color){
        super("Bike",color,regnum)
        
    }
}


class truck extends vehicle{
    constructor(car,regnum,color){
        super("Truck",color,regnum)
        
    }
}
 

class slot{
    constructor(type,number){
       this._type=type
       this.number=number
       this._isBooked=false
    }

    get isBooked(){
        return this._isBooked;
    }

    set isBooked(value){
         this._isBooked=value;
    }
}

//////   INDIVIDUAL FLOORS


class parkingfloor{
    constructor(floornumber,maxspots){
        this.floornumber=floornumber
        this._maxspots=maxspots
        this._parkingspots=[];
          
        for(var i=0;i<maxspots;i++)
        {
            if(i===0){
              this._parkingspots.push(new slot("car",i));
            }

            else if(i===1)
            {
                this._parkingspots.push(new slot("Bike",i));
            }

            else
            {
                this._parkingspots.push(new slot("Truck",i));
            }
        }
        
    }

    get parkingspots(){
        return this._parkingspots
    }

    set parkingspots(value){
        this._parkingspots=value
    }
}

// parking lot or building


class parkinglot{

    constructor(number){
          this._floor=[];
          this._numberoffloors=number;

          for(let i=0;i<this._numberoffloors;i++)
          {
              this._floor.push(new parkingfloor(i,3))
          }

    }

    get numberoffloors(){
        return this._numberoffloors;
    }
    

    get floor(){
           return this._floor;
    }

    parkvehicle(){
       let slot=this.findslot(vehicle.type)
       
       if(slot){
           this.bookslot(slot);
           let ticket=new Ticket(slot.floornumber,slot.slot.number)
           console.log("Ticket",ticket)
       }
       else{
           console.log("No Slot")
           return false;
       }

    }

    findslot(type){
        for(let i=0;i<this._numberoffloors;i++)
        {
            for(let slot of this._floor[i]._parkingspots)
            {
                 if(slot.type===type  && !slot.isBooked)
                 {
                      return {floornumber:i ,  slot:slot}
                 }
            }
        }

        return false;
    }

    bookslot(slot){
        slot.slot.isBooked=true;
        console.log("Slot is Booked")
        return true;
    }
    
}

 
 
/// Ticket counter

class Ticket{
    constructor(floornumber,slotnumber){
        this.floornumber=floornumber;
        this.slot=slotnumber;
         this.issuedAt=new Date()

    }
}



let v1=new vehicle("Br-32r0853","Gray")
let pl1= new parkinglot(3)

// v1.type="truck"
pl1.parkvehicle(v1)
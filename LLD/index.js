// 1. Slot
// - slot:[start, end];

// 2. Slots
// slots: slot[]
// - add
// - delete
// - isAvailable
// - size

// 3.Meeting room
// - name: string
// - capacity: number
// - slots: slots
// - availabeleSlots:[];
// - addSlots
// - deleteslots
// - isAvailable
// - setAvailableSlots

// 4. Floors
// - name: string
// - meetingRooms: meetingRoom[];
// - addMeetingRoom
// - doesMeetingRoomExist
// - deleteMeetingRoom

// 5.Building
// - name
// - floors: floor[]
// - addFloor
// - doesFloorExist
// - deleteFloor

// Buiscuit
              
class Slot {
    #slot;
    constructor(start, end) {
      this.#slot = [start, end];
    }
  
    get start() {
      return this.#slot[0];
    }
  
    get end() {
      return this.#slot[1];
    }
  }
  
  //Packet
  
  class Slots {
    #slots;
    constructor() {
      this.#slots = [];
    }
  
    get getAllSlots() {
      return this.#slots;
    }
  
    add(slot) {
      if (this.isAvailable(slot.start, slot.end)) {
        this.#slots.push(slot);
      }
    }
  
    isAvailable(start, end) {
      for (let slot of this.#slots) {
        if (start < slot.end && end > slot.start) {
          return false;
        }
      }
  
      return true;
    }

    getsize(){
     return this.#slots.length;
    }

    listslots(){
      for(let s of this.#slots){
        console.log(`start:${s.start}, End ${s.end}`)
      }
    }

    // deletslot(slot){

    //   for(let i=0;i<this.#slots.length;i++){
        
    //   }

    // }
  }
  
  let s1 = new Slot(1, 2);
  let s2 = new Slot(3, 4);
  let s3 = new Slot(3, 5);
  
  let slots = new Slots();
  slots.add(s1);
  slots.add(s2);
  slots.add(s3);
  
  console.log(slots.getAllSlots);
  slots.listslots()
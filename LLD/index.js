 // LLD :- Low level design

// Create a LLD for an meeting room

// Entities of a Meeting room design

// Building
// Floors
// Meeting rooms (1 - 24)
// Slots :- [array of individual slot]
// Slot :- [start,end];

// Bottom to top

/*

1. slot
 - slot: [start,end];
------------------------------

2. Slots
  - slots: [slot1, slot2];
  - add a slot
  - delete a slot
  - size
  - isAvailable 

-----------------------------  

3. Meeting Rooms
- name : String
- capacity:- Number
- Slots 
- availableSlots
- addSlots
- deleteSlots
- isAvailable

------------------------------

4. Floors
- name: string
- meetingRooms : []
- addMeetingRoom
- deleteMeetingRoom

5. Building
- name: string
- Floors : []
- addFloor
- deleteFloor



*/

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

  get size() {
    return this.#slots.length;
  }

  listSlots() {
    for (let s of this.#slots) {
      console.log(`Start: ${s.start}, End: ${s.end}`);
    }
  }

  deleteSlot(slot) {
    for (let i = 0; i < this.#slots.length; i++) {
      if (
        slot.start === this.#slots[i].start &&
        slot.end === this.#slots[i].end
      ) {
        this.#slots.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

// let s1 = new Slot(1, 2);
// let s2 = new Slot(3, 4);
// let s3 = new Slot(3, 5);
// let s4 = new Slot(6, 7);

// let slots = new Slots();
// slots.add(s1);
// slots.add(s2);
// slots.add(s3);
// slots.add(s4);

// slots.listSlots();

// slots.deleteSlot(s2);

// slots.listSlots();

// slots :[[1,2], [3,4], ]
// add([3,5])
// add([4,5]);

// it lies between any slots

// [[1,2], [4,6], [6,7]];
// deleteSlot([7,8]) // start and end time

class MeetingRoom {
  #name;
  #capacity;
  #slots;
  // #availableSlots;

  constructor(name, capacity) {
    this.#name = name;
    this.#capacity = capacity;
    this.#slots = new Slots();
    // this.#availableSlots = [];
  }

  get name() {
    return this.#name;
  }

  get capacity() {
    return this.#capacity;
  }

  get slots() {
    return this.#slots;
  }

  get availableSlots() {
    return this.#availableSlots;
  }
}

class Floor {
  #name;
  #meetingRooms;

  constructor(name) {
    this.#name = name;
    this.#meetingRooms = [];
  }

  get name() {
    return this.#name;
  }

  get meetingRooms() {
    return this.#meetingRooms;
  }

  addMeetingRoom(newRoom) {
    this.#meetingRooms.push(newRoom);
  }

  deleteMeetingRoom(name) {
    for (let i = 0; i < this.#meetingRooms.length; i++) {
      if (this.#meetingRooms[i].name === name) {
        this.#meetingRooms.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}



class Building {
  #name;
  #floors;

  constructor(name) {
    this.#name = name;
    this.#floors = [];
  }

  get name() {
    return this.#name;
  }

  get floor() {
    return this.#floors;
  }

  addFloor(newFloor) {
    this.#floors.push(newFloor);
  }

  //deletefloor(name)

  getFloorByName(name) {
    return this.#floors.find((el) => el.name === name);
  }
}


 setAvailableSlots(slots){
    this.#availableSlots = [];

    if (this.#slots.size === 0) {
      this.#availableSlots.push([1, 8]);
      return;
    }

    let start = 1;

    for (let slot of this.#slots) {
      if (slot.start <= start) {
        start = slot.end;
        continue;
      }

      const end = slot.start;
      this.#availableSlots.push([start, end]);
      start = slot.end;
    }

    if (start < 8) {
      this.#availableSlots.push([start, 8]);
    }
  }

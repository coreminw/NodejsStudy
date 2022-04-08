// class와 상속

class Human{
  constructor(type = 'human'){
    this.type = type;
  }
  static isHuman(human){
    return human instanceof Human
  }
  breathe(){
    alert('h-a-am');
  }
}

class Zero extends Human{
  constructor(type, firstName, lastName){
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayName(){
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Wook');
Human.isHuman(newZero);

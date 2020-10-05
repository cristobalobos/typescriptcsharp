class Persona2 {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    private age: number
  ) {}

  greetMe() {
    console.log(`Hello ${this.firstName}`);
  }
}

let p2 = new Persona2("Francisco", "Sanchez", "coso@latinmail.cl", 30);
p2.greetMe();
//Hello Francisco

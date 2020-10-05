class Persona {
  public firstName: string;
  public lastName: string;
  public email: string;
  private age: number;

  constructor(fn: string, ln: string, email: string, age: number) {
    this.firstName = fn;
    this.lastName = ln;
    this.email = email;
    this.age = age;
  }

  greetMe() {
    console.log(`Hello ${this.firstName}`);
  }
}

let p = new Persona("Cristobal", "Lobos", "cristobal.lobost@gmail.com", 29);
p.greetMe();
//Hello Cristobal

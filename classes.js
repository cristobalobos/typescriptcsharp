var Persona = /** @class */ (function () {
    function Persona(fn, ln, email, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }
    Persona.prototype.greetMe = function () {
        console.log("Hello " + this.firstName);
    };
    return Persona;
}());
var p = new Persona("Cristobal", "Lobos", "cristobal.lobost@gmail.com", 29);
p.greetMe();

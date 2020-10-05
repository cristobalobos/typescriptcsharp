var Persona2 = /** @class */ (function () {
    function Persona2(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    Persona2.prototype.greetMe = function () {
        console.log("Hello " + this.firstName);
    };
    return Persona2;
}());
var p2 = new Persona2("Francisco", "Sanchez", "coso@latinmail.cl", 30);
p2.greetMe();

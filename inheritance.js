var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    Person.prototype.greetMe = function () {
        console.log("Hello " + this.firstName);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, email, age, grade) {
        var _this = _super.call(this, firstName, lastName, email, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.greetMe = function () {
        _super.prototype.greetMe.call(this);
        console.log("I am in the " + this.grade + " grade");
    };
    return Student;
}(Person));
var student = new Student("Francisco", "Sanchez", "coso@latinmail.cl", 30, "6th");
student.greetMe();
//Hello Francisco

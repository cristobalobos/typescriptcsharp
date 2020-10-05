function person(value) {
    switch (typeof value) {
        case "string":
            return "my name is " + value;
        case "number":
            return "my age is " + value;
        case "boolean":
            return value ? "I'm married" : "I'm not married";
    }
}
console.log(person("Jesse"));
console.log(person(21));
console.log(person(true));

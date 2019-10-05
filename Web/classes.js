/**
 * Created by aayusharora on 10/24/17.
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
var person = new Person("aayush");
person.display();

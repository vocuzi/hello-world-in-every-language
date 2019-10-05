/**
 * Created by aayusharora on 10/24/17.
 */


class Person {
    private name: string;

    constructor(name: string) {
      this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

var person = new Person("aayush");

person.display();
/**
 * Created by aayusharora on 10/24/17.
 */


interface shoppinglist {
    item: string ,
    price: number
}

class Shopping {
    public items: string [];
    public price: number;

    constructor(items: string [], price: number ) {
        this.items = items;
        this.price = price;
    }
    add(list : shoppinglist) {
        this.items.push(list.item);
        this.price = list.price;
    }

    display() {
        console.log(`items ${this.items} `);
        console.log(`price ${this.price}`)
    }

}

var list = new Shopping(["apples"],7);

function addItem(item: string, price: number) {
    list.add({
        item:  item,
        price: price
    });
}

function displayItem() {
    list.display();
}


// Task name
// done
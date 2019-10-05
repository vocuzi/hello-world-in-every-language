/**
 * Created by aayusharora on 10/24/17.
 */
var Shopping = /** @class */ (function () {
    function Shopping(items, price) {
        this.items = items;
        this.price = price;
    }
    Shopping.prototype.add = function (list) {
        this.items.push(list.item);
        this.price = list.price;
    };
    Shopping.prototype.display = function () {
        console.log("items " + this.items + " ");
        console.log("price " + this.price);
    };
    return Shopping;
}());
var list = new Shopping(["apples"], 7);
function addItem(item, price) {
    list.add({
        item: item,
        price: price
    });
}
function displayItem() {
    list.display();
}
// Task name
// done 

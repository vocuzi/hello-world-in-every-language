/**
 * Created by aayusharora on 10/24/17.
 */

window.onload = function() {
    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');

    var price = 50;

    btn.onclick = function () {
        var value = input.value;
        addItem(value, price);
        displayItem();
    };


}





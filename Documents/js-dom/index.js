let counter = 3;
function add() {
  let order_item = document.createElement("li");

  order_item.innerHTML = "<strong> any" + counter++ + " </strong >";
  let ex = document.getElementById("list");
  ex.append(order_item);
  order_item.classList.add("mylist");
}
function remove() {
  let newList = document.getElementById("list");
  let items = newList.querySelectorAll("li");
  let last_item = items[items.length - 1];
  last_item.remove();
  counter--;
}
let button = document.getElementById("button_1");
button.addEventListener("click", add);

let button2 = document.getElementById("button_2");
button2.addEventListener("click", remove);

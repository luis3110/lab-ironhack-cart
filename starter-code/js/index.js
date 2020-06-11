var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubTotal(product) {
  let itemPrice = product.querySelector(".pu span").innerHTML;
  let quantity = product.querySelector(".qty label input").value;
  let subtotal = itemPrice * quantity;
  return (product.querySelector(".subtot span").innerHTML = subtotal);
}
function calcAll() {
  console.log(document.querySelectorAll(".product"));
  let totalPrice = 0;
  document.querySelectorAll(".product").forEach((product) => {
    console.log("for each", product);
    totalPrice += updateSubTotal(product);
  });
  document.querySelector("h2 span").innerHTML = totalPrice;
}
calc.onclick = calcAll;

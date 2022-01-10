function calculateDiscount(originalPrice, discount) {
  const priceWithDiscount = (originalPrice * (100 - discount)) / 100;

  return priceWithDiscount;
}

function onClickCalculateDiscount() {
  const inputPrice1 = document.getElementById("inputPrice");
  const productPrice = inputPrice1.value;

  const inputDiscount1 = document.getElementById("inputDiscount");
  const discount = inputDiscount1.value;

  const priceWithDiscount = calculateDiscount(productPrice, discount);

  let resultt = document.getElementById("result");
  resultt.innerText = "Precio con descuento: " + priceWithDiscount;
}

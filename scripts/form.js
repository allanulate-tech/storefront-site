document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const product = {
    name: form.name.value,
    price: form.price.value,
    description: form.description.value,
    quantity: form.quantity.value,
    condition: form.condition.value,
    image: form.image.value
  };

  const output = document.getElementById("output");
  output.textContent = JSON.stringify(product, null, 2);
});
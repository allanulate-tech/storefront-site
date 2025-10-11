fetch('data/inventory.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-list');
    data.products.forEach(product => {
      const item = document.createElement('div');
      item.className = "product";

      // Format the price with currency and decimals
      const formattedPrice = new Intl.NumberFormat('es-CR', {
        style: 'currency',
        currency: 'CRC',
        minimumFractionDigits: 2
      }).format(product.price);

      // Build the HTML content
      item.innerHTML = `
        <h3>${product.name}</h3>
        <img src="assets/images/${product.image}" alt="${product.name}" width="200" />
        <p><strong>${formattedPrice}</strong> – ${product.condition}</p>
        <p>${product.description}</p>
        <p><em>Cantidad: ${product.quantity}</em></p>
      `;

      container.appendChild(item);
    });
  });


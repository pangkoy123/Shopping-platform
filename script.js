let cart = [];

function updateCart() {
    // Update cart count and total price in the header
    const cartButton = document.getElementById('cartButton');
    const totalPriceElement = document.getElementById('totalPrice');
    const cartList = document.getElementById('cartList');
    
    cartButton.textContent = `Cart (${cart.length})`;
    totalPriceElement.textContent = cart.reduce((total, item) => total + item.price, 0);

    // Update cart list
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
    toggleCartSection();
}

function toggleCartSection() {
    const cartSection = document.getElementById('cartSection');
    const checkoutSection = document.getElementById('checkoutSection');
    
    cartSection.classList.remove('hidden');
    checkoutSection.classList.add('hidden');
}

function checkout() {
    const checkoutSection = document.getElementById('checkoutSection');
    const cartSection = document.getElementById('cartSection');
    
    cartSection.classList.add('hidden');
    checkoutSection.classList.remove('hidden');
}

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;
    
    alert(`Order submitted! Name: ${name}, Address: ${address}, Payment Method: ${paymentMethod}`);
    cart = [];  // Clear the cart after checkout
    updateCart();
    toggleCartSection();
});

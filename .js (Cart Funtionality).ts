let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " added to cart!");
}

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartList = document.getElementById('cart-items');
    let total = 0;
    
    cartList.innerHTML = "";
    cartItems.forEach(item => {
        total += item.price;
        cartList.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    });
    
    document.getElementById('total-price').innerText = "Total: $" + total;
}
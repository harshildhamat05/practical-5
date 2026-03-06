let cartCount = 0;

function toggleMenu() {
const navLinks = document.querySelector('.nav-links');
navLinks.classList.toggle('active');
}

function addToCart(product) {
cartCount++;
document.getElementById("cart-count").textContent = cartCount;
alert(product + " added to cart!");
}

function handleLogin(event) {
event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (email && password) {
alert("Login successful!");
window.location.href = "index.html";
} else {
alert("Please fill all fields");
}
}

document.addEventListener("DOMContentLoaded", function () {

const products = [
{ id: 'gaming', basePrice: 5000 },
{ id: 'cooking', basePrice: 3000 },
{ id: 'tech', basePrice: 4000 },
{ id: 'vlog', basePrice: 3500 }
];

products.forEach(product => {
const qtyInput = document.getElementById(`qty-${product.id}`);
const priceSpan = document.getElementById(`price-${product.id}`);

if (qtyInput) {
qtyInput.addEventListener("input", function () {
const qty = parseInt(qtyInput.value) || 1;
priceSpan.textContent = qty * product.basePrice;
});
}
});

});

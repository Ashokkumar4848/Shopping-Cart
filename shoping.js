// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.navlist');

// menu.onclick =() => {
//     menu.classList,toggle('bx-x');
//     navlist.classList.toggle('open');
// }

// window.onscroll = () => {

//     menu.classList.remove('bx-x');
//     navlist.classList.remove('open');
// }

// Toggle menu for mobile view

const menuIcon = document.getElementById('menu-icons');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the active class to show/hide the nav menu
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle the search icon (search button click)
const searchIcon = document.querySelector('.ri-search-line');
const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search products...');

// When user clicks on search icon, show an input box
searchIcon.addEventListener('click', () => {
    if (!document.body.contains(searchInput)) {
        document.body.appendChild(searchInput); // Append the input box to the body
        searchInput.focus(); // Focus the input field
    }
});

// Handle cart button interaction (this is just a placeholder for actual functionality)
const cartIcon = document.querySelector('.ri-shopping-cart-fill');
cartIcon.addEventListener('click', () => {
    alert("Your shopping cart is open!");
});

// Handle "Add to cart" click actions
const addToCartButtons = document.querySelectorAll('.row-left a');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link action
        alert('Item added to your cart!');
    });
});

// Toggle active class on product images when clicked (optional for interactivity)
const productImages = document.querySelectorAll('.row-img img');
productImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('active'); // Toggle active class for image interactions
    });
});

// Handle form submission in the newsletter section
const newsletterForm = document.querySelector('.newsletter form');
newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thanks for subscribing with ${email}!`);
});

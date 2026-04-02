document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });
    if (window.scrollY > 50) navbar.classList.add('scrolled');

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    // Mobile Menu Toggle (Basic)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    mobileBtn.addEventListener('click', () => {
        if(navLinks.style.display === 'flex' && window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '1rem 2rem';
            navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
        }
    });

    // Shopping Cart Logic
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartBadge = document.getElementById('cart-badge');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    let cartCount = 0;
    let cartTotal = 0;

    // Open Cart Sidebar
    openCartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });

    // Close Cart Sidebar
    const closeCart = () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    };
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Add To Cart Functionality
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const price = parseInt(btn.getAttribute('data-price'));
            const card = btn.closest('.product-card');
            const title = card.querySelector('h4').innerText;

            // Increment Count & Total
            cartCount++;
            cartTotal += price;
            
            // Update UI
            cartBadge.innerText = cartCount;
            cartTotalPrice.innerText = `₹${cartTotal}`;

            // Remove Empty Msg
            const emptyMsg = cartItemsContainer.querySelector('.empty-cart-msg');
            if(emptyMsg) emptyMsg.remove();

            // Setup new Item element
            const itemHTML = `
                <div class="cart-item">
                    <div>
                        <h5>${title}</h5>
                        <span class="cart-item-price">₹${price}</span>
                    </div>
                    <i class="fa-solid fa-trash remove-item"></i>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);

            // Pop Sidebar Open Automatically
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        });
    });

    // Handle Remove Item
    cartItemsContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('remove-item')) {
            const itemDiv = e.target.closest('.cart-item');
            const priceStr = itemDiv.querySelector('.cart-item-price').innerText.replace('₹', '');
            const price = parseInt(priceStr);

            cartCount--;
            cartTotal -= price;

            cartBadge.innerText = cartCount;
            cartTotalPrice.innerText = `₹${cartTotal}`;
            
            itemDiv.remove();

            if(cartCount === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is currently empty.</div>';
            }
        }
    });

    // Accordion Logic (FAQ)
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Toggle active class
            item.classList.toggle('active');
            
            // Close others (Optional, for strictly accordion behavior)
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});

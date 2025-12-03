// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // If on cart page, display cart items
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
    
    // Show admin menu if user is admin
    checkAdminAccess();
});

// Check if user is admin and show/hide admin menu
function checkAdminAccess() {
    const currentUser = getCurrentUser();
    const adminMenuItem = document.getElementById('admin-menu-item');
    
    if (adminMenuItem && currentUser && currentUser.role === 'admin') {
        adminMenuItem.style.display = 'block';
    }
}

// Add to cart function
function addToCart(id, name, price, image = '') {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification('Đã thêm sản phẩm vào giỏ hàng!');
}

// Remove from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
}

// Update quantity
function updateQuantity(id, quantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            if (window.location.pathname.includes('cart.html')) {
                displayCart();
            }
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count badge
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = cartCount;
    }
}

// Display cart items on cart page
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <tr>
                <td colspan="5" class="text-center" style="padding: 50px;">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--muted); margin-bottom: 20px;"></i>
                    <p>Giỏ hàng của bạn đang trống</p>
                    <a href="products.html" class="btn btn-primary">Mua sắm ngay</a>
                </td>
            </tr>
        `;
        if (cartSummary) {
            cartSummary.style.display = 'none';
        }
        return;
    }
    
    let html = '';
    cart.forEach(item => {
        const total = item.price * item.quantity;
        html += `
            <tr>
                <td>
                    <img src="${item.image || 'https://via.placeholder.com/80'}" alt="${item.name}">
                </td>
                <td>${item.name}</td>
                <td>${formatPrice(item.price)}</td>
                <td>
                    <div class="quantity-control">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" 
                               onchange="updateQuantity(${item.id}, this.value)">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </td>
                <td>${formatPrice(total)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // 10% VAT
    const shipping = 50000; // Fixed shipping fee
    const total = subtotal + tax + shipping;
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('shipping').textContent = formatPrice(shipping);
    document.getElementById('total').textContent = formatPrice(total);
}

// Format price to VND
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Search functionality
function searchProducts() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.trim();
                if (query) {
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

searchProducts();

// Filter products
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card-item');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Admin Functions
let products = JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: 'Intel Core i7-13700K', price: 9990000, category: 'cpu', stock: 15 },
    { id: 2, name: 'RTX 4070 12GB', price: 15500000, category: 'vga', stock: 8 },
    { id: 3, name: 'RAM Corsair 32GB DDR5', price: 3490000, category: 'ram', stock: 25 },
    { id: 4, name: 'SSD Samsung 990 PRO 1TB', price: 2790000, category: 'ssd', stock: 30 }
];

let users = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, username: 'admin', password: 'admin123', email: 'admin@shop-d.vn', role: 'admin' },
    { id: 2, username: 'user1', password: '123456', email: 'user@example.com', role: 'customer' }
];

let orders = JSON.parse(localStorage.getItem('orders')) || [];

function addProduct(name, price, category, stock) {
    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name: name,
        price: parseFloat(price),
        category: category,
        stock: parseInt(stock)
    };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    return newProduct;
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
}

function updateProduct(id, updates) {
    const product = products.find(p => p.id === id);
    if (product) {
        Object.assign(product, updates);
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Login/Register
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}

function register(username, password, email) {
    if (users.find(u => u.username === username)) {
        return { success: false, message: 'Tên đăng nhập đã tồn tại' };
    }
    
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        username: username,
        password: password,
        email: email,
        role: 'customer'
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, user: newUser };
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Order Management
function createOrder(customerInfo, items) {
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const shipping = 50000;
    const total = subtotal + tax + shipping;
    
    const order = {
        id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1,
        customer: customerInfo,
        items: items,
        subtotal: subtotal,
        tax: tax,
        shipping: shipping,
        total: total,
        status: 'pending',
        date: new Date().toISOString()
    };
    
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart after order
    cart = [];
    saveCart();
    updateCartCount();
    
    return order;
}

// Products data - expanded list
let allProducts = [
    // CPU
    { id: 1, name: 'Intel Core i9-14900K - 24 nhân 32 luồng', price: 14990000, oldPrice: 16500000, category: 'cpu', image: 'https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=i9-14900K', featured: false, stock: 10 },
    { id: 2, name: 'Intel Core i7-13700K - 16 nhân 24 luồng', price: 9990000, oldPrice: 11500000, category: 'cpu', image: 'https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=i7-13700K', featured: true, stock: 15 },
    { id: 3, name: 'AMD Ryzen 9 7950X - 16 nhân 32 luồng', price: 16990000, oldPrice: 18500000, category: 'cpu', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=Ryzen+9', featured: false, stock: 8 },
    { id: 4, name: 'AMD Ryzen 7 7700X - 8 nhân 16 luồng', price: 8490000, oldPrice: 9500000, category: 'cpu', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=Ryzen+7', featured: false, stock: 12 },
    
    // VGA
    { id: 5, name: 'NVIDIA GeForce RTX 4090 24GB GDDR6X', price: 45900000, oldPrice: 49900000, category: 'vga', image: 'https://via.placeholder.com/250x200/f7f7f7/76b900?text=RTX+4090', featured: false, stock: 5 },
    { id: 6, name: 'NVIDIA GeForce RTX 4070 12GB GDDR6X', price: 15500000, oldPrice: 17000000, category: 'vga', image: 'https://via.placeholder.com/250x200/f7f7f7/76b900?text=RTX+4070', featured: true, stock: 20 },
    { id: 7, name: 'AMD Radeon RX 7900 XTX 24GB GDDR6', price: 25990000, oldPrice: 28500000, category: 'vga', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=RX+7900', featured: false, stock: 7 },
    { id: 8, name: 'AMD Radeon RX 6750 XT 12GB GDDR6', price: 9990000, oldPrice: 11500000, category: 'vga', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=RX+6750', featured: false, stock: 18 },
    
    // RAM
    { id: 9, name: 'Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz', price: 3490000, oldPrice: 3990000, category: 'ram', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=Corsair+RAM', featured: true, stock: 25 },
    { id: 10, name: 'G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5 6400MHz', price: 6990000, oldPrice: 7990000, category: 'ram', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=G.Skill', featured: false, stock: 12 },
    { id: 11, name: 'Kingston Fury Beast 16GB (2x8GB) DDR4 3200MHz', price: 1290000, oldPrice: 1590000, category: 'ram', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=Kingston', featured: false, stock: 30 },
    { id: 12, name: 'TeamGroup T-Force Delta RGB 32GB (2x16GB) DDR4 3600MHz', price: 2490000, oldPrice: 2890000, category: 'ram', image: 'https://via.placeholder.com/250x200/f7f7f7/ffc107?text=TeamGroup', featured: false, stock: 22 },
    
    // SSD
    { id: 13, name: 'Samsung 990 PRO 2TB NVMe M.2 PCIe Gen 4', price: 5290000, oldPrice: 5990000, category: 'ssd', image: 'https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=Samsung+990', featured: false, stock: 14 },
    { id: 14, name: 'Samsung 990 PRO 1TB NVMe M.2 PCIe Gen 4', price: 2790000, oldPrice: 3200000, category: 'ssd', image: 'https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=Samsung+990', featured: true, stock: 28 },
    { id: 15, name: 'WD Black SN850X 1TB NVMe M.2 PCIe Gen 4', price: 2690000, oldPrice: 3100000, category: 'ssd', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=WD+Black', featured: false, stock: 16 },
    { id: 16, name: 'Crucial P5 Plus 500GB NVMe M.2 PCIe Gen 4', price: 1490000, oldPrice: 1790000, category: 'ssd', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=Crucial', featured: false, stock: 35 },
    
    // Mainboard
    { id: 17, name: 'ASUS ROG MAXIMUS Z790 HERO (Intel Z790)', price: 14990000, oldPrice: 16500000, category: 'mainboard', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=ASUS+ROG', featured: false, stock: 6 },
    { id: 18, name: 'MSI MPG X670E CARBON WIFI (AMD X670)', price: 12990000, oldPrice: 14500000, category: 'mainboard', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=MSI+Carbon', featured: false, stock: 8 },
    { id: 19, name: 'Gigabyte B650 AORUS ELITE AX (AMD B650)', price: 5490000, oldPrice: 6200000, category: 'mainboard', image: 'https://via.placeholder.com/250x200/f7f7f7/ff6600?text=Gigabyte', featured: false, stock: 11 },
    { id: 20, name: 'ASRock B760M Pro RS (Intel B760)', price: 3490000, oldPrice: 3990000, category: 'mainboard', image: 'https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=ASRock', featured: false, stock: 19 },
    
    // PSU
    { id: 21, name: 'Corsair RM1000x 1000W 80+ Gold Modular', price: 4990000, oldPrice: 5590000, category: 'psu', image: 'https://via.placeholder.com/250x200/f7f7f7/ffc107?text=Corsair+PSU', featured: false, stock: 9 },
    { id: 22, name: 'Seasonic Focus GX-850 850W 80+ Gold Modular', price: 3490000, oldPrice: 3990000, category: 'psu', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=Seasonic', featured: false, stock: 13 },
    { id: 23, name: 'EVGA SuperNOVA 750 G6 750W 80+ Gold', price: 2790000, oldPrice: 3200000, category: 'psu', image: 'https://via.placeholder.com/250x200/f7f7f7/d70018?text=EVGA', featured: false, stock: 17 },
    { id: 24, name: 'Cooler Master MWE 650W 80+ Bronze', price: 1490000, oldPrice: 1790000, category: 'psu', image: 'https://via.placeholder.com/250x200/f7f7f7/9b59b6?text=Cooler+Master', featured: false, stock: 24 },
    
    // Case
    { id: 25, name: 'Lian Li O11 Dynamic EVO - Mid Tower', price: 4990000, oldPrice: 5500000, category: 'case', image: 'https://via.placeholder.com/250x200/f7f7f7/ffffff?text=Lian+Li', featured: false, stock: 10 },
    { id: 26, name: 'NZXT H710i - Mid Tower RGB', price: 3990000, oldPrice: 4500000, category: 'case', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=NZXT', featured: false, stock: 14 },
    { id: 27, name: 'Corsair 4000D Airflow - Mid Tower', price: 2490000, oldPrice: 2890000, category: 'case', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=Corsair+Case', featured: false, stock: 21 },
    { id: 28, name: 'Fractal Design Meshify C - Compact ATX', price: 2190000, oldPrice: 2590000, category: 'case', image: 'https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=Fractal', featured: false, stock: 16 },
    
    // Cooling
    { id: 29, name: 'NZXT Kraken Z73 360mm RGB AIO', price: 6990000, oldPrice: 7990000, category: 'cooling', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=NZXT+Kraken', featured: false, stock: 8 },
    { id: 30, name: 'Corsair iCUE H150i Elite 360mm AIO', price: 5490000, oldPrice: 6200000, category: 'cooling', image: 'https://via.placeholder.com/250x200/f7f7f7/000000?text=Corsair+AIO', featured: false, stock: 11 },
    { id: 31, name: 'Noctua NH-D15 chromax.black', price: 2790000, oldPrice: 3100000, category: 'cooling', image: 'https://via.placeholder.com/250x200/f7f7f7/8b4513?text=Noctua', featured: false, stock: 19 },
    { id: 32, name: 'be quiet! Dark Rock Pro 4', price: 2290000, oldPrice: 2690000, category: 'cooling', image: 'https://via.placeholder.com/250x200/f7f7f7/ff6600?text=be+quiet', featured: false, stock: 23 }
];

let filteredProducts = [...allProducts];

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});

// Display products
function displayProducts() {
    const productsList = document.getElementById('products-list');
    if (!productsList) return;
    
    let html = '';
    filteredProducts.forEach(product => {
        const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
        html += `
            <div class="product-card-item" data-category="${product.category}" data-price="${product.price}">
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-card-info">
                    <h4><a href="product-detail.html?id=${product.id}">${product.name}</a></h4>
                    <div>
                        <span class="product-price">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `
                            <span class="product-old-price">${formatPrice(product.oldPrice)}</span>
                            <span class="discount" style="background: var(--accent-bg); color: var(--accent); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; margin-left: 5px;">-${discount}%</span>
                        ` : ''}
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
        `;
    });
    
    productsList.innerHTML = html;
    document.getElementById('product-count').textContent = `Hiển thị ${filteredProducts.length} sản phẩm`;
}

// Filter by category
function filterByCategory() {
    const checkboxes = document.querySelectorAll('[id^="cat-"]');
    const selectedCategories = [];
    
    checkboxes.forEach(cb => {
        if (cb.checked && cb.value !== 'all') {
            selectedCategories.push(cb.value);
        }
    });
    
    if (selectedCategories.length === 0 || document.getElementById('cat-all').checked) {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(p => selectedCategories.includes(p.category));
    }
    
    applyPriceFilter();
    displayProducts();
}

// Filter by price
function filterByPrice() {
    applyPriceFilter();
    displayProducts();
}

function applyPriceFilter() {
    const priceCheckboxes = document.querySelectorAll('[id^="price-"]');
    const selectedPrices = [];
    
    priceCheckboxes.forEach(cb => {
        if (cb.checked) {
            selectedPrices.push(cb.value);
        }
    });
    
    if (selectedPrices.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedPrices.some(range => {
                const [min, max] = range.split('-').map(Number);
                return product.price >= min && product.price <= max;
            });
        });
    }
}

// Sort products
function sortProducts() {
    const sortValue = document.getElementById('sort-select').value;
    
    switch(sortValue) {
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        default:
            filteredProducts = [...allProducts];
    }
    
    displayProducts();
}

// Reset filters
function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    document.getElementById('cat-all').checked = true;
    document.getElementById('sort-select').value = 'default';
    filteredProducts = [...allProducts];
    displayProducts();
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Add product (for admin)
function addProduct(name, price, category, stock, description, oldPrice, image, featured) {
    const newId = Math.max(...allProducts.map(p => p.id), 0) + 1;
    const newProduct = {
        id: newId,
        name: name,
        price: parseInt(price),
        category: category,
        stock: parseInt(stock),
        description: description || '',
        image: image || `https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=${encodeURIComponent(name)}`,
        featured: featured || false
    };
    
    // Only add oldPrice if provided
    if (oldPrice && parseInt(oldPrice) > 0) {
        newProduct.oldPrice = parseInt(oldPrice);
    }
    
    allProducts.push(newProduct);
    filteredProducts = [...allProducts];
    
    // Save to localStorage
    localStorage.setItem('products', JSON.stringify(allProducts));
    
    return newProduct;
}

// Get featured products
function getFeaturedProducts() {
    return allProducts.filter(p => p.featured);
}

// Update product (for admin)
function updateProduct(id, updates) {
    const index = allProducts.findIndex(p => p.id === id);
    if (index !== -1) {
        allProducts[index] = { ...allProducts[index], ...updates };
        filteredProducts = [...allProducts];
        localStorage.setItem('products', JSON.stringify(allProducts));
        return allProducts[index];
    }
    return null;
}

// Delete product (for admin)
function deleteProduct(id) {
    allProducts = allProducts.filter(p => p.id !== id);
    filteredProducts = [...allProducts];
    localStorage.setItem('products', JSON.stringify(allProducts));
}

// Load products from localStorage on startup
function loadProductsFromStorage() {
    const stored = localStorage.getItem('products');
    if (stored) {
        try {
            allProducts = JSON.parse(stored);
            filteredProducts = [...allProducts];
        } catch (e) {
            console.error('Error loading products:', e);
        }
    } else {
        // First time: save default products to localStorage
        localStorage.setItem('products', JSON.stringify(allProducts));
    }
}

// Initialize products
loadProductsFromStorage();

// Export products for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allProducts };
}

// Check admin access on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin page loaded');
    console.log('Site settings:', siteSettings);
    checkAdminPageAccess();
    loadAdminData();
});

// Check if user has admin access
function checkAdminPageAccess() {
    const currentUser = getCurrentUser();
    
    if (!currentUser || currentUser.role !== 'admin') {
        alert('Bạn không có quyền truy cập trang này!\n\nVui lòng đăng nhập với tài khoản admin.');
        window.location.href = 'login.html';
        return;
    }
    
    // Display admin username
    const usernameSpan = document.getElementById('admin-username');
    if (usernameSpan) {
        usernameSpan.textContent = currentUser.username;
    }
}

// Load all admin data
function loadAdminData() {
    loadStats();
    loadProductsTable();
    loadOrdersTable();
    loadUsersTable();
    // Don't load news, promotions, and settings until user navigates to those sections
}

// Load statistics
function loadStats() {
    document.getElementById('stat-products').textContent = allProducts.length;
    document.getElementById('stat-orders').textContent = orders.length;
    document.getElementById('stat-users').textContent = users.length;
    
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    document.getElementById('stat-revenue').textContent = formatPrice(totalRevenue);
}

// Load products table
function loadProductsTable() {
    const tbody = document.getElementById('products-tbody');
    if (!tbody) return;
    
    let html = '';
    allProducts.forEach(product => {
        const featuredBadge = product.featured ? '<i class="fas fa-star" style="color: #ffc107;"></i>' : '-';
        
        html += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${getCategoryName(product.category)}</td>
                <td>${formatPrice(product.price)}</td>
                <td>${product.stock || 0}</td>
                <td style="text-align: center;">${featuredBadge}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="confirmDeleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html || '<tr><td colspan="7" class="text-center">Không có sản phẩm nào</td></tr>';
}

// Load orders table
function loadOrdersTable() {
    const tbody = document.getElementById('orders-tbody');
    if (!tbody) return;
    
    let html = '';
    orders.forEach(order => {
        const date = new Date(order.date).toLocaleDateString('vi-VN');
        const statusClass = order.status === 'pending' ? 'warning' : order.status === 'completed' ? 'success' : 'danger';
        const statusText = order.status === 'pending' ? 'Đang xử lý' : order.status === 'completed' ? 'Hoàn thành' : 'Đã hủy';
        
        html += `
            <tr>
                <td>#${order.id}</td>
                <td>${order.customer.fullname}</td>
                <td>${date}</td>
                <td>${formatPrice(order.total)}</td>
                <td><span class="badge" style="background: var(--${statusClass}); color: white; padding: 5px 10px; border-radius: 4px;">${statusText}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-primary btn-sm" onclick="viewOrder(${order.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="confirmDeleteOrder(${order.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html || '<tr><td colspan="6" class="text-center">Không có đơn hàng nào</td></tr>';
}

// Load users table
function loadUsersTable() {
    const tbody = document.getElementById('users-tbody');
    if (!tbody) return;
    
    let html = '';
    users.forEach(user => {
        const roleClass = user.role === 'admin' ? 'danger' : 'primary';
        const roleText = user.role === 'admin' ? 'Admin' : 'Khách hàng';
        
        html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td><span class="badge" style="background: var(--${roleClass}); color: white; padding: 5px 10px; border-radius: 4px;">${roleText}</span></td>
                <td>
                    <div class="action-buttons">
                        ${user.role !== 'admin' ? `
                            <button class="btn btn-danger btn-sm" onclick="confirmDeleteUser(${user.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        ` : '<span style="color: var(--muted); font-size: 0.85rem;">Không thể xóa</span>'}
                    </div>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html || '<tr><td colspan="5" class="text-center">Không có người dùng nào</td></tr>';
}

// Show section
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
    
    // Show selected section
    document.getElementById('section-' + section).style.display = 'block';
    
    // Update active menu
    document.querySelectorAll('.admin-sidebar a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');
    
    // Load data for specific sections
    if (section === 'news') {
        loadNewsTable();
    } else if (section === 'promotions') {
        loadPromotionsTable();
    } else if (section === 'settings') {
        loadSiteSettingsForm();
    } else if (section === 'orders') {
        loadOrdersTable();
    } else if (section === 'users') {
        loadUsersTable();
    }
}

// Show add product modal
function showAddProductModal() {
    document.getElementById('add-product-modal').classList.add('active');
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId || 'add-product-modal');
    if (modal) {
        modal.classList.remove('active');
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
        }
    }
}

// Handle add product
function handleAddProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const oldPrice = document.getElementById('product-old-price').value;
    const category = document.getElementById('product-category').value;
    const stock = document.getElementById('product-stock').value;
    const description = document.getElementById('product-description').value;
    const featured = document.getElementById('product-featured').checked;
    const imagePreview = document.getElementById('preview-img');
    const image = imagePreview.src || `https://via.placeholder.com/250x200/f7f7f7/0b71c6?text=${encodeURIComponent(name)}`;
    
    const newProduct = addProduct(name, price, category, stock, description, oldPrice, image, featured);
    
    alert('Thêm sản phẩm thành công!\n\nTên: ' + name);
    
    closeModal('add-product-modal');
    loadProductsTable();
    loadStats();
}

// Edit product
function editProduct(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;
    
    const newName = prompt('Nhập tên mới:', product.name);
    if (newName && newName !== product.name) {
        updateProduct(id, { name: newName });
        loadProductsTable();
        alert('Cập nhật sản phẩm thành công!');
    }
}

// Confirm delete product
function confirmDeleteProduct(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;
    
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?\n\n' + product.name)) {
        deleteProduct(id);
        loadProductsTable();
        loadStats();
        alert('Đã xóa sản phẩm!');
    }
}

// View order details
function viewOrder(id) {
    const order = orders.find(o => o.id === id);
    if (!order) return;
    
    document.getElementById('order-id-display').textContent = `#${order.id}`;
    
    const statusOptions = [
        { value: 'pending', label: 'Đang xử lý', color: 'var(--warning)' },
        { value: 'completed', label: 'Hoàn thành', color: 'var(--success)' },
        { value: 'cancelled', label: 'Đã hủy', color: 'var(--danger)' }
    ];
    
    let itemsHtml = '';
    order.items.forEach(item => {
        itemsHtml += `
            <tr>
                <td>${item.name}</td>
                <td style="text-align: center;">${item.quantity}</td>
                <td style="text-align: right;">${formatPrice(item.price)}</td>
                <td style="text-align: right; font-weight: 600;">${formatPrice(item.price * item.quantity)}</td>
            </tr>
        `;
    });
    
    let statusOptionsHtml = '';
    statusOptions.forEach(opt => {
        statusOptionsHtml += `<option value="${opt.value}" ${order.status === opt.value ? 'selected' : ''}>${opt.label}</option>`;
    });
    
    const content = `
        <div style="background: #f8f9fa; padding: 15px; border-radius: var(--radius-md); margin-bottom: 20px;">
            <h4 style="margin: 0 0 15px; color: var(--primary);"><i class="fas fa-user"></i> Thông tin khách hàng</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <p style="margin: 5px 0;"><strong>Họ tên:</strong> ${order.customer.fullname}</p>
                <p style="margin: 5px 0;"><strong>SĐT:</strong> ${order.customer.phone}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${order.customer.email}</p>
                <p style="margin: 5px 0;"><strong>Ngày đặt:</strong> ${new Date(order.date).toLocaleDateString('vi-VN')}</p>
            </div>
            <p style="margin: 10px 0 0;"><strong>Địa chỉ:</strong> ${order.customer.address}</p>
        </div>
        
        <h4 style="margin: 0 0 15px; color: var(--primary);"><i class="fas fa-box"></i> Sản phẩm</h4>
        <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
            <thead>
                <tr style="background: #e9ecef;">
                    <th style="padding: 10px; text-align: left; border: 1px solid #dee2e6;">Sản phẩm</th>
                    <th style="padding: 10px; text-align: center; border: 1px solid #dee2e6; width: 80px;">SL</th>
                    <th style="padding: 10px; text-align: right; border: 1px solid #dee2e6; width: 120px;">Đơn giá</th>
                    <th style="padding: 10px; text-align: right; border: 1px solid #dee2e6; width: 120px;">Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHtml}
            </tbody>
        </table>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: var(--radius-md); margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Tổng phụ:</span>
                <span style="font-weight: 600;">${formatPrice(order.subtotal)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Thuế (VAT 10%):</span>
                <span style="font-weight: 600;">${formatPrice(order.tax)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Phí vận chuyển:</span>
                <span style="font-weight: 600;">${formatPrice(order.shipping)}</span>
            </div>
            <hr style="margin: 10px 0; border: none; border-top: 2px solid #dee2e6;">
            <div style="display: flex; justify-content: space-between;">
                <span style="font-size: 1.1rem; font-weight: 700;">Tổng cộng:</span>
                <span style="font-size: 1.1rem; font-weight: 700; color: var(--accent);">${formatPrice(order.total)}</span>
            </div>
        </div>
        
        <div class="form-group">
            <label><i class="fas fa-info-circle"></i> Trạng thái đơn hàng</label>
            <select id="order-status" class="form-control" onchange="updateOrderStatus(${order.id}, this.value)">
                ${statusOptionsHtml}
            </select>
        </div>
        
        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button class="btn btn-primary" onclick="printOrder(${order.id})" style="flex: 1;">
                <i class="fas fa-print"></i> In đơn hàng
            </button>
            <button class="btn btn-danger" onclick="confirmDeleteOrderFromModal(${order.id})" style="flex: 1;">
                <i class="fas fa-trash"></i> Xóa đơn hàng
            </button>
        </div>
    `;
    
    document.getElementById('order-detail-content').innerHTML = content;
    document.getElementById('order-detail-modal').classList.add('active');
}

// Confirm delete order
function confirmDeleteOrder(id) {
    if (confirm('Bạn có chắc muốn xóa đơn hàng #' + id + '?')) {
        orders = orders.filter(o => o.id !== id);
        localStorage.setItem('orders', JSON.stringify(orders));
        loadOrdersTable();
        loadStats();
        alert('Đã xóa đơn hàng!');
    }
}

// Confirm delete user
function confirmDeleteUser(id) {
    const user = users.find(u => u.id === id);
    if (!user) return;
    
    if (confirm('Bạn có chắc muốn xóa tài khoản này?\n\nUsername: ' + user.username)) {
        users = users.filter(u => u.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsersTable();
        loadStats();
        alert('Đã xóa tài khoản!');
    }
}

// Get category name
function getCategoryName(category) {
    const categories = {
        'cpu': 'CPU',
        'mainboard': 'Mainboard',
        'ram': 'RAM',
        'vga': 'VGA',
        'ssd': 'SSD',
        'psu': 'PSU',
        'case': 'Case',
        'cooling': 'Cooling'
    };
    return categories[category] || category;
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Preview image before upload
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview-img').src = e.target.result;
            document.getElementById('image-preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// Remove selected image
function removeImage() {
    document.getElementById('product-image').value = '';
    document.getElementById('preview-img').src = '';
    document.getElementById('image-preview').style.display = 'none';
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('orders', JSON.stringify(orders));
        loadOrdersTable();
        
        const statusText = newStatus === 'pending' ? 'Đang xử lý' : newStatus === 'completed' ? 'Hoàn thành' : 'Đã hủy';
        alert('Đã cập nhật trạng thái đơn hàng thành: ' + statusText);
    }
}

// Print order
function printOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    let itemsList = '';
    order.items.forEach(item => {
        itemsList += `
            <tr>
                <td>${item.name}</td>
                <td style="text-align: center;">${item.quantity}</td>
                <td style="text-align: right;">${formatPrice(item.price)}</td>
                <td style="text-align: right;">${formatPrice(item.price * item.quantity)}</td>
            </tr>
        `;
    });
    
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Đơn hàng #${order.id} - Shop-D</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #0b71c6; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; }
                th { background: #f2f2f2; text-align: left; }
                .summary { margin-top: 20px; text-align: right; }
                .total { font-size: 1.2em; font-weight: bold; color: #d70018; }
            </style>
        </head>
        <body>
            <h1>Shop-D - Đơn hàng #${order.id}</h1>
            <p><strong>Ngày:</strong> ${new Date(order.date).toLocaleDateString('vi-VN')}</p>
            <hr>
            <h3>Thông tin khách hàng</h3>
            <p><strong>Họ tên:</strong> ${order.customer.fullname}</p>
            <p><strong>Điện thoại:</strong> ${order.customer.phone}</p>
            <p><strong>Email:</strong> ${order.customer.email}</p>
            <p><strong>Địa chỉ:</strong> ${order.customer.address}</p>
            <hr>
            <h3>Chi tiết đơn hàng</h3>
            <table>
                <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th style="text-align: center; width: 80px;">Số lượng</th>
                        <th style="text-align: right; width: 120px;">Đơn giá</th>
                        <th style="text-align: right; width: 120px;">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsList}
                </tbody>
            </table>
            <div class="summary">
                <p>Tổng phụ: ${formatPrice(order.subtotal)}</p>
                <p>Thuế (VAT 10%): ${formatPrice(order.tax)}</p>
                <p>Phí vận chuyển: ${formatPrice(order.shipping)}</p>
                <hr>
                <p class="total">Tổng cộng: ${formatPrice(order.total)}</p>
            </div>
            <hr>
            <p style="text-align: center; margin-top: 40px;">Cảm ơn quý khách đã mua hàng tại Shop-D!</p>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Confirm delete order from modal
function confirmDeleteOrderFromModal(id) {
    if (confirm('Bạn có chắc muốn xóa đơn hàng #' + id + '?')) {
        orders = orders.filter(o => o.id !== id);
        localStorage.setItem('orders', JSON.stringify(orders));
        closeModal('order-detail-modal');
        loadOrdersTable();
        loadStats();
        alert('Đã xóa đơn hàng!');
    }
}

// ========== NEWS MANAGEMENT ==========

// Load news table
function loadNewsTable() {
    const tbody = document.getElementById('news-tbody');
    if (!tbody) return;
    
    let html = '';
    allNews.forEach(news => {
        const date = new Date(news.date).toLocaleDateString('vi-VN');
        const featuredBadge = news.featured ? '<i class="fas fa-star" style="color: #ffc107;"></i>' : '-';
        
        html += `
            <tr>
                <td>${news.id}</td>
                <td>${news.title}</td>
                <td>${news.category}</td>
                <td>${news.views}</td>
                <td style="text-align: center;">${featuredBadge}</td>
                <td>${date}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-warning btn-sm" onclick="editNews(${news.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="confirmDeleteNews(${news.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html || '<tr><td colspan="7" class="text-center">Chưa có tin tức nào</td></tr>';
}

// Show add news modal
function showAddNewsModal() {
    document.getElementById('add-news-modal').classList.add('active');
}

// Handle add news
function handleAddNews(event) {
    event.preventDefault();
    
    const title = document.getElementById('news-title').value;
    const excerpt = document.getElementById('news-excerpt').value;
    const content = document.getElementById('news-content').value;
    const category = document.getElementById('news-category').value;
    const featured = document.getElementById('news-featured').checked;
    const imagePreview = document.getElementById('news-preview-img');
    const image = imagePreview.src || null;
    
    addNews(title, excerpt, content, image, category, featured);
    
    alert('Thêm tin tức thành công!');
    closeModal('add-news-modal');
    loadNewsTable();
}

// Preview news image
function previewNewsImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('news-preview-img').src = e.target.result;
            document.getElementById('news-image-preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// Edit news
function editNews(id) {
    const news = getNewsById(id);
    if (!news) return;
    
    const newTitle = prompt('Nhập tiêu đề mới:', news.title);
    if (newTitle && newTitle !== news.title) {
        updateNews(id, { title: newTitle });
        loadNewsTable();
        alert('Cập nhật tin tức thành công!');
    }
}

// Confirm delete news
function confirmDeleteNews(id) {
    const news = getNewsById(id);
    if (!news) return;
    
    if (confirm('Bạn có chắc muốn xóa tin tức này?\n\n' + news.title)) {
        deleteNews(id);
        loadNewsTable();
        alert('Đã xóa tin tức!');
    }
}

// ========== PROMOTIONS MANAGEMENT ==========

// Load promotions table
function loadPromotionsTable() {
    const tbody = document.getElementById('promotions-tbody');
    if (!tbody) return;
    
    let html = '';
    allPromotions.forEach(promo => {
        const startDate = new Date(promo.startDate).toLocaleDateString('vi-VN');
        const endDate = new Date(promo.endDate).toLocaleDateString('vi-VN');
        const statusBadge = promo.active ? '<span style="color: var(--success);">Hoạt động</span>' : '<span style="color: var(--muted);">Tắt</span>';
        
        html += `
            <tr>
                <td>${promo.id}</td>
                <td>${promo.title}</td>
                <td>${promo.discountPercent}%</td>
                <td>${promo.type}</td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${statusBadge}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-warning btn-sm" onclick="togglePromotion(${promo.id})">
                            <i class="fas fa-toggle-${promo.active ? 'on' : 'off'}"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="confirmDeletePromotion(${promo.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html || '<tr><td colspan="8" class="text-center">Chưa có khuyến mãi nào</td></tr>';
}

// Show add promotion modal
function showAddPromotionModal() {
    document.getElementById('add-promotion-modal').classList.add('active');
}

// Handle add promotion
function handleAddPromotion(event) {
    event.preventDefault();
    
    const title = document.getElementById('promo-title').value;
    const description = document.getElementById('promo-description').value;
    const discount = document.getElementById('promo-discount').value;
    const type = document.getElementById('promo-type').value;
    const startDate = document.getElementById('promo-start').value;
    const endDate = document.getElementById('promo-end').value;
    const imagePreview = document.getElementById('promo-preview-img');
    const image = imagePreview.src || null;
    
    addPromotion(title, description, image, discount, startDate, endDate, type);
    
    alert('Thêm khuyến mãi thành công!');
    closeModal('add-promotion-modal');
    loadPromotionsTable();
}

// Preview promotion image
function previewPromoImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('promo-preview-img').src = e.target.result;
            document.getElementById('promo-image-preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// Toggle promotion active status
function togglePromotion(id) {
    const promo = allPromotions.find(p => p.id === id);
    if (promo) {
        promo.active = !promo.active;
        savePromotionsToStorage();
        loadPromotionsTable();
    }
}

// Confirm delete promotion
function confirmDeletePromotion(id) {
    const promo = allPromotions.find(p => p.id === id);
    if (!promo) return;
    
    if (confirm('Bạn có chắc muốn xóa khuyến mãi này?\n\n' + promo.title)) {
        deletePromotion(id);
        loadPromotionsTable();
        alert('Đã xóa khuyến mãi!');
    }
}

// ========== SITE SETTINGS MANAGEMENT ==========

// Load site settings
function loadSiteSettingsForm() {
    const sitenameInput = document.getElementById('setting-sitename');
    const titleInput = document.getElementById('setting-title');
    const descInput = document.getElementById('setting-description');
    const phoneInput = document.getElementById('setting-phone');
    const emailInput = document.getElementById('setting-email');
    const addressInput = document.getElementById('setting-address');
    
    if (!sitenameInput) {
        console.warn('Setting form elements not found - section may not be visible yet');
        return;
    }
    
    try {
        sitenameInput.value = siteSettings.siteName || '';
        titleInput.value = siteSettings.siteTitle || '';
        descInput.value = siteSettings.siteDescription || '';
        phoneInput.value = siteSettings.phone || '';
        emailInput.value = siteSettings.email || '';
        addressInput.value = siteSettings.address || '';
        
        loadBannersList();
        console.log('Site settings loaded successfully');
    } catch (error) {
        console.error('Error loading site settings:', error);
    }
}

// Load banners list
function loadBannersList() {
    const container = document.getElementById('banners-list');
    if (!container) return;
    
    let html = '';
    siteSettings.banners.forEach(banner => {
        const statusBadge = banner.active ? '<span style="color: var(--success);">✓ Hoạt động</span>' : '<span style="color: var(--muted);">✗ Tắt</span>';
        
        html += `
            <div style="background: #f8f9fa; padding: 15px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>${banner.title}</strong><br>
                    <small style="color: var(--muted);">Link: ${banner.link} | ${statusBadge}</small>
                </div>
                <div class="action-buttons">
                    <button class="btn btn-warning btn-sm" onclick="toggleBanner(${banner.id})">
                        <i class="fas fa-toggle-${banner.active ? 'on' : 'off'}"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="confirmDeleteBanner(${banner.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html || '<p style="color: var(--muted);">Chưa có banner nào</p>';
}

// Handle update settings
function handleUpdateSettings(event) {
    event.preventDefault();
    
    const updates = {
        siteName: document.getElementById('setting-sitename').value,
        siteTitle: document.getElementById('setting-title').value,
        siteDescription: document.getElementById('setting-description').value,
        phone: document.getElementById('setting-phone').value,
        email: document.getElementById('setting-email').value,
        address: document.getElementById('setting-address').value
    };
    
    updateSiteSettings(updates);
    alert('Cập nhật cài đặt thành công!');
}

// Show add banner modal
function showAddBannerModal() {
    document.getElementById('add-banner-modal').classList.add('active');
}

// Handle add banner
function handleAddBanner(event) {
    event.preventDefault();
    
    const title = document.getElementById('banner-title').value;
    const link = document.getElementById('banner-link').value;
    const imagePreview = document.getElementById('banner-preview-img');
    const image = imagePreview.src;
    
    addBanner(title, image, link);
    
    alert('Thêm banner thành công!');
    closeModal('add-banner-modal');
    loadBannersList();
}

// Preview banner image
function previewBannerImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('banner-preview-img').src = e.target.result;
            document.getElementById('banner-image-preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// Toggle banner active status
function toggleBanner(id) {
    const banner = siteSettings.banners.find(b => b.id === id);
    if (banner) {
        banner.active = !banner.active;
        saveSiteSettings();
        loadBannersList();
    }
}

// Confirm delete banner
function confirmDeleteBanner(id) {
    if (confirm('Bạn có chắc muốn xóa banner này?')) {
        deleteBanner(id);
        loadBannersList();
        alert('Đã xóa banner!');
    }
}

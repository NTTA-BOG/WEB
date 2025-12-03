// Promotions data
let allPromotions = [
    {
        id: 1,
        title: 'Flash Sale - Giảm đến 30%',
        description: 'Giảm giá sốc các sản phẩm CPU, VGA trong 24h',
        image: 'https://via.placeholder.com/400x200/d70018/ffffff?text=Flash+Sale',
        discountPercent: 30,
        startDate: new Date('2025-12-01').getTime(),
        endDate: new Date('2025-12-31').getTime(),
        active: true,
        type: 'flash-sale'
    },
    {
        id: 2,
        title: 'Hàng mới về - Mainboard X670',
        description: 'Hàng mới về với giá ưu đãi đặc biệt',
        image: 'https://via.placeholder.com/400x200/0b71c6/ffffff?text=New+Arrival',
        discountPercent: 15,
        startDate: new Date('2025-12-01').getTime(),
        endDate: new Date('2025-12-25').getTime(),
        active: true,
        type: 'new-arrival'
    },
    {
        id: 3,
        title: 'Giảm giá sốc - SSD & RAM',
        description: 'Combo SSD + RAM giảm ngay 20%',
        image: 'https://via.placeholder.com/400x200/28a745/ffffff?text=Discount',
        discountPercent: 20,
        startDate: new Date('2025-11-25').getTime(),
        endDate: new Date('2025-12-20').getTime(),
        active: true,
        type: 'discount'
    },
    {
        id: 4,
        title: 'Combo tiết kiệm - Build PC trọn bộ',
        description: 'Mua trọn bộ PC giảm thêm 10%',
        image: 'https://via.placeholder.com/400x200/ffc107/ffffff?text=Combo',
        discountPercent: 10,
        startDate: new Date('2025-12-01').getTime(),
        endDate: new Date('2025-12-30').getTime(),
        active: true,
        type: 'combo'
    }
];

// Load promotions from localStorage
function loadPromotionsFromStorage() {
    const stored = localStorage.getItem('promotions');
    if (stored) {
        try {
            allPromotions = JSON.parse(stored);
        } catch (e) {
            console.error('Error loading promotions:', e);
        }
    } else {
        // First time: save default promotions to localStorage
        localStorage.setItem('promotions', JSON.stringify(allPromotions));
    }
}

// Save promotions to localStorage
function savePromotionsToStorage() {
    localStorage.setItem('promotions', JSON.stringify(allPromotions));
}

// Add promotion
function addPromotion(title, description, image, discountPercent, startDate, endDate, type) {
    const newId = Math.max(...allPromotions.map(p => p.id), 0) + 1;
    
    const newPromotion = {
        id: newId,
        title: title,
        description: description,
        image: image || 'https://via.placeholder.com/400x200/0b71c6/ffffff?text=Promotion',
        discountPercent: parseInt(discountPercent) || 0,
        startDate: new Date(startDate).getTime(),
        endDate: new Date(endDate).getTime(),
        active: true,
        type: type || 'discount'
    };
    
    allPromotions.unshift(newPromotion);
    savePromotionsToStorage();
    return newPromotion;
}

// Update promotion
function updatePromotion(id, updates) {
    const index = allPromotions.findIndex(p => p.id === id);
    if (index !== -1) {
        allPromotions[index] = { ...allPromotions[index], ...updates };
        savePromotionsToStorage();
        return allPromotions[index];
    }
    return null;
}

// Delete promotion
function deletePromotion(id) {
    allPromotions = allPromotions.filter(p => p.id !== id);
    savePromotionsToStorage();
}

// Get active promotions
function getActivePromotions() {
    const now = Date.now();
    return allPromotions.filter(p => p.active && p.startDate <= now && p.endDate >= now);
}

// Initialize
loadPromotionsFromStorage();

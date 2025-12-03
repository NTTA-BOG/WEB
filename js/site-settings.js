// Site settings data
let siteSettings = {
    siteName: 'Shop-D',
    siteTitle: 'Shop-D - Linh kiện PC chính hãng',
    siteDescription: 'Chuyên cung cấp linh kiện máy tính chính hãng với giá tốt nhất',
    siteLogo: 'https://via.placeholder.com/150x50/0b71c6/ffffff?text=Shop-D',
    siteFavicon: 'https://via.placeholder.com/32x32/0b71c6/ffffff?text=SD',
    
    // Contact info
    phone: '1900 xxxx',
    email: 'contact@shop-d.com',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    
    // Social media
    facebook: 'https://facebook.com/shop-d',
    youtube: 'https://youtube.com/shop-d',
    zalo: '0123456789',
    
    // Banner settings
    banners: [
        {
            id: 1,
            title: 'Khuyến mãi lớn cuối năm',
            image: 'https://via.placeholder.com/1200x400/0b71c6/ffffff?text=Banner+1',
            link: 'products.html',
            active: true,
            order: 1
        },
        {
            id: 2,
            title: 'Sản phẩm mới về',
            image: 'https://via.placeholder.com/1200x400/d70018/ffffff?text=Banner+2',
            link: 'products.html?cat=cpu',
            active: true,
            order: 2
        }
    ],
    
    // SEO settings
    metaKeywords: 'linh kiện PC, máy tính, gaming, CPU, VGA, RAM',
    metaAuthor: 'Shop-D',
    
    // Business settings
    taxRate: 10, // VAT 10%
    shippingFee: 50000,
    freeShippingThreshold: 5000000,
    
    // Display settings
    productsPerPage: 12,
    featuredProductsCount: 4,
    newProductsDays: 30
};

// Load settings from localStorage
function loadSiteSettings() {
    const stored = localStorage.getItem('siteSettings');
    if (stored) {
        try {
            siteSettings = { ...siteSettings, ...JSON.parse(stored) };
        } catch (e) {
            console.error('Error loading site settings:', e);
        }
    } else {
        // First time: save default settings to localStorage
        localStorage.setItem('siteSettings', JSON.stringify(siteSettings));
    }
}

// Save settings to localStorage
function saveSiteSettings() {
    localStorage.setItem('siteSettings', JSON.stringify(siteSettings));
}

// Update settings
function updateSiteSettings(updates) {
    siteSettings = { ...siteSettings, ...updates };
    saveSiteSettings();
    return siteSettings;
}

// Add banner
function addBanner(title, image, link) {
    const newId = Math.max(...siteSettings.banners.map(b => b.id), 0) + 1;
    const newOrder = siteSettings.banners.length + 1;
    
    const newBanner = {
        id: newId,
        title: title,
        image: image,
        link: link || '#',
        active: true,
        order: newOrder
    };
    
    siteSettings.banners.push(newBanner);
    saveSiteSettings();
    return newBanner;
}

// Update banner
function updateBanner(id, updates) {
    const index = siteSettings.banners.findIndex(b => b.id === id);
    if (index !== -1) {
        siteSettings.banners[index] = { ...siteSettings.banners[index], ...updates };
        saveSiteSettings();
        return siteSettings.banners[index];
    }
    return null;
}

// Delete banner
function deleteBanner(id) {
    siteSettings.banners = siteSettings.banners.filter(b => b.id !== id);
    saveSiteSettings();
}

// Get active banners
function getActiveBanners() {
    return siteSettings.banners.filter(b => b.active).sort((a, b) => a.order - b.order);
}

// Update footer and header information on all pages
function updateFooterInfo() {
    // Update top bar phone
    const topbarPhone = document.getElementById('topbar-phone-text');
    if (topbarPhone) {
        topbarPhone.textContent = siteSettings.phone;
        const topbarLink = document.getElementById('topbar-phone');
        if (topbarLink) {
            topbarLink.href = 'tel:' + siteSettings.phone.replace(/\s/g, '');
        }
    }
    
    // Try to find elements with IDs first
    let siteName = document.getElementById('footer-site-name');
    let description = document.getElementById('footer-description');
    let phone = document.getElementById('footer-phone');
    let email = document.getElementById('footer-email');
    let address = document.getElementById('footer-address');
    
    // Use IDs if available
    if (siteName) siteName.textContent = siteSettings.siteName;
    if (description) description.textContent = siteSettings.siteDescription;
    if (phone) phone.textContent = siteSettings.phone;
    if (email) email.textContent = siteSettings.email;
    if (address) address.textContent = siteSettings.address;
    
    // If no IDs found, try to find by content matching in footer
    if (!siteName || !phone || !email || !address) {
        const footer = document.querySelector('.site-footer');
        if (footer) {
            // Find and replace phone number
            const phoneElements = footer.querySelectorAll('p');
            phoneElements.forEach(p => {
                if (p.textContent.includes('0862.412.914') || p.textContent.includes('Hotline')) {
                    p.innerHTML = p.innerHTML.replace(/0862\.412\.914|1900 xxxx/, siteSettings.phone);
                }
                if (p.textContent.includes('contact@shop-d')) {
                    p.innerHTML = p.innerHTML.replace(/contact@shop-d\.vn|contact@shop-d\.com/, siteSettings.email);
                }
                if (p.textContent.includes('28/5H') || p.textContent.includes('123 Đường ABC')) {
                    p.innerHTML = p.innerHTML.replace(/28\/5H|123 Đường ABC, Quận 1, TP\.HCM/, siteSettings.address);
                }
            });
            
            // Find and replace site name and description
            const h4Elements = footer.querySelectorAll('h4');
            h4Elements.forEach(h4 => {
                if (h4.textContent.trim() === 'SHOP-D' || h4.textContent.trim() === siteSettings.siteName) {
                    h4.textContent = siteSettings.siteName;
                    const nextP = h4.nextElementSibling;
                    if (nextP && nextP.tagName === 'P' && nextP.textContent.includes('Chuyên cung cấp')) {
                        nextP.textContent = siteSettings.siteDescription;
                    }
                }
            });
        }
        
        // Also update top bar if no ID found
        if (!topbarPhone) {
            const topBar = document.querySelector('.top-bar');
            if (topBar) {
                const links = topBar.querySelectorAll('a');
                links.forEach(link => {
                    if (link.textContent.includes('0862.412.914') || link.textContent.includes('Hotline')) {
                        link.innerHTML = link.innerHTML.replace(/0862\.412\.914|1900 xxxx/, siteSettings.phone);
                        link.href = 'tel:' + siteSettings.phone.replace(/\s/g, '');
                    }
                });
            }
        }
    }
}

// Initialize
loadSiteSettings();

// Auto-update footer when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateFooterInfo();
});

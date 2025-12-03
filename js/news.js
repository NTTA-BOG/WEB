// News data
let allNews = [
    {
        id: 1,
        title: 'Ra mắt dòng CPU Intel Core thế hệ 14 - Hiệu năng vượt trội',
        slug: 'ra-mat-cpu-intel-core-gen-14',
        excerpt: 'Intel chính thức giới thiệu bộ vi xử lý thế hệ 14 với hiệu năng cải tiến đáng kể so với thế hệ trước.',
        content: 'Nội dung chi tiết về tin tức...',
        image: 'https://via.placeholder.com/800x400/0b71c6/ffffff?text=Intel+Core+Gen+14',
        author: 'Admin',
        category: 'tin-tuc',
        views: 1250,
        date: new Date('2025-12-01').getTime(),
        featured: true
    },
    {
        id: 2,
        title: 'NVIDIA RTX 4090 - Card đồ họa mạnh nhất hiện nay',
        slug: 'nvidia-rtx-4090-review',
        excerpt: 'Đánh giá chi tiết về hiệu năng và tính năng của card đồ họa RTX 4090.',
        content: 'Nội dung chi tiết về tin tức...',
        image: 'https://via.placeholder.com/800x400/76b900/ffffff?text=RTX+4090',
        author: 'Admin',
        category: 'danh-gia',
        views: 2100,
        date: new Date('2025-11-28').getTime(),
        featured: true
    },
    {
        id: 3,
        title: 'Hướng dẫn build PC gaming trong tầm giá 20 triệu',
        slug: 'huong-dan-build-pc-20-trieu',
        excerpt: 'Tổng hợp cấu hình PC gaming tối ưu với ngân sách 20 triệu đồng.',
        content: 'Nội dung chi tiết về tin tức...',
        image: 'https://via.placeholder.com/800x400/d70018/ffffff?text=PC+Gaming',
        author: 'Admin',
        category: 'huong-dan',
        views: 3500,
        date: new Date('2025-11-25').getTime(),
        featured: false
    }
];

// Load news from localStorage
function loadNewsFromStorage() {
    const stored = localStorage.getItem('news');
    if (stored) {
        try {
            allNews = JSON.parse(stored);
        } catch (e) {
            console.error('Error loading news:', e);
        }
    } else {
        // First time: save default news to localStorage
        localStorage.setItem('news', JSON.stringify(allNews));
    }
}

// Save news to localStorage
function saveNewsToStorage() {
    localStorage.setItem('news', JSON.stringify(allNews));
}

// Add news
function addNews(title, excerpt, content, image, category, featured) {
    const newId = Math.max(...allNews.map(n => n.id), 0) + 1;
    const slug = title.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
    
    const newNews = {
        id: newId,
        title: title,
        slug: slug,
        excerpt: excerpt,
        content: content,
        image: image || 'https://via.placeholder.com/800x400/0b71c6/ffffff?text=News',
        author: 'Admin',
        category: category || 'tin-tuc',
        views: 0,
        date: Date.now(),
        featured: featured || false
    };
    
    allNews.unshift(newNews);
    saveNewsToStorage();
    return newNews;
}

// Update news
function updateNews(id, updates) {
    const index = allNews.findIndex(n => n.id === id);
    if (index !== -1) {
        allNews[index] = { ...allNews[index], ...updates };
        saveNewsToStorage();
        return allNews[index];
    }
    return null;
}

// Delete news
function deleteNews(id) {
    allNews = allNews.filter(n => n.id !== id);
    saveNewsToStorage();
}

// Get news by ID
function getNewsById(id) {
    return allNews.find(n => n.id === id);
}

// Get featured news
function getFeaturedNews() {
    return allNews.filter(n => n.featured);
}

// Initialize
loadNewsFromStorage();

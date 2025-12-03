// Authentication and user display functions

// Check if user is logged in and display name in header
function checkUserLogin() {
    const currentUser = localStorage.getItem('currentUser');
    const userMenu = document.getElementById('user-menu');
    const userName = document.getElementById('user-name');
    
    if (!userMenu || !userName) return;
    
    if (currentUser) {
        const user = JSON.parse(currentUser);
        userName.textContent = `Xin chào, ${user.username}`;
        userName.style.display = 'inline';
        userMenu.title = 'Tài khoản';
        userMenu.style.background = '#0b71c6';
        userMenu.style.color = 'white';
        userMenu.style.padding = '8px 15px';
        userMenu.style.borderRadius = '5px';
        userMenu.style.position = 'relative';
        
        // Create dropdown menu
        const dropdown = document.createElement('div');
        dropdown.id = 'user-dropdown';
        dropdown.style.display = 'none';
        dropdown.style.position = 'absolute';
        dropdown.style.top = '100%';
        dropdown.style.right = '0';
        dropdown.style.marginTop = '10px';
        dropdown.style.background = 'white';
        dropdown.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        dropdown.style.borderRadius = '8px';
        dropdown.style.minWidth = '200px';
        dropdown.style.zIndex = '1000';
        dropdown.style.overflow = 'hidden';
        
        dropdown.innerHTML = `
            <div style="padding: 15px; border-bottom: 1px solid #e0e0e0;">
                <div style="font-weight: 600; color: #222; margin-bottom: 5px;">${user.username}</div>
                <div style="font-size: 0.85rem; color: #666;">${user.email || 'user@shop-d.vn'}</div>
            </div>
            <a href="#" id="logout-btn" style="display: block; padding: 12px 15px; color: #d70018; text-decoration: none; font-weight: 500; transition: background 0.2s;">
                <i class="fas fa-sign-out-alt"></i> Đăng xuất
            </a>
        `;
        
        // Remove old dropdown if exists
        const oldDropdown = document.getElementById('user-dropdown');
        if (oldDropdown) oldDropdown.remove();
        
        userMenu.appendChild(dropdown);
        
        // Toggle dropdown on click
        userMenu.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        };
        
        // Logout button
        document.getElementById('logout-btn').onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            logout();
        };
        
        // Hover effect for logout button
        document.getElementById('logout-btn').onmouseover = function() {
            this.style.background = '#f8f9fa';
        };
        document.getElementById('logout-btn').onmouseout = function() {
            this.style.background = 'transparent';
        };
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!userMenu.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    }
}

// Logout function
function logout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    checkUserLogin();
});

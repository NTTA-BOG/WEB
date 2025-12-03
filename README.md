# SHOP-D - Website Thương Mại Điện Tử Linh Kiện PC

Website thương mại điện tử bán linh kiện PC với đầy đủ tính năng quản lý sản phẩm, giỏ hàng, đơn hàng và quản trị hệ thống.

## 🎯 Tính năng chính

### Khách hàng:
- ✅ Trang chủ với banner, danh mục nổi bật, thanh tìm kiếm và menu điều hướng
- ✅ Trang giới thiệu về shop (lịch sử, sứ mệnh, giá trị, hình ảnh)
- ✅ Trang danh sách sản phẩm với bộ lọc theo danh mục và giá
- ✅ Trang chi tiết sản phẩm với hình lớn, mô tả, giá và nút "Thêm vào giỏ"
- ✅ Trang giỏ hàng: thêm/xóa/sửa số lượng, tính tổng phụ, thuế VAT (10%), phí ship cố định (50,000đ)
- ✅ Form đặt hàng với thông tin khách hàng và tóm tắt đơn hàng
- ✅ Trang liên hệ với địa chỉ, email, hotline, form gửi tin nhắn
- ✅ Trang đăng nhập/đăng ký với form hiện đại
- ✅ Footer với thông tin liên hệ, chính sách, liên kết mạng xã hội

### Admin:
- ✅ Thêm và xóa sản phẩm
- ✅ Quản lý tài khoản người dùng
- ✅ Quản lý đơn hàng
- ✅ Thống kê tổng quan (sản phẩm, đơn hàng, khách hàng, doanh thu)

### Thiết kế:
- ✅ Màu chủ đạo xanh dương (#0b71c6) thống nhất
- ✅ Font Inter dễ đọc, hiện đại
- ✅ Responsive design
- ✅ Chat widget (Facebook, Zalo)

## 📁 Cấu trúc dự án

```
f:\Web\
├── index.html              # Trang chủ
├── about.html              # Giới thiệu
├── products.html           # Danh sách sản phẩm
├── product-detail.html     # Chi tiết sản phẩm
├── cart.html               # Giỏ hàng & đặt hàng
├── contact.html            # Liên hệ
├── login.html              # Đăng nhập/Đăng ký
├── admin.html              # Quản trị
├── css/
│   ├── variables.css       # Biến CSS (màu sắc, spacing, v.v.)
│   ├── base.css           # Styles cơ bản
│   ├── layout.css         # Layout
│   └── components.css     # Components (header, footer, cards, v.v.)
├── js/
│   ├── main.js            # JavaScript chính (giỏ hàng, đăng nhập, v.v.)
│   └── products.js        # Dữ liệu và logic sản phẩm
└── images/                # Thư mục hình ảnh
```

## 🚀 Hướng dẫn sử dụng

### 1. Mở website
Mở file `index.html` trong trình duyệt web.

### 2. Duyệt sản phẩm
- Xem danh sách sản phẩm tại trang "Sản phẩm"
- Lọc theo danh mục: CPU, RAM, VGA, SSD, v.v.
- Lọc theo khoảng giá
- Sắp xếp theo tên hoặc giá

### 3. Thêm vào giỏ hàng
- Click vào sản phẩm để xem chi tiết
- Click "Thêm vào giỏ" hoặc "Mua ngay"
- Giỏ hàng tự động cập nhật số lượng

### 4. Đặt hàng
- Vào trang Giỏ hàng
- Điều chỉnh số lượng sản phẩm
- Click "Tiến hành đặt hàng"
- Điền thông tin giao hàng
- Chọn phương thức thanh toán (COD hoặc chuyển khoản)
- Xác nhận đặt hàng

### 5. Đăng nhập/Đăng ký
**Tài khoản Admin demo:**
- Tên đăng nhập: `admin`
- Mật khẩu: `admin123`

**Tài khoản User demo:**
- Tên đăng nhập: `user1`
- Mật khẩu: `123456`

### 6. Quản trị (Admin)
- Đăng nhập với tài khoản admin
- Truy cập trang "Quản trị"
- Quản lý sản phẩm: thêm, xóa sản phẩm
- Xem danh sách đơn hàng
- Quản lý tài khoản người dùng

## 💾 Dữ liệu

Website sử dụng **LocalStorage** để lưu trữ dữ liệu:
- `cart`: Giỏ hàng
- `products`: Danh sách sản phẩm
- `users`: Tài khoản người dùng
- `orders`: Đơn hàng
- `currentUser`: Người dùng đang đăng nhập

## 🎨 Tùy chỉnh màu sắc

Để thay đổi màu chủ đạo, chỉnh sửa file `css/variables.css`:

```css
:root {
    --primary: #0b71c6;     /* Màu chủ đạo */
    --accent: #d70018;       /* Màu nhấn */
    --success: #28a745;      /* Màu thành công */
    /* ... */
}
```

## 📦 Sản phẩm mẫu

Website đã có sẵn 32 sản phẩm mẫu thuộc các danh mục:
- CPU (Intel, AMD)
- Card màn hình (NVIDIA, AMD)
- RAM (DDR4, DDR5)
- SSD (NVMe, M.2)
- Mainboard
- Nguồn máy tính (PSU)
- Vỏ case
- Tản nhiệt

## 🌐 Trình duyệt hỗ trợ

- Google Chrome (khuyến nghị)
- Mozilla Firefox
- Microsoft Edge
- Safari

## 📱 Responsive Design

Website tương thích với các thiết bị:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ⚙️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và layout
- **JavaScript (Vanilla)**: Logic và tương tác
- **Font Awesome**: Icons
- **Google Fonts (Inter)**: Typography
- **LocalStorage API**: Lưu trữ dữ liệu

## 📞 Thông tin liên hệ

- **Hotline**: 0862.412.914
- **Email**: contact@shop-d.vn
- **Địa chỉ**: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
- **Giờ làm việc**: 8:00 - 21:00 (Hàng ngày)

## 📝 Ghi chú

- Website này là bản demo, chưa tích hợp payment gateway thật
- Dữ liệu được lưu trên LocalStorage, sẽ bị xóa khi clear cache trình duyệt
- Để triển khai thực tế, cần kết nối backend API và database
- Các hình ảnh sản phẩm đang sử dụng placeholder, cần thay thế bằng hình thật

## 🔐 Bảo mật

**Lưu ý quan trọng**: 
- Mật khẩu hiện được lưu dạng plain text trong LocalStorage
- Trong môi trường production, cần:
  - Hash mật khẩu (bcrypt, argon2)
  - Sử dụng HTTPS
  - Triển khai session management
  - Xác thực JWT hoặc OAuth

## 🚧 Phát triển thêm

Các tính năng có thể mở rộng:
- [ ] Đánh giá và bình luận sản phẩm
- [ ] Wishlist (Danh sách yêu thích)
- [ ] So sánh sản phẩm
- [ ] Live chat support
- [ ] Tích hợp thanh toán online
- [ ] Email notifications
- [ ] Tracking đơn hàng
- [ ] Voucher/Coupon system
- [ ] Blog/Tin tức

---

**Phiên bản**: 1.0.0  
**Ngày tạo**: 04/12/2025  
**Tác giả**: Shop-D Team

© 2025 Shop-D. All rights reserved.

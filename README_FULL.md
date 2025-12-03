# SHOP-D - Hệ Thống Thương Mại Điện Tử Linh Kiện PC

Website thương mại điện tử bán linh kiện PC với hệ thống CMS quản trị hoàn chỉnh.

## 🎯 Tính năng chính

### 👥 Giao diện khách hàng:
- ✅ **Trang chủ**: Banner động, danh mục nổi bật, sản phẩm nổi bật (tự động từ admin)
- ✅ **Giới thiệu**: Lịch sử hình thành, sứ mệnh, giá trị, hình ảnh cửa hàng
- ✅ **Danh sách sản phẩm**: Bộ lọc theo danh mục, giá, sắp xếp, pagination
- ✅ **Chi tiết sản phẩm**: Hình ảnh lớn, mô tả chi tiết, thông số kỹ thuật
- ✅ **Giỏ hàng**: Thêm/xóa/cập nhật số lượng, tính tổng tự động (VAT 10%, ship 50K)
- ✅ **Đặt hàng**: Form thông tin khách hàng, tóm tắt đơn hàng
- ✅ **Liên hệ**: Địa chỉ, email, hotline, form gửi tin nhắn, Google Maps
- ✅ **Đăng nhập/Đăng ký**: Form hiện đại, social login buttons

### 🔐 Hệ thống quản trị (Admin):

#### 1. **Quản lý sản phẩm** 📦
- ✅ Thêm sản phẩm mới với upload hình ảnh (base64)
- ✅ Chỉnh sửa thông tin sản phẩm
- ✅ Xóa sản phẩm
- ✅ **Đánh dấu sản phẩm nổi bật** ⭐ (hiển thị ở trang chủ)
- ✅ Quản lý giá cũ để hiển thị giảm giá
- ✅ Quản lý tồn kho
- ✅ Thêm mô tả chi tiết sản phẩm

#### 2. **Quản lý đơn hàng** 🛒
- ✅ Xem danh sách đơn hàng
- ✅ Chi tiết đơn hàng với modal đẹp
- ✅ **Cập nhật trạng thái** (Đang xử lý / Hoàn thành / Đã hủy)
- ✅ **In đơn hàng** (mở cửa sổ in chuyên nghiệp)
- ✅ Xóa đơn hàng
- ✅ Xem thông tin khách hàng đầy đủ

#### 3. **Quản lý tin tức** 📰
- ✅ Thêm/Sửa/Xóa tin tức
- ✅ Upload hình ảnh tin tức
- ✅ Phân loại theo danh mục (Tin tức, Đánh giá, Hướng dẫn, Khuyến mãi)
- ✅ **Đánh dấu tin nổi bật** ⭐
- ✅ Tự động tạo slug từ tiêu đề
- ✅ Đếm lượt xem

#### 4. **Quản lý khuyến mãi** 🏷️
- ✅ Thêm/Sửa/Xóa chương trình khuyến mãi
- ✅ Upload banner khuyến mãi
- ✅ Thiết lập phần trăm giảm giá
- ✅ Phân loại (Flash Sale, Hàng mới về, Giảm giá sốc, Combo)
- ✅ Thiết lập thời gian (từ ngày - đến ngày)
- ✅ Bật/tắt khuyến mãi

#### 5. **Cài đặt website** ⚙️
- ✅ Thông tin chung (Tên site, tiêu đề, mô tả)
- ✅ Thông tin liên hệ (SĐT, email, địa chỉ)
- ✅ **Quản lý Banner trang chủ**:
  - Upload banner mới (khuyến nghị 1200x400px)
  - Thiết lập link đích
  - Bật/tắt banner
  - Sắp xếp thứ tự hiển thị
- ✅ SEO settings (keywords, meta tags)
- ✅ Cài đặt kinh doanh (thuế, phí ship, miễn phí ship)

#### 6. **Quản lý tài khoản** 👥
- ✅ Xem danh sách người dùng
- ✅ Phân quyền (Admin / Khách hàng)
- ✅ Xóa tài khoản (không thể xóa admin)

#### 7. **Thống kê tổng quan** 📊
- ✅ Tổng sản phẩm
- ✅ Tổng đơn hàng
- ✅ Tổng khách hàng
- ✅ Tổng doanh thu

## 📁 Cấu trúc dự án

```
f:\Web\
├── index.html              # Trang chủ (sản phẩm nổi bật động)
├── about.html              # Giới thiệu
├── products.html           # Danh sách sản phẩm
├── product-detail.html     # Chi tiết sản phẩm
├── cart.html               # Giỏ hàng & đặt hàng
├── contact.html            # Liên hệ
├── login.html              # Đăng nhập/Đăng ký
├── admin.html              # ⭐ Trang quản trị CMS
├── css/
│   ├── variables.css       # CSS Variables
│   ├── base.css           # Base styles
│   ├── layout.css         # Layouts
│   └── components.css     # Components
├── js/
│   ├── main.js            # Core functions (cart, auth)
│   ├── products.js        # ⭐ Products management (với featured)
│   ├── news.js            # ⭐ News management
│   ├── promotions.js      # ⭐ Promotions management
│   ├── site-settings.js   # ⭐ Site settings & banners
│   └── admin.js           # ⭐ Admin panel functions
└── README.md              # Tài liệu này
```

## 🚀 Hướng dẫn sử dụng

### 1. Truy cập website
Mở file `index.html` trong trình duyệt.

### 2. Đăng nhập Admin

**URL**: `login.html`

**Tài khoản Admin**:
- Username: `admin`
- Password: `admin123`

**Tài khoản khách hàng demo**:
- Username: `user1`
- Password: `123456`

### 3. Truy cập trang quản trị

Sau khi đăng nhập bằng tài khoản admin:
1. Click vào menu **"Quản trị"** ở header
2. Hoặc truy cập trực tiếp: `admin.html`

### 4. Quản lý sản phẩm

#### Thêm sản phẩm mới:
1. Vào **Quản lý → Sản phẩm**
2. Click **"Thêm sản phẩm"**
3. Điền thông tin:
   - Tên sản phẩm
   - Giá hiện tại
   - Giá cũ (tùy chọn - để hiển thị giảm giá)
   - Danh mục (CPU, Mainboard, RAM, VGA, SSD, PSU, Case, Cooling)
   - Số lượng tồn kho
   - Mô tả sản phẩm
   - **✅ Tick vào "Sản phẩm nổi bật"** nếu muốn hiển thị ở trang chủ
4. Upload hình ảnh (sẽ thấy preview)
5. Click **"Lưu sản phẩm"**

#### Chỉnh sửa sản phẩm:
- Click nút **"✏️"** ở cột Thao tác
- Nhập thông tin mới

#### Xóa sản phẩm:
- Click nút **"🗑️"** ở cột Thao tác
- Xác nhận xóa

### 5. Quản lý đơn hàng

1. Vào **Quản lý → Đơn hàng**
2. Click nút **"👁️"** để xem chi tiết
3. Trong modal chi tiết:
   - **Thay đổi trạng thái**: Chọn dropdown (Đang xử lý / Hoàn thành / Đã hủy)
   - **In đơn hàng**: Click **"🖨️ In đơn hàng"**
   - **Xóa đơn hàng**: Click **"🗑️ Xóa đơn hàng"**

### 6. Quản lý tin tức

#### Thêm tin tức:
1. Vào **Quản lý → Tin tức**
2. Click **"Thêm tin tức"**
3. Điền:
   - Tiêu đề
   - Tóm tắt
   - Nội dung chi tiết
   - Danh mục (Tin tức / Đánh giá / Hướng dẫn / Khuyến mãi)
   - Upload hình ảnh
   - **✅ Tick "Tin tức nổi bật"** nếu muốn highlight
4. Click **"Lưu tin tức"**

### 7. Quản lý khuyến mãi

#### Thêm khuyến mãi:
1. Vào **Quản lý → Khuyến mãi**
2. Click **"Thêm khuyến mãi"**
3. Điền:
   - Tiêu đề khuyến mãi
   - Mô tả
   - Phần trăm giảm giá (0-100%)
   - Loại (Flash Sale / Hàng mới về / Giảm giá sốc / Combo)
   - Từ ngày → Đến ngày
   - Upload banner
4. Click **"Lưu khuyến mãi"**

#### Bật/Tắt khuyến mãi:
- Click nút **"🔘"** ở cột Thao tác

### 8. Cài đặt website

#### Thông tin chung:
1. Vào **Quản lý → Cài đặt web**
2. Cập nhật:
   - Tên website
   - Tiêu đề website
   - Mô tả
   - Số điện thoại
   - Email
   - Địa chỉ
3. Click **"Lưu cài đặt"**

#### Quản lý Banner trang chủ:
1. Scroll xuống phần **"Banner quản lý"**
2. Click **"Thêm banner"**
3. Điền:
   - Tiêu đề banner
   - Link đích (VD: `products.html?cat=cpu`)
   - Upload hình ảnh (khuyến nghị 1200x400px)
4. Click **"Lưu banner"**
5. Sử dụng nút **"🔘"** để bật/tắt banner
6. Nút **"🗑️"** để xóa banner

## 💾 Lưu trữ dữ liệu

Toàn bộ dữ liệu được lưu trong **localStorage** của trình duyệt:

- `products`: Danh sách sản phẩm
- `cart`: Giỏ hàng
- `orders`: Đơn hàng
- `users`: Tài khoản người dùng
- `currentUser`: Người dùng đang đăng nhập
- `news`: Tin tức
- `promotions`: Khuyến mãi
- `siteSettings`: Cài đặt website & banners

**⚠️ Lưu ý**: Xóa cache trình duyệt sẽ mất toàn bộ dữ liệu!

## 🎨 Thiết kế

- **Màu chủ đạo**: `#0b71c6` (Xanh dương)
- **Màu phụ**: `#d70018` (Đỏ)
- **Font chữ**: Inter (Google Fonts)
- **Responsive**: Hoạt động tốt trên desktop, tablet, mobile
- **Icons**: Font Awesome 6.0.0

## ⭐ Tính năng nổi bật

### Sản phẩm nổi bật (Featured Products)
- Admin tick chọn sản phẩm nào là "nổi bật"
- Chỉ sản phẩm được tick mới hiện ở trang chủ
- Tự động load từ localStorage
- Fallback về 4 sản phẩm đầu nếu chưa có featured

### Upload & quản lý hình ảnh
- Upload hình ảnh từ máy tính
- Preview trước khi lưu
- Lưu dạng base64 trong localStorage (không cần server)
- Áp dụng cho: Sản phẩm, Tin tức, Khuyến mãi, Banner

### Quản lý đơn hàng chuyên nghiệp
- Modal chi tiết đẹp mắt
- Cập nhật trạng thái real-time
- In đơn hàng với template chuyên nghiệp
- Xem đầy đủ thông tin khách hàng & sản phẩm

### Hệ thống CMS hoàn chỉnh
- 6 modules quản lý độc lập
- Giao diện admin hiện đại
- Thống kê real-time
- Không cần backend/database

## 🔒 Bảo mật

- Chỉ tài khoản có `role: 'admin'` mới truy cập được trang quản trị
- Tự động redirect nếu không đăng nhập hoặc không phải admin
- Menu "Quản trị" chỉ hiện với admin đã đăng nhập

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: Variables, Flexbox, Grid
- **JavaScript (ES6+)**: Vanilla JS, không dùng framework
- **LocalStorage API**: Lưu trữ dữ liệu client-side
- **FileReader API**: Upload & convert ảnh sang base64
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📝 Demo Credentials

| Role | Username | Password |
|------|----------|----------|
| Admin | `admin` | `admin123` |
| User | `user1` | `123456` |

## 🎯 Use Cases

### Case 1: Thêm sản phẩm nổi bật
1. Login admin
2. Quản lý → Sản phẩm → Thêm sản phẩm
3. **✅ Tick "Sản phẩm nổi bật"**
4. Upload ảnh, điền thông tin
5. Lưu → Sản phẩm sẽ hiện ở trang chủ ngay lập tức

### Case 2: Tạo banner khuyến mãi
1. Quản lý → Cài đặt web
2. Scroll xuống "Banner quản lý"
3. Thêm banner → Upload ảnh 1200x400
4. Nhập link đích (VD: `products.html`)
5. Lưu → Banner hiện ở slider trang chủ

### Case 3: Quản lý đơn hàng
1. Quản lý → Đơn hàng
2. Click 👁️ xem chi tiết
3. Chọn trạng thái "Hoàn thành"
4. Click "In đơn hàng" → Tự động mở preview in
5. Gửi cho khách hàng

## 📞 Hỗ trợ

Mọi thắc mắc vui lòng liên hệ:
- **Email**: contact@shop-d.com
- **Phone**: 1900 xxxx
- **Address**: 123 Đường ABC, Quận 1, TP.HCM

---

**© 2025 Shop-D. All rights reserved.**

# HƯỚNG DẪN TRIỂN KHAI WEBSITE LÊN VERCEL (CHẶNG 4)
*(Nhận đường link trực tuyến https://...vercel.app để gửi khách hàng & mở trên điện thoại)*

---

Toàn bộ mã nguồn dự án đã được đóng gói sạch và tạo Git commit sẵn sàng. Bạn có thể chọn 1 trong 2 cách cực kỳ nhanh dưới đây để lấy link Vercel:

---

## CÁCH 1: QUA GITHUB & VERCEL DASHBOARD (KHUYÊN DÙNG — 1 PHÚT, MIỄN PHÍ VĨNH VIỄN)

Đây là chuẩn công nghiệp cho mọi website hiện đại. Khi kết nối qua GitHub, mỗi khi bạn sửa giá hay nội dung thì web sẽ tự động cập nhật ngay lập tức:

### Bước 1: Đẩy mã nguồn lên GitHub của bạn
1. Truy cập [github.com/new](https://github.com/new) và tạo một Repository mới (đặt tên: `tinh-coffee`, chọn chế độ **Public** hoặc **Private** đều được).
2. Mở terminal tại thư mục `d:\Projects\tinh-cafe` và chạy 2 dòng lệnh sau (thay `<username>` bằng tên tài khoản GitHub của bạn):
   ```bash
   git remote add origin https://github.com/<username>/tinh-coffee.git
   git branch -M main
   git push -u origin main
   ```

### Bước 2: Kết nối với Vercel
1. Đăng nhập vào [vercel.com](https://vercel.com) (bằng tài khoản GitHub của bạn).
2. Tại trang Tổng quan (Dashboard), bấm nút **Add New...** $\rightarrow$ chọn **Project**.
3. Tìm và chọn repository **`tinh-coffee`** vừa tạo $\rightarrow$ bấm **Import**.
4. Ở mục Framework Preset, để mặc định là **Other** (hoặc Static HTML).
5. Bấm nút **Deploy** màu xanh!

Chỉ sau khoảng **15 – 30 giây**, Vercel sẽ bắn pháo hoa chúc mừng và cấp ngay một đường link chính thức:
👉 **`https://tinh-coffee.vercel.app`** (hoặc một tên miền tương tự có đuôi `.vercel.app`).

---

## CÁCH 2: DÙNG VERCEL CLI TRỰC TIẾP TỪ DÒNG LỆNH
Nếu máy bạn đã cài Vercel CLI, chỉ cần mở terminal tại thư mục này và chạy:
```bash
npx.cmd vercel
```
* Bấm `y` để xác nhận deploy.
* Chọn Scope (tài khoản Vercel của bạn).
* Liên kết dự án mới $\rightarrow$ Vercel sẽ tự động tải thư mục lên và in ra link trực tuyến ngay trên màn hình terminal.

---

## BẢNG CHECKLIST NGHIỆM THU CHẶNG 4 (CHECK 4)
Sau khi có link Vercel:
- [ ] Gửi link qua Zalo: Thẻ xem trước (OpenGraph preview) hiển thị hình ảnh lon TỈNH và tiêu đề sắc nét.
- [ ] Mở trên điện thoại di động: Lướt mượt mà 60fps, màu đen sâu không lóa mắt, nút Sticky CTA bám chân màn hình dễ bấm.
- [ ] Điền thử một đơn hàng trên link Vercel: Lead bắn thẳng vào Google Sheet của bạn sau 1-2 giây.

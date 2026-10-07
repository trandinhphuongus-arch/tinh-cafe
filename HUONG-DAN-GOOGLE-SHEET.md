# HƯỚNG DẪN KẾT NỐI FORM ĐẶT TRƯỚC VÀO GOOGLE SHEET (2 PHÚT)
*(Dành cho Founder TỈNH Coffee — Miễn phí 100%, không cần thuê database)*

---

## BƯỚC 1: TẠO GOOGLE SHEET MỚI
1. Truy cập [sheets.google.com](https://sheets.google.com) và tạo một bảng tính mới.
2. Đổi tên bảng tính thành: **`ĐƠN ĐẶT TRƯỚC — TỈNH COFFEE`**.
3. Bạn không cần tự gõ tiêu đề cột, Script sẽ tự động tạo hàng tiêu đề màu vàng đen thương hiệu chuẩn chỉnh!

---

## BƯỚC 2: DÁN MÃ GOOGLE APPS SCRIPT
1. Trên thanh menu của Google Sheet, bấm vào: **Tiện ích mở rộng (Extensions)** $\rightarrow$ **Apps Script**.
2. Xóa toàn bộ đoạn mã mặc định `function myFunction() { ... }` trong khung soạn thảo.
3. Mở file [google-apps-script.js](file:///d:/Projects/tinh-cafe/google-apps-script.js), sao chép toàn bộ nội dung và dán vào Apps Script.
4. Bấm biểu tượng 💾 **Lưu dự án (Save project)** (hoặc `Ctrl + S`).

---

## BƯỚC 3: TRIỂN KHAI THÀNH WEB APP (DEPLOY)
1. Ở góc trên bên phải màn hình Apps Script, bấm nút **Triển khai (Deploy)** $\rightarrow$ chọn **Tùy chọn triển khai mới (New deployment)**.
2. Bấm vào biểu tượng bánh răng ⚙️ bên cạnh "Chọn loại", chọn **Ứng dụng web (Web app)**.
3. Điền các trường cấu hình như sau:
   - **Mô tả (Description):** `TINH Coffee Webhook v1`
   - **Thực thi dưới dạng (Execute as):** `Tôi (email của bạn)`
   - **Ai có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)** $\rightarrow$ *(⚠️ Lưu ý quan trọng: Phải chọn mục này để khách đặt hàng trên web có thể gửi dữ liệu vào sheet).*
4. Bấm **Triển khai (Deploy)**.
   * *Nếu Google hiện hộp thoại yêu cầu cấp quyền truy cập, hãy bấm: "Xem lại quyền" $\rightarrow$ Chọn tài khoản Google của bạn $\rightarrow$ Bấm "Nâng cao (Advanced)" $\rightarrow$ Bấm "Đi tới... (không an toàn)" $\rightarrow$ Bấm "Cho phép (Allow)".*
5. Sau khi triển khai xong, bạn sẽ nhận được một đường link **URL ứng dụng web (Web App URL)** có dạng:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
6. Hãy sao chép (Copy) đường link này!

---

## BƯỚC 4: DÁN URL VÀO WEBSITE
1. Mở file [main.js](file:///d:/Projects/tinh-cafe/main.js).
2. Tìm dòng số 12:
   ```javascript
   const GOOGLE_SCRIPT_WEBHOOK_URL = '';
   ```
3. Dán đường link Web App bạn vừa copy vào giữa hai dấu nháy đơn, ví dụ:
   ```javascript
   const GOOGLE_SCRIPT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```
4. Lưu file [main.js](file:///d:/Projects/tinh-cafe/main.js) lại.

---

## KIỂM TRA NGHIỆM THU (CHECK 3)
1. Mở website trên trình duyệt: [http://localhost:8080](http://localhost:8080).
2. Cuộn xuống phần **Đặt Trước**, điền một đơn thử nghiệm (Tên, SĐT, Địa chỉ, chọn Lốc 6 lon) và bấm **XÁC NHẬN ĐẶT TRƯỚC NGAY**.
3. Quay lại trang Google Sheet của bạn: Trong vòng 1–2 giây, một dòng dữ liệu mới với đầy đủ thông tin, thời gian thực và mã đơn sẽ xuất hiện ngay lập tức!

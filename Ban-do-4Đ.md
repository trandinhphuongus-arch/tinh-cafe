# BẢN ĐỒ 4Đ — WEBSITE RA MẮT TỈNH COFFEE (D2C LAUNCHING)
*(Quy chuẩn chiến lược & thực thi bởi Chuyên gia Website FMCG / F&B D2C)*

---

## ① ĐỀ BÀI — Muốn gì? Thế nào là ĐẠT?

### 1.1. Muốn gì? (Mục tiêu cốt lõi)
Xây dựng một website ra mắt (Launch & Pre-order Landing Page) cho thương hiệu **TỈNH — Cà phê lon ủ lạnh (Cold Brew) chuyên biệt cho người chạy deadline**.  
Website đóng vai trò là một "nhân viên bán hàng & kể chuyện D2C 24/7", giúp tệp khách hàng mục tiêu (dân văn phòng, agency, lập trình viên, freelancer từ 22–40 tuổi):
1. **Hiểu rõ TỈNH là ai:** Thương hiệu cà phê cold brew đóng lon 18h từ 100% Robusta Đắk Lắk, do 1 Barista 8 năm kinh nghiệm bắt tay cùng 1 Marketer Agency 6 năm chạy deadline sáng lập.
2. **Nắm rõ TỈNH bán gì & giá bao nhiêu:** 3 phiên bản minh bạch nồng độ caffeine (Tỉnh Nhẹ 80mg, Tỉnh Hẳn 160mg, Hồi Sinh 240mg) với mức giá niêm yết rõ ràng: 29.000đ/lon 250ml và Lốc 6 lon 149.000đ (tiết kiệm, freeship nội thành).
3. **Đặt trước (Pre-order) được ngay trên web:** Thao tác trong 30 giây, hưởng ưu đãi mở bán độc quyền (Giảm 20% lốc đầu tiên + tặng bộ sticker "Sống sót qua deadline"), thông tin đơn hàng tự động bắn về Google Sheet quản lý của Founder.
4. **Tiến độ cấp bách:** Hoàn thiện và đưa vào vận hành ngay trong tuần này.

### 1.2. Thế nào là ĐẠT? (Definition of Done — DoD 4 Tiêu Chuẩn Vàng)
Website được nghiệm thu **ĐẠT** khi đáp ứng trọn vẹn 4 tiêu chuẩn:
1. **Mở đẹp & mượt 100% trên điện thoại (Mobile-First):** Giao diện responsive hoàn hảo, tải nhanh dưới 2s trên mạng 4G, bố cục tối ưu theo vùng ngón tay cái (Thumb-zone), hiển thị sắc nét Dark Mode không chói mắt khi lướt ban đêm.
2. **Hành trình trải nghiệm đủ thông tin để chốt đơn ngay (High-converting UX):** Khách cuộn trang là nắm bắt trọn vẹn mạch tâm lý: Vấn đề họ đang gặp (Top 3 nỗi đau) → Giải pháp của TỈNH → Danh mục 3 lon minh bạch caffeine & giá → Uy tín 2 Founder & cam kết giao lạnh 2h → Form đặt trước có nút kêu gọi hành động bám dính (Sticky CTA).
3. **Form đặt trước gửi lead về Google Sheet tức thì (Zero-friction Lead Capture):** Khách điền thông tin, dữ liệu (Thời gian, Họ tên, SĐT, Địa chỉ, Sản phẩm/Combo, Số lượng, Tổng tiền, Ghi chú) tự động bắn về Google Sheet thời gian thực (qua Google Apps Script Webhook). Có kiểm tra hợp lệ SĐT, chặn spam, hiển thị popup thông báo thành công mượt mà mà không tải lại trang.
4. **Có link thật chạy mượt trên Vercel (Production-Ready):** Triển khai trực tiếp qua Git + Vercel với tên miền trực tuyến tốc độ cao, chứng chỉ bảo mật SSL (HTTPS), OpenGraph preview đẹp mắt khi gửi link qua Zalo/Facebook.

---

## ② ĐẦU MỤC — Gồm những phần nào? (Scope of Work & Page Structure)

Để đảm bảo tiến độ "Tuần này phải có" và tối ưu hóa tỷ lệ chuyển đổi cho sản phẩm FMCG giá mềm (29k - 149k), cấu trúc giải pháp tối ưu là **Long-form Landing Page (Onepager) kết hợp Anchor Navigation**. Toàn bộ trải nghiệm được tích hợp trong 1 trang duy nhất (`index.html`) gồm **7 khối nội dung (Blocks)** mạch lạc:

### 2.1. Cấu trúc 7 khối nội dung chuẩn AIDA Funnel
1. **Header & Navigation (Thanh điều hướng kính mờ):**
   - Logo nhận diện thương hiệu TỈNH.
   - Anchor links cuộn mượt: *Sản phẩm · Nỗi đau · Câu chuyện · Bảng giá · Đặt trước*.
   - Nút hành động nhanh: *"Đặt trước - Giảm 20%"*.
2. **Hero Section (Mặt tiền đánh thức năng lượng — 5 giây đầu):**
   - Headline định vị: *"Uống phát, tỉnh liền — Cà phê lon ủ lạnh cho người chạy deadline"*.
   - Sub-headline: *"100% Robusta Đắk Lắk ủ lạnh 18h · Không đường hóa học · Mức caffeine in rõ · Giao lạnh 2 giờ"*.
   - Visual: Hình ảnh thực tế cụm 3 lon (`lon-tinh-nhe.png`, `lon-tinh-han.png`, `lon-hoi-sinh.png`) nổi bật trên quầng sáng Gradient Sunrise.
   - Nút CTA chính: *"Đặt trước ngay (Giảm 20%)"* cuộn thẳng tới Form đặt hàng.
3. **Empathy & Problem Section (Đồng cảm & Chạm đúng 3 nỗi đau):**
   - *Nỗi đau 1 — Cú lừa Sugar Crash & Đau quặn dạ dày:* Lon ngọt lợ tụt năng lượng sau 45p → Lời giải TỈNH: Cold Brew ủ 18h êm ru, sữa yến mạch tự nhiên.
   - *Nỗi đau 2 — Bất lực lúc 2h sáng & Đứt gãy dòng tập trung:* Quán đóng cửa, pha lách cách → Lời giải TỈNH: Lon nhôm kín khí trữ ngăn mát 30 ngày, bật nắp 3s uống liền.
   - *Nỗi đau 3 — Cò quay nồng độ caffeine:* Lúc mất ngủ run tay, lúc không đủ tỉnh → Lời giải TỈNH: 3 mức caffeine đo lường minh bạch (80mg · 160mg · 240mg).
4. **Product Showcase Section (Khám phá 3 dòng sản phẩm & Minh bạch giá):**
   - **Tỉnh Nhẹ (80mg Caffeine):** Cold brew sữa yến mạch, béo êm dịu — Cho buổi sáng thong thả, người nhạy cảm caffeine.
   - **Tỉnh Hẳn (160mg Caffeine):** Cold brew đen nguyên bản, đầm vị mộc — Cho ngày họp hành triền miên.
   - **Hồi Sinh (240mg Caffeine):** Double shot cực mạnh — Cứu nguy deadline xuyên đêm.
   - Thông số niêm yết: Dung tích 250ml, giá bán lẻ **29.000đ/lon**.
5. **Brand Story & Trust Section (TỈNH là ai? Sự khác biệt):**
   - Câu chuyện 2 Co-founder: Barista 8 năm kinh nghiệm rang ủ x Dân Agency 6 năm chạy deadline thấu hiểu nỗi đau.
   - 4 Cam kết chuẩn FMCG: 100% Robusta Đắk Lắk · Ủ lạnh 18 tiếng · Không chất bảo quản · Giao lạnh 2 giờ TP.HCM.
6. **Pricing & Bundle Offer Section (Bảng giá & Đòn bẩy Upsell Lốc 6 lon):**
   - *Gói Dùng Thử:* 1 Lon lẻ 29.000đ (Phí ship tính riêng).
   - *Gói Cứu Cánh (Khuyên dùng):* **Lốc 6 lon 149.000đ** (Tiết kiệm 25.000đ, Freeship nội thành TP.HCM, Mix 3 vị tùy chọn).
   - *Đặc quyền Pre-order:* Giảm thêm 20% lốc đầu tiên + Tặng bộ sticker "Sống sót qua deadline" cho 500 khách đầu tiên.
7. **Pre-order Form & Sticky CTA Section (Chốt đơn tức thì về Google Sheet):**
   - Form thông minh, tối ưu chạm: Họ tên, Số điện thoại (kiểm tra 10 số), Địa chỉ giao hàng, Chọn gói (Lốc 6 lon freeship / Lon lẻ), Chọn vị, Số lượng, Ghi chú.
   - Tự động tính tổng tiền theo thời gian thực.
   - Modal chúc mừng sau khi đặt đơn, tích hợp QR Zalo Founder hỗ trợ xác nhận đơn hỏa tốc.
   - Nút **Sticky CTA Bar** cố định chân màn hình trên điện thoại giúp khách bấm đặt bất kỳ lúc nào khi đang đọc.

### 2.2. Trụ cột Kỹ thuật & Tích hợp (Engineering)
- **Front-end:** HTML5 chuẩn Semantic, CSS3 theo Design System thuần (không dùng thư viện cồng kềnh, tải trang cực nhanh), JavaScript ES6.
- **Lead Capture:** Google Apps Script Webhook đẩy dữ liệu trực tiếp vào Google Sheet không qua máy chủ trung gian.
- **Deploy:** Vercel Hosting qua Git.

---

## ③ ĐẦU VÀO — Chỉ mình biết gì? (Assets & Knowledge Bank)

Dự án sử dụng kho dữ liệu và tài nguyên độc quyền đã được chuẩn hóa trong thư mục dự án:

1. **Tài liệu chiến lược sản phẩm & kinh doanh:**
   - [Brief_TINH.md](file:///d:/Projects/tinh-cafe/Brief_TINH.md): Thông tin Founder (Barista 8 năm x Agency 6 năm), giá bán 29k/lon - 149k/lốc 6 lon freeship, ưu đãi ra mắt -20% + bộ sticker, công suất xưởng 3.000 lon/tháng, mục tiêu 500 khách đặt trước.
2. **Hệ thống Design System chuẩn hóa:**
   - [DESIGN-TINH.md](file:///d:/Projects/tinh-cafe/DESIGN-TINH.md):
     - **Phong cách:** Dark Coffee Canvas — Nền tối cà phê sâu kết hợp ánh sáng vàng điện (Electric Yellow) và dải màu bình minh (Sunrise Gradient), thể hiện năng lượng bứt phá trong màn đêm.
     - **Bảng màu:** Nền đen `#15110e`, Vàng điện `#ffd60a`, Cam năng lượng `#ff8a3d`, Hồng san hô `#ff5f8f`, Chữ kem sáng `#fff6e8`.
     - **Typography:** Tiêu đề `Plus Jakarta Sans` (hiện đại, năng động), Thân bài `Be Vietnam Pro` (chuẩn tiếng Việt không lỗi dấu), Thông số caffeine `IBM Plex Mono` (phong cách kỹ thuật/chính xác).
3. **Mỏ vàng Insight & Top 3 Nỗi đau khách hàng:**
   - [top-3-noi-dau-TINH.md](file:///d:/Projects/tinh-cafe/top-3-noi-dau-TINH.md): Luận điểm đập tan nỗi sợ Sugar Crash, đứt gãy mạch làm việc lúc 2h sáng và say cà phê không kiểm soát.
4. **Kho tư liệu hình ảnh chất lượng cao:**
   - 3 file render lon thực tế độ phân giải cao sẵn có: [lon-tinh-nhe.png](file:///d:/Projects/tinh-cafe/lon-tinh-nhe.png), [lon-tinh-han.png](file:///d:/Projects/tinh-cafe/lon-tinh-han.png), [lon-hoi-sinh.png](file:///d:/Projects/tinh-cafe/lon-hoi-sinh.png).
5. **Kỹ thuật thu thập đơn:**
   - Mã nguồn Google Apps Script Webhook kết nối form HTML vào Google Sheet miễn phí, bảo mật và ổn định.

---

## ④ ĐƯỜNG ĐI — Mấy chặng? Cuối mỗi chặng kiểm tra gì? (Roadmap & Checkpoints)

Lộ trình 4 chặng chạy nước rút tinh gọn đảm bảo ra mắt hoàn hảo trong tuần:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  CHẶNG 1: COPY DECK        CHẶNG 2: FRONT-END        CHẶNG 3: LEAD SHEET       CHẶNG 4: DEPLOY │
│  Kịch bản 7 Section        Dựng HTML/CSS/JS          Tích hợp Google Apps      Đẩy Git/Vercel  │
│  (AIDA + FMCG Offer)       (Chuẩn DESIGN-TINH.md)    Script Webhook            Test chéo Mobile│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Chặng 1: Biên soạn toàn bộ nội dung (Copywriting Deck)
- **Công việc:**
  - Soạn thảo chi tiết lời văn cho 7 section trên landing page đúng giọng điệu dân chạy deadline: trực diện, thực tế, hóm hỉnh, đánh trúng tim đen.
  - Thiết kế cấu trúc gói bán (Bundle Offer): Nổi bật Lốc 6 lon 149k để tối ưu biên lợi nhuận và chi phí giao vận FMCG.
- **Tiêu chí nghiệm thu (Check 1):** File kịch bản nội dung được duyệt: Trả lời trọn vẹn 3 câu hỏi *"TỈNH là ai? Bán gì? Giá bao nhiêu?"*, 100% số liệu khớp `Brief_TINH.md`.

### Chặng 2: Thiết kế giao diện & Lập trình Front-end (UI/UX Engineering)
- **Công việc:**
  - Khai báo CSS Design Tokens (màu sắc, typography, card, nút bấm, gradients) chuẩn 100% theo `DESIGN-TINH.md`.
  - Dựng giao diện `index.html` ngữ nghĩa chuẩn SEO, responsive mượt mà từ điện thoại 360px đến desktop.
  - Gắn 3 ảnh lon sản phẩm thật với hiệu ứng quầng sáng và bóng đổ thương hiệu.
  - Lập trình JavaScript tính tổng tiền động khi chọn gói, chọn vị và thanh Sticky CTA bám chân màn hình mobile.
- **Tiêu chí nghiệm thu (Check 2):** Mở website trên điện thoại thật và DevTools: Giao diện thẩm mỹ cao, phong cách Dark Mode chuyên nghiệp, vuốt chạm mượt mà, không vỡ layout, responsive hoàn hảo.

### Chặng 3: Tích hợp Form đặt trước vào Google Sheet (Automation Integration)
- **Công việc:**
  - Thiết lập bảng tính Google Sheet quản lý đơn: *Thời gian, Họ tên, SĐT, Địa chỉ, Sản phẩm, Quy cách, Số lượng, Tổng tiền, Ghi chú*.
  - Triển khai Google Apps Script làm Webhook nhận POST request từ form.
  - Viết logic JavaScript kiểm tra tính hợp lệ số điện thoại (10 chữ số) và honeypot chống bot rác.
  - Tích hợp Modal thông báo đặt hàng thành công và mã QR Zalo kết nối trực tiếp với Founder.
- **Tiêu chí nghiệm thu (Check 3):** Thử đặt một đơn trên web → Dòng dữ liệu xuất hiện ngay trên Google Sheet sau 1–2 giây, modal cảm ơn hiển thị đẹp mắt mà không tải lại trang.

### Chặng 4: Triển khai lên Vercel & Kiểm thử tổng thể (Launch & QA)
- **Công việc:**
  - Đóng gói mã nguồn sạch, đẩy lên GitHub và kết nối triển khai trên Vercel.
  - Cấu hình thẻ OpenGraph (ảnh đại diện, tiêu đề, mô tả) hiển thị đẹp khi gửi link qua Zalo/Facebook/Messenger.
  - Kiểm thử chéo trên các thiết bị thật (iPhone Safari, Android Chrome, Laptop).
- **Tiêu chí nghiệm thu (Check 4):** Có link thật `https://...vercel.app` tốc độ cao; mở trên điện thoại lướt mượt mà; đặt thử đơn hàng trên môi trường thực tế bắn thẳng về Google Sheet thành công 100%.
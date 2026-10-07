/**
 * TỈNH COFFEE — GOOGLE APPS SCRIPT WEBHOOK NHẬN ĐƠN HÀNG PRE-ORDER
 * Tự động ghi dữ liệu từ Website vào Google Sheet thời gian thực (Realtime)
 * 
 * HƯỚNG DẪN CÀI ĐẶT NHANH (2 PHÚT):
 * 1. Mở một Google Sheet mới, đặt tên: "ĐƠN ĐẶT TRƯỚC — TỈNH COFFEE"
 * 2. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script
 * 3. Xóa hết mã cũ trong editor, dán toàn bộ đoạn code này vào.
 * 4. Nhấn nút "Triển khai" (Deploy) góc trên bên phải -> "Tùy chọn triển khai mới" (New deployment)
 * 5. Chọn loại: "Ứng dụng web" (Web App)
 *    - Mô tả: "TINH Coffee Webhook v1"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me - địa chỉ email của bạn)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone) -> QUAN TRỌNG NHẤT!
 * 6. Nhấn "Triển khai" (Deploy) -> Cấp quyền cho Script nếu Google yêu cầu.
 * 7. Copy đường dẫn "URL ứng dụng web" (Web App URL) dạng:
 *    https://script.google.com/macros/s/AKfycbx.../exec
 * 8. Dán URL này vào biến GOOGLE_SCRIPT_WEBHOOK_URL trong file main.js!
 */

// Tên trang tính lưu đơn
const SHEET_NAME = 'ĐƠN HÀNG PRE-ORDER';

/**
 * Xử lý yêu cầu POST gửi từ Website
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Khóa tối đa 10s để chống xung đột khi nhiều khách đặt cùng lúc
  lock.tryLock(10000);

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Nếu chưa có trang tính này thì tự động tạo mới
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Kiểm tra dòng tiêu đề (Header row)
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Thời Gian',
        'Mã Đơn Hàng',
        'Họ Và Tên',
        'Số Điện Thoại',
        'Địa Chỉ Giao Hàng (TP.HCM)',
        'Gói Sản Phẩm',
        'Phân Loại Vị',
        'Số Lượng',
        'Tổng Tiền (VNĐ)',
        'Ghi Chú Của Khách',
        'Trạng Thái Đơn'
      ];
      sheet.appendRow(headers);

      // Định dạng dòng tiêu đề: Nền tối, chữ vàng đậm chất TỈNH
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#15110e');
      headerRange.setFontColor('#ffd60a');
      headerRange.setFontWeight('bold');
      headerRange.setFontFamily('Arial');
      sheet.setFrozenRows(1);
    }

    // Đọc dữ liệu từ form gửi lên (hỗ trợ cả FormData lẫn JSON)
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    // Thời gian đặt hàng (Giờ Việt Nam)
    const timestamp = Utilities.formatDate(new Date(), 'GMT+7', 'HH:mm:ss dd/MM/yyyy');
    
    // Tạo dòng dữ liệu mới
    const newRow = [
      timestamp,
      data.order_id || ('#TINH-' + Math.floor(1000 + Math.random() * 9000)),
      data.name || 'Không có tên',
      "'" + (data.phone || ''), // Thêm dấu ' để giữ số 0 đầu số điện thoại
      data.address || '',
      data.package_type === 'pack' ? 'Lốc 6 Lon Cứu Cánh (Freeship)' : 'Lon Lẻ Trải Nghiệm',
      data.flavor || '',
      data.quantity || 1,
      data.total || '119.000đ',
      data.note || '',
      'Chờ liên hệ giao lạnh' // Trạng thái mặc định
    ];

    // Ghi dòng mới vào cuối bảng tính
    sheet.appendRow(newRow);

    // Định dạng lại các cột cho đẹp mắt
    sheet.autoResizeColumns(1, 11);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Đơn hàng đã được lưu thành công vào Google Sheet!',
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Xử lý yêu cầu GET để kiểm tra trạng thái hoạt động (Healthcheck)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'active',
      service: 'TỈNH Coffee Pre-order Webhook API',
      message: 'Hệ thống tiếp nhận đơn hàng Google Sheet đang hoạt động bình thường!'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

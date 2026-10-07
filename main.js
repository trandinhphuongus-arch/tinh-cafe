/**
 * TỈNH COFFEE — MAIN INTERACTION & LEAD CAPTURE SCRIPT
 * Xử lý: Mobile Menu, Smooth Scroll, Sticky CTA Bar,
 * Dynamic Price Calculator, Form Validation, Google Sheet Webhook & Success Modal
 */

// ============================================================================
// CẤU HÌNH GOOGLE APPS SCRIPT WEBHOOK (CHẶNG 3)
// ============================================================================
// Dán URL Web App nhận được từ Google Apps Script vào đây:
// Ví dụ: 'https://script.google.com/macros/s/AKfycbx.../exec'
// Nếu để trống, hệ thống sẽ tự động lưu đơn vào LocalStorage để không mất dữ liệu!
const GOOGLE_SCRIPT_WEBHOOK_URL = ''; 

document.addEventListener('DOMContentLoaded', () => {
  // 1. MOBILE MENU TOGGLE
  const siteHeader = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

  if (menuBtn && siteHeader) {
    menuBtn.addEventListener('click', () => {
      siteHeader.classList.toggle('menu-open');
      const isOpen = siteHeader.classList.contains('menu-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Đóng menu khi bấm vào link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        siteHeader.classList.remove('menu-open');
        menuBtn.innerHTML = '☰';
      });
    });
  }

  // 2. STICKY MOBILE CTA BAR (Hiển thị khi cuộn qua Hero, ẩn khi tới Form)
  const stickyBar = document.querySelector('.sticky-mobile-bar');
  const heroSection = document.querySelector('.hero-section');
  const orderSection = document.querySelector('.order-section');

  function handleStickyBarScroll() {
    if (!stickyBar || !heroSection) return;
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    const orderRect = orderSection ? orderSection.getBoundingClientRect() : null;

    const isPastHero = heroBottom < 100;
    const isInOrderSection = orderRect && (orderRect.top < window.innerHeight && orderRect.bottom > 100);

    if (isPastHero && !isInOrderSection) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleStickyBarScroll, { passive: true });

  // 3. DYNAMIC PRICING & ORDER CALCULATOR
  const packageRadios = document.querySelectorAll('input[name="package_type"]');
  const flavorSelect = document.getElementById('flavor-select');
  const qtyInput = document.getElementById('qty-input');
  const btnMinus = document.getElementById('btn-qty-minus');
  const btnPlus = document.getElementById('btn-qty-plus');

  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const giftEl = document.getElementById('summary-gift');
  const totalEl = document.getElementById('summary-total');
  const stickyPriceEl = document.getElementById('sticky-price');

  const PRICE_PER_PACK = 119000; // Giá đặt trước giảm 20% của Lốc 6 lon (gốc 149k)
  const PRICE_PER_CAN = 29000;  // Giá lon lẻ
  const SHIPPING_CAN = 25000;   // Phí ship lon lẻ

  function calculateOrder() {
    let selectedPackage = 'pack';
    packageRadios.forEach(radio => {
      if (radio.checked) selectedPackage = radio.value;
    });

    let qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) {
      qty = 1;
      qtyInput.value = 1;
    }

    let unitPrice = 0;
    let shippingFee = 0;
    let giftText = 'Bộ Sticker Deadline (0đ)';

    if (selectedPackage === 'pack') {
      unitPrice = PRICE_PER_PACK;
      shippingFee = 0; // Freeship
      giftText = '🎁 Bộ Sticker Deadline (0đ)';
    } else {
      unitPrice = PRICE_PER_CAN;
      shippingFee = SHIPPING_CAN;
      giftText = 'Không áp dụng cho lon lẻ';
    }

    const subtotal = unitPrice * qty;
    const total = subtotal + shippingFee;

    // Cập nhật giao diện
    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (shippingEl) shippingEl.textContent = shippingFee === 0 ? 'Miễn phí (0đ)' : formatCurrency(shippingFee);
    if (giftEl) giftEl.textContent = giftText;
    if (totalEl) totalEl.textContent = formatCurrency(total);
    if (stickyPriceEl) stickyPriceEl.textContent = formatCurrency(total);

    return { selectedPackage, qty, unitPrice, shippingFee, subtotal, total };
  }

  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + 'đ';
  }

  // Tăng giảm số lượng
  if (btnMinus && btnPlus && qtyInput) {
    btnMinus.addEventListener('click', () => {
      let currentVal = parseInt(qtyInput.value, 10) || 1;
      if (currentVal > 1) {
        qtyInput.value = currentVal - 1;
        calculateOrder();
      }
    });

    btnPlus.addEventListener('click', () => {
      let currentVal = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = currentVal + 1;
      calculateOrder();
    });

    qtyInput.addEventListener('change', calculateOrder);
  }

  // Chuyển đổi gói hàng
  packageRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (flavorSelect) {
        if (radio.value === 'single') {
          flavorSelect.innerHTML = `
            <option value="1 Lon Tỉnh Hẳn (160mg) - Đen mộc">1 Lon Tỉnh Hẳn (160mg) — Đen mộc</option>
            <option value="1 Lon Tỉnh Nhẹ (80mg) - Yến mạch">1 Lon Tỉnh Nhẹ (80mg) — Yến mạch</option>
            <option value="1 Lon Hồi Sinh (240mg) - Double shot">1 Lon Hồi Sinh (240mg) — Double Shot</option>
          `;
        } else {
          flavorSelect.innerHTML = `
            <option value="Combo Mix 3 vị (2 Nhẹ + 2 Hẳn + 2 Hồi Sinh)">Combo Mix 3 vị (2 Nhẹ + 2 Hẳn + 2 Hồi Sinh) — Khuyên dùng</option>
            <option value="6 Lon Tỉnh Hẳn (160mg) - Đen mộc">6 Lon Tỉnh Hẳn (160mg) — Đen mộc</option>
            <option value="6 Lon Tỉnh Nhẹ (80mg) - Yến mạch">6 Lon Tỉnh Nhẹ (80mg) — Yến mạch</option>
            <option value="6 Lon Hồi Sinh (240mg) - Double shot">6 Lon Hồi Sinh (240mg) — Double Shot</option>
          `;
        }
      }
      calculateOrder();
    });
  });

  // 4. QUICK SELECT TỪ CARD SẢN PHẨM Ở SECTION 4
  const selectCanBtns = document.querySelectorAll('.btn-select-can');
  selectCanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const flavor = e.target.getAttribute('data-flavor');
      const orderFormEl = document.getElementById('dat-truoc');
      if (orderFormEl) {
        orderFormEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 5. LEAD CAPTURE: FORM VALIDATION & GOOGLE SHEET SUBMIT
  const orderForm = document.getElementById('order-form');
  const modalOverlay = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCustomerName = document.getElementById('modal-customer-name');
  const modalOrderId = document.getElementById('modal-order-id');
  const submitBtn = document.getElementById('submit-order-btn');

  if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('customer-name');
      const phoneInput = document.getElementById('customer-phone');
      const addressInput = document.getElementById('customer-address');
      const noteInput = document.getElementById('customer-note');

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const address = addressInput.value.trim();
      const note = noteInput ? noteInput.value.trim() : '';

      // Kiểm tra họ tên
      if (!name) {
        alert('Vui lòng nhập họ và tên của bạn!');
        nameInput.focus();
        return;
      }

      // Kiểm tra SĐT hợp lệ (10 chữ số)
      const phoneRegex = /(0[3|5|7|8|9])+([0-9]{8})\b/;
      if (!phoneRegex.test(phone)) {
        alert('Vui lòng nhập số điện thoại di động hợp lệ (10 số, bắt đầu bằng 0)!');
        phoneInput.focus();
        return;
      }

      // Kiểm tra địa chỉ
      if (!address) {
        alert('Vui lòng nhập địa chỉ nhận hàng tại TP.HCM để shipper giao lạnh!');
        addressInput.focus();
        return;
      }

      const orderCalc = calculateOrder();
      const selectedFlavor = flavorSelect ? flavorSelect.value : 'Combo Mix 3 vị';

      // Sinh mã đơn hàng ngẫu nhiên
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const orderId = `#TINH-${randomCode}`;

      // Dữ liệu đơn hàng hoàn chỉnh
      const orderData = {
        order_id: orderId,
        name: name,
        phone: phone,
        address: address,
        package_type: orderCalc.selectedPackage,
        flavor: selectedFlavor,
        quantity: orderCalc.qty,
        total: formatCurrency(orderCalc.total),
        note: note,
        created_at: new Date().toLocaleString('vi-VN')
      };

      // 1. Luôn sao lưu vào LocalStorage (Đảm bảo không bao giờ mất lead)
      try {
        const savedOrders = JSON.parse(localStorage.getItem('tinh_orders') || '[]');
        savedOrders.push(orderData);
        localStorage.setItem('tinh_orders', JSON.stringify(savedOrders));
        console.log('[TỈNH Coffee] Lead đã lưu vào LocalStorage thành công:', orderData);
      } catch (err) {
        console.warn('[TỈNH Coffee] Lỗi lưu LocalStorage:', err);
      }

      // 2. Trạng thái nút gửi
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Đang gửi thông tin về xưởng...</span>`;

      // 3. Gửi sang Google Apps Script Webhook nếu có URL
      if (GOOGLE_SCRIPT_WEBHOOK_URL && GOOGLE_SCRIPT_WEBHOOK_URL.trim() !== '') {
        try {
          const formData = new FormData();
          for (const key in orderData) {
            formData.append(key, orderData[key]);
          }

          // Dùng mode 'no-cors' để vượt qua chính sách CORS của Google Apps Script
          await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
          });

          console.log('[TỈNH Coffee] Đã bắn đơn về Google Sheet Webhook thành công!');
        } catch (fetchError) {
          console.error('[TỈNH Coffee] Lỗi gửi Webhook Google Sheet:', fetchError);
        }
      } else {
        console.info('[TỈNH Coffee] GOOGLE_SCRIPT_WEBHOOK_URL chưa được cấu hình. Đơn hàng đang được lưu tạm thời trong LocalStorage máy khách.');
      }

      // 4. Hiển thị Popup Modal thành công
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (modalCustomerName) modalCustomerName.textContent = name;
        if (modalOrderId) modalOrderId.textContent = `Mã đơn của bạn: ${orderId} (${orderData.total})`;

        if (modalOverlay) {
          modalOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        }

        // Reset form
        orderForm.reset();
        calculateOrder();
      }, 600);
    });
  }

  // 6. ĐÓNG MODAL
  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Khởi tạo tính toán ban đầu
  calculateOrder();
});

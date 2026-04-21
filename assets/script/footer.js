let footer = document.getElementById("footer");
footer.innerHTML = `<footer>
  <div class="container" style="max-width:1400px;">
    <div class="row g-5">
      <div class="col-lg-4 col-md-6">
        <a href="#" class="footer-logo">MediaTech Ads</a>
        <p class="footer-desc" data-ar="وكالة رائدة في إدارة صفحات فيسبوك، إطلاق الحملات الإعلانية القوية، وحل كافة مشاكل العوائد مع ضمان استلام أرباحك بأمان تام." data-en="A leading agency in Facebook page management, launching powerful ad campaigns, and solving all payout issues with a guarantee of receiving your profits securely.">وكالة رائدة في إدارة صفحات فيسبوك، إطلاق الحملات الإعلانية القوية، وحل كافة مشاكل العوائد مع ضمان استلام أرباحك بأمان تام.</p>
        <div class="d-flex gap-3">
          <a href="https://www.facebook.com/abomarwan0/" class="social-btn"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-btn"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://wa.me/201220202940" target="_blank" class="social-btn"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-md-6">
        <h5 class="footer-col-title" data-ar="روابط سريعة" data-en="Quick Links">روابط سريعة</h5>
        <ul class="footer-links">
          <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html" data-ar="خدماتنا" data-en="Our Services">خدماتنا</a></li>
          <li><a href="https://3mmarx3.github.io/MediaTech/page/about.html" data-ar="من نحن" data-en="About Us">من نحن</a></li>
          <li><a href="https://3mmarx3.github.io/MediaTech/page/contact.html" data-ar="اتصل بنا" data-en="Contact Us">اتصل بنا</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5 class="footer-col-title" data-ar="خدماتنا الأساسية" data-en="Core Services">خدماتنا الأساسية</h5>
        <ul class="footer-links">
          <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html" data-ar="حملات إعلانية قوية" data-en="Powerful Ad Campaigns">حملات إعلانية قوية</a></li>
          <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html" data-ar="تصميم محتوى جذاب" data-en="Attractive Content Design">تصميم محتوى جذاب</a></li>
          <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html" data-ar="إدارة صفحات فيسبوك" data-en="FB Page Management">إدارة صفحات فيسبوك</a></li>
          <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html" data-ar="حل مشاكل العوائد" data-en="Payout Issues Fix">حل مشاكل العوائد</a></li>
          <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html" data-ar="صفحات إعداد بيور 100%" data-en="100% Pure Setup Pages">صفحات إعداد بيور 100%</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5 class="footer-col-title" data-ar="معلومات التواصل" data-en="Contact Info">معلومات التواصل</h5>
        <ul class="footer-links">
          <li><a href="tel:01220202940" class="d-flex align-items-center gap-2 text-start" style="direction:ltr;justify-content:flex-end;"><i class="fa-solid fa-phone"></i> 01220202940</a></li>
          <li><a href="mailto:aborean249@gmail.com" class="d-flex align-items-center gap-2"><i class="fa-solid fa-envelope"></i> aborean249@gmail.com</a></li>
          <li><a href="#" class="d-flex align-items-center gap-2"><i class="fa-solid fa-calendar"></i> <span data-ar="تأسست في: 13/4/2026" data-en="Founded on: April 13, 2026">تأسست في: 13/4/2026</span></a></li>
          <li><a href="#" class="d-flex align-items-center gap-2" style="color:var(--accent);font-weight:800;"><i class="fa-solid fa-shield-check"></i> <span data-ar="ضمان استلام أرباحك بأمان" data-en="Secure Profit Receipt Guarantee">ضمان استلام أرباحك بأمان</span></a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy" data-ar="&copy; 2026 MediaTech Ads. جميع الحقوق محفوظة." data-en="&copy; 2026 MediaTech Ads. All rights reserved.">&copy; 2026 MediaTech Ads. جميع الحقوق محفوظة.</p>
      <div class="d-flex gap-4">
        <a href="https://3mmarx3.github.io/MediaTech/page/privacy.html" style="color:var(--muted);text-decoration:none;font-size:15px;font-weight:700;" data-ar="سياسة الخصوصية" data-en="Privacy Policy">سياسة الخصوصية</a>
        <a href="https://3mmarx3.github.io/MediaTech/page/terms.html" style="color:var(--muted);text-decoration:none;font-size:15px;font-weight:700;" data-ar="شروط الخدمة" data-en="Terms of Service">شروط الخدمة</a>
      </div>
    </div>
  </div>
</footer>`;

let currentLang = localStorage.getItem('mtAdsLang') || 'ar';
let footerElements = footer.querySelectorAll('[data-ar]');
footerElements.forEach(el => {
  if (currentLang === 'en') {
    if (el.getAttribute('data-en')) el.innerHTML = el.getAttribute('data-en');
  } else {
    if (el.getAttribute('data-ar')) el.innerHTML = el.getAttribute('data-ar');
  }
});
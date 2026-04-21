const headerStyles = document.createElement('style');
headerStyles.textContent = `
  .navbar-custom { position: fixed; top: 0; left: 0; width: 100%; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #f1f5f9; z-index: 1000; height: 80px; display: flex; align-items: center; }
  .nav-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; width: 100%; }
  .nav-logo { font-size: 1.6rem; font-weight: 900; text-decoration: none; color: #0f172a; font-family: 'Cairo', sans-serif; }
  .nav-logo span { color: #4f46e5; }
  .nav-links { list-style: none; display: flex; gap: 35px; margin: 0; padding: 0; align-items: center; }
  .nav-links a { text-decoration: none; color: #475569; font-weight: 700; font-size: 1.05rem; transition: 0.3s; }
  .nav-links a:hover { color: #4f46e5; }
  .header-actions { display: flex; align-items: center; gap: 15px; }
  .lang-switch { background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 50px; cursor: pointer; font-family: 'Cairo', sans-serif; font-weight: 800; font-size: 14px; color: #4f46e5; transition: 0.3s; display: flex; align-items: center; gap: 8px; }
  .lang-switch:hover { background: #4f46e5; color: white; border-color: #4f46e5; }
  .nav-cta { background: #4f46e5; color: white !important; padding: 10px 24px; border-radius: 50px; font-weight: 800; text-decoration: none; transition: 0.3s; box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2); }
  .mobile-toggle { background: none; border: none; font-size: 24px; color: #0f172a; cursor: pointer; display: none; }
  @media (max-width: 991.98px) {
    .nav-links { position: absolute; top: 80px; right: 0; width: 100%; background: white; flex-direction: column; padding: 30px 0; box-shadow: 0 15px 30px rgba(0,0,0,0.1); border-top: 1px solid #f1f5f9; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: 0.3s; }
    .nav-links.active { opacity: 1; visibility: visible; transform: translateY(0); }
    .mobile-toggle { display: block; }
    .d-none-mobile { display: none !important; }
  }
`;
document.head.appendChild(headerStyles);

const headerContainer = document.createElement('header');
headerContainer.id = "main-header";
headerContainer.innerHTML = `
  <nav id="navbar" class="navbar-custom">
    <div class="nav-container">
      <a href="https://3mmarx3.github.io/MediaTech/" class="nav-logo" data-ar="  MediaTech Ads" data-en="MediaTech <span>Ads</span>">ميديا تك <span>آدز</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="https://3mmarx3.github.io/MediaTech/" data-ar="الرئيسية" data-en="Home">الرئيسية</a></li>
        <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html" data-ar="خدماتنا" data-en="Services">خدماتنا</a></li>
        <li><a href="https://3mmarx3.github.io/MediaTech/page/about.html" data-ar="من نحن" data-en="About Us">من نحن</a></li>
        <li><a href="https://3mmarx3.github.io/MediaTech/page/contact.html" data-ar="تواصل معنا" data-en="Contact">تواصل معنا</a></li>
      </ul>
      <div class="header-actions">
        <button class="lang-switch" id="langToggle">
          <i class="fa-solid fa-globe"></i>
          <span id="langText">EN</span>
        </button>
        <a href="https://3mmarx3.github.io/MediaTech/page/contact.html" class="nav-cta d-none-mobile" data-ar="ابدأ نجاحك" data-en="Get Started">ابدأ نجاحك</a>
        <button class="mobile-toggle" id="menuToggle"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
  </nav>
`;
document.body.insertBefore(headerContainer, document.body.firstChild);
document.body.style.paddingTop = '80px';

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-ar]');
  elements.forEach(el => {
    const isInput = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';
    if (lang === 'en') {
      if (isInput) {
        if (el.getAttribute('data-en-placeholder')) el.placeholder = el.getAttribute('data-en-placeholder');
      } else {
        if (el.getAttribute('data-en')) el.innerHTML = el.getAttribute('data-en');
      }
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    } else {
      if (isInput) {
        if (el.getAttribute('data-ar-placeholder')) el.placeholder = el.getAttribute('data-ar-placeholder');
      } else {
        if (el.getAttribute('data-ar')) el.innerHTML = el.getAttribute('data-ar');
      }
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    }
  });
  document.getElementById('langText').innerText = lang === 'en' ? 'AR' : 'EN';
  localStorage.setItem('mtAdsLang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  const currentLang = localStorage.getItem('mtAdsLang') === 'en' ? 'ar' : 'en';
  updateLanguage(currentLang);
});

const savedLang = localStorage.getItem('mtAdsLang') || 'ar';
updateLanguage(savedLang);

document.getElementById("menuToggle").addEventListener("click", function() {
  const navLinks = document.getElementById("navLinks");
  const icon = this.querySelector("i");
  navLinks.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});
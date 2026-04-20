const headerStyles = document.createElement('style');
headerStyles.textContent = `

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-logo {
    font-size: 1.5rem;
    font-weight: 900;
    text-decoration: none;
    color: #0f172a;
  }
  .nav-logo span {
    color: #4f46e5;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  .nav-links a {
    text-decoration: none;
    color: #334155;
    font-weight: 700;
    font-size: 1.1rem;
    transition: 0.3s;
  }
  .nav-links a:hover {
    color: #4f46e5;
  }

  .btn-cta:hover {
    background: #4338ca;
  }
  .mobile-toggle {
    background: none;
    border: none;
    font-size: 28px;
    color: #0f172a;
    cursor: pointer;
    display: none;
  }
  .d-none-desktop {
    display: none;
  }
  @media (max-width: 767.98px) {
    .mobile-toggle {
      display: block;
    }
    .d-none-mobile {
      display: none !important;
    }
    .d-none-desktop {
      display: block;
    }
    .nav-links {
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      padding: 20px 0;
      box-shadow: 0 10px 20px rgba(0,0,0,0.05);
      border-bottom: 1px solid #e2e8f0;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-15px);
      transition: all 0.3s ease-in-out;
    }
    .nav-links.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .nav-links li {
      width: 100%;
      text-align: center;
    }
    .nav-links a {
      display: block;
      padding: 12px 0;
    }
    .mobile-cta-wrapper {
      width: 100%;
      padding: 15px 20px 0;
      box-sizing: border-box;
    }
    .mobile-cta-wrapper .btn-cta {
      width: 100%;
      display: block;
      box-sizing: border-box;
    }
  }
`;
document.head.appendChild(headerStyles);

const headerContainer = document.createElement('header');
headerContainer.id = "main-header";
headerContainer.innerHTML = `
  <nav id="navbar" class="navbar-custom">
    <div class="nav-container">
      
      <a href="https://3mmarx3.github.io/MediaTech/" class="nav-logo">MediaTech <span>Ads</span></a>
      
      <button class="mobile-toggle" id="menuToggle">
        <i class="fa-solid fa-bars"></i>
      </button>

      <ul class="nav-links" id="navLinks">
        <li><a href="https://3mmarx3.github.io/MediaTech/">الرئيسية</a></li>
        <li><a href="https://3mmarx3.github.io/MediaTech/page/services.html">خدماتنا</a></li>
        <li><a href="https://3mmarx3.github.io/MediaTech/page/about.html">من نحن</a></li>
        <li><a href="https://3mmarx3.github.io/MediaTech/page/contact.html">تواصل معنا</a></li>
        <li class="d-none-desktop mobile-cta-wrapper">
          <a href="https://3mmarx3.github.io/MediaTech/page/contact.html" class="btn-cta">ابدأ نجاحك</a>
        </li>
      </ul>

<a href="https://3mmarx3.github.io/MediaTech/page/contact.html" class="nav-cta d-none d-md-block">ابدأ نجاحك</a>      
    </div>
  </nav>
`;
document.body.insertBefore(headerContainer, document.body.firstChild);

document.body.style.paddingTop = '80px';

document.getElementById("menuToggle").addEventListener("click", function() {
  const navLinks = document.getElementById("navLinks");
  const icon = this.querySelector("i");
  
  navLinks.classList.toggle("active");
  
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
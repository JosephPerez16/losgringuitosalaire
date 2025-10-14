document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");
  const headerSocial = document.querySelector(".header-social");

  menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("show");
    if(headerSocial) {
      headerSocial.classList.toggle("show");
    }
  });

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navUl.classList.contains("show")) {
        navUl.classList.remove("show");
        if(headerSocial) headerSocial.classList.remove("show");
      }
    });
  });

  const scrollAnimElements = document.querySelectorAll(".scroll-anim");
  const scrollHandler = () => {
    const triggerBottom = window.innerHeight * 0.85;
    scrollAnimElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) el.classList.add("visible");
    });
  };
  window.addEventListener("scroll", scrollHandler);
  scrollHandler();

  const ticker = document.getElementById("ticker-text");
  if (ticker) {
    const nationalArticles = document.querySelectorAll('#nacionales-grid .news-item h4');
    const newsTitles = Array.from(nationalArticles).map(article => article.textContent);
    ticker.textContent = "🔔 " + newsTitles.join(" • ") + " • ";
  }
});

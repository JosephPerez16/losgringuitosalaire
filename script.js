document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");
  menuToggle.addEventListener("click", () => navUl.classList.toggle("show"));

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
});

function loadNationalTicker() {
  const ticker = document.getElementById("ticker-text");
  const newsTitles = [];
  const nationalArticles = document.querySelectorAll('#nacionales-grid .news-item h4');
  nationalArticles.forEach(article => newsTitles.push(article.textContent));
  ticker.textContent = "🔔 " + newsTitles.join(" • ") + " • ";
}

const toggle = document.getElementById("toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  }
});

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }

  });

}, {
  threshold:0.15
});

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".reveal-timeline").forEach((el) => {
  observer.observe(el);
});

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = progress + "%";

});

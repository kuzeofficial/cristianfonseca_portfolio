if (localStorage.Theme) {
  document.documentElement.classList.add(localStorage.Theme);
} else {
  document.documentElement.classList.add("theme-light");
  localStorage.setItem("Theme", "theme-light");
}

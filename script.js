function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function the(){
  toggleMenu();
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta.content === "light") {
    meta.content = "dark";
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    meta.content = "light";
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
};
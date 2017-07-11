window.onload = function() {
  menu = document.getElementById("menu");
  menu_switch = document.getElementById("menu-switch");

  toggleMenu = function() {
    menu.classList.toggle("visible");
    menu_switch.classList.toggle("x");
  }

  menu_switch.onclick = toggleMenu;
  menu_switch.onkeydown = toggleMenu;
}

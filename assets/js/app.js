window.onload = function() {
  menu = document.getElementById("menu");
  menu_switch = document.getElementById("menu-switch");
  menu_switch_icon = menu_switch.getElementsByTagName("span")[0];

  toggleMenu = function() {
    menu.classList.toggle("visible");
    menu_switch_icon.classList.toggle("fa-bars");
    menu_switch_icon.classList.toggle("fa-times");
  }

  menu_switch.onclick = toggleMenu;
  menu_switch.onkeydown = toggleMenu;
}

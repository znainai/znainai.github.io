window.onload = function() {
  initMenuSwitchForMobileVersion();
  disableGoogleMapsSrollToZoom();
}

function initMenuSwitchForMobileVersion() {
  menu = document.getElementById("menu");
  menu_switch = document.getElementById("menu-switch");

  toggleMenu = function() {
    menu.classList.toggle("visible");
    menu_switch.classList.toggle("x");
  }

  menu_switch.addEventListener("click", toggleMenu);
  menu_switch.addEventListener("keydown", toggleMenu);
}

function disableGoogleMapsSrollToZoom() {
  map = document.getElementById("map");
  if ( map === null ) { return; }
  map_container = map.parentNode;

  map_container.addEventListener("click", function() {
    map.classList.add("clicked");
  })

  map_container.addEventListener("mouseleave", function() {
    map.classList.remove("clicked")
  });
}

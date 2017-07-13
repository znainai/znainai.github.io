window.onload = function() {
  initMenuSwitchForMobileVersion();
  disableGoogleMapsSrollToZoom();
}

function initMenuSwitchForMobileVersion() {
  var menu = document.getElementById("menu");
  var menu_switch = document.getElementById("menu-switch");

  toggleMenu = function() {
    menu.classList.toggle("visible");
    
    var icons = menu_switch.getElementsByTagName("span");
    [].forEach.call(icons, function(el) {
      el.classList.toggle("hidden");
    });
  }

  menu_switch.addEventListener("click", toggleMenu);
  menu_switch.addEventListener("keydown", toggleMenu);
}

function disableGoogleMapsSrollToZoom() {
  var map = document.getElementById("map");
  if ( map === null ) { return; }
  var map_container = map.parentNode;

  map_container.addEventListener("click", function() {
    map.classList.add("clicked");
  })

  map_container.addEventListener("mouseleave", function() {
    map.classList.remove("clicked")
  });
}

(function () {
  "use strict";

  var SVG_ATTRS =
    'xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" ' +
    'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';

  var ICONS = {
    calendar:
      '<rect width="18" height="18" x="3" y="4" rx="2"/>' +
      '<line x1="16" x2="16" y1="2" y2="6"/>' +
      '<line x1="8" x2="8" y1="2" y2="6"/>' +
      '<line x1="3" x2="21" y1="10" y2="10"/>',
    "map-pin":
      '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>' +
      '<circle cx="12" cy="10" r="3"/>',
    drone:
      '<path d="M10 10 7 7"/>' +
      '<path d="m10 14-3 3"/>' +
      '<path d="m14 10 3-3"/>' +
      '<path d="m14 14 3 3"/>' +
      '<path d="M14.205 4.139a4 4 0 1 1 5.439 5.863"/>' +
      '<path d="M19.637 14a4 4 0 1 1-5.432 5.868"/>' +
      '<path d="M4.367 10a4 4 0 1 1 5.438-5.862"/>' +
      '<path d="M9.795 19.862a4 4 0 1 1-5.429-5.873"/>' +
      '<rect x="10" y="8" width="4" height="8" rx="1"/>',
    crosshair:
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="22" x2="18" y1="12" y2="12"/>' +
      '<line x1="6" x2="2" y1="12" y2="12"/>' +
      '<line x1="12" x2="12" y1="6" y2="2"/>' +
      '<line x1="12" x2="12" y1="22" y2="18"/>',
    "circle-check":
      '<circle cx="12" cy="12" r="10"/>' +
      '<path d="m9 12 2 2 4-4"/>',
    eye:
      '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>' +
      '<circle cx="12" cy="12" r="3"/>',
    "list-plus":
      '<path d="M11 12H3"/>' +
      '<path d="M16 6H3"/>' +
      '<path d="M16 10H3"/>' +
      '<path d="M11 18H3"/>' +
      '<path d="M18 15v6"/>' +
      '<path d="M21 18h-6"/>',
    clapperboard:
      '<path d="M20.2 6 3 11l-.9-2.4c-.4-1.1.4-2.3 1.5-2.7l13.5-4c1.1-.4 2.3.4 2.7 1.5l.9 2.4Z"/>' +
      '<path d="M6.8 16.8 3 18l.9 2.4c.4 1.1 1.6 1.9 2.7 1.5l13.5-4c1.1-.4 1.9-1.6 1.5-2.7l-.9-2.4-3.8 1.2"/>' +
      '<path d="M6 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2"/>',
    "notebook-pen":
      '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/>' +
      '<path d="M2 6h4"/>' +
      '<path d="M2 10h4"/>' +
      '<path d="M2 14h4"/>' +
      '<path d="M2 18h4"/>' +
      '<path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"/>',
    printer:
      '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>' +
      '<path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/>' +
      '<rect x="6" y="14" width="12" height="8" rx="1"/>',
    "clipboard-list":
      '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>' +
      '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>' +
      '<path d="M12 11h4"/>' +
      '<path d="M12 16h4"/>' +
      '<path d="M8 11h.01"/>' +
      '<path d="M8 16h.01"/>',
    "message-square-text":
      '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' +
      '<path d="M8 10h8"/>' +
      '<path d="M8 14h6"/>'
  };

  function renderIcons() {
    var nodes = document.querySelectorAll("[data-lucide]");
    nodes.forEach(function (node) {
      var name = node.getAttribute("data-lucide");
      var paths = ICONS[name];
      if (!paths) return;
      node.innerHTML = "<svg " + SVG_ATTRS + ">" + paths + "</svg>";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderIcons);
  } else {
    renderIcons();
  }
})();

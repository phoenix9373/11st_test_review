"use strict";

import "../style.css";

const routes = {
  "/home": "Home",
  "/about": "About",
  "/project": "Project",
};

const $div = document.querySelector("#root");

// pushstate, onpopstate
window.onload = () => {
  const historyLinker = document.querySelector("ul");

  historyLinker.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) return;

    const pathName = event.target.getAttribute("route");

    historyRouterPush(pathName, $div);
  });
};

window.onpopstate = () => {
  renderHTML($div, window.location.pathname);
};

const historyRouterPush = (pathName, element) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(element, routes[pathName]);
};

const renderHTML = (element, route) => {
  element.innerHTML = route;
};

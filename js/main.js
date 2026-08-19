(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Back to top
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    var toggleBackToTop = function () {
      backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
  function openNav() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      if (isOpen) closeNav(); else openNav();
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      closeNav();
    });
  }

  // Active nav link highlighting on scroll
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", match);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  // Work section tabs (Education / Community / Data & Research)
  var workTabs = Array.prototype.slice.call(document.querySelectorAll('.work-tabs [role="tab"]'));
  if (workTabs.length) {
    var activateTab = function (tab, moveFocus) {
      workTabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute("aria-selected", selected ? "true" : "false");
        t.tabIndex = selected ? 0 : -1;
        var icon = t.querySelector(".work-tab-icon");
        if (icon) icon.textContent = selected ? "−" : "+";

        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (!panel) return;
        if (selected) {
          panel.hidden = false;
          panel.classList.add("entering");
          // force reflow so the opacity transition actually runs
          void panel.offsetWidth;
          panel.classList.remove("entering");
        } else {
          panel.hidden = true;
        }
      });
      if (moveFocus) tab.focus();
    };

    workTabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        activateTab(tab, false);
      });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = workTabs[(i + 1) % workTabs.length];
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = workTabs[(i - 1 + workTabs.length) % workTabs.length];
        else if (e.key === "Home") next = workTabs[0];
        else if (e.key === "End") next = workTabs[workTabs.length - 1];
        if (next) {
          e.preventDefault();
          activateTab(next, true);
        }
      });
    });
  }

  // Generic dropdown menus (e.g. Take Our Surveys)
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll(".dropdown"));
  if (dropdowns.length) {
    var closeDropdown = function (dd) {
      dd.classList.remove("is-open");
      var btn = dd.querySelector(".dropdown-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    };
    var closeAllDropdowns = function () {
      dropdowns.forEach(closeDropdown);
    };
    dropdowns.forEach(function (dd) {
      var toggleBtn = dd.querySelector(".dropdown-toggle");
      if (!toggleBtn) return;
      toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = dd.classList.contains("is-open");
        closeAllDropdowns();
        if (!isOpen) {
          dd.classList.add("is-open");
          toggleBtn.setAttribute("aria-expanded", "true");
        }
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAllDropdowns();
    });
    document.addEventListener("click", function (e) {
      dropdowns.forEach(function (dd) {
        if (dd.classList.contains("is-open") && !dd.contains(e.target)) closeDropdown(dd);
      });
    });
  }

  // Scroll-reveal animations
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();

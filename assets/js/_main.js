/* ==========================================================================
   Theme toggle functions
   ========================================================================== */

// Last-resort fallback only: _layouts/default.html always writes an explicit
// data-theme on <html>, picked by _includes/site_theme from default_theme (or
// seasonal_theme) in _config.yml.
const defaultTheme = 'dark';

// Set the theme on page load or when explicitly called
// localStorage throws rather than returning null when site data is blocked, and
// setTheme runs inside document.ready ahead of every other binding, so an
// unguarded read took the theme toggle and the rest of the handler down with it.
let readStoredTheme = () => {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
};

// The meta is server-rendered from the site default, so it has to be rewritten
// whenever the scheme changes or a visitor who picked light keeps a dark
// browser chrome above a light page. The colour is read from the palette that
// is actually compiled in, since a seasonal theme brings its own; the two hex
// values are only a fallback for a browser that cannot report it.
let setThemeColorMeta = (theme) => {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) return;
  const background = getComputedStyle(document.documentElement)
    .getPropertyValue("--global-bg-color").trim();
  meta.setAttribute("content", background || (theme === "dark" ? "#252525" : "#F4F1EC"));
};

let setTheme = (theme) => {
  const use_theme =
    theme ||
    readStoredTheme() ||
    $("html").attr("data-theme") ||
    defaultTheme;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    setThemeColorMeta("dark");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    setThemeColorMeta("light");
  }
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  // The choice not persisting is survivable; the toggle not working is not.
  try { localStorage.setItem("theme", new_theme); } catch (e) {}
  setTheme(new_theme);
};

/* ==========================================================================
   Deferred media
   ========================================================================== */

// The data-saver switch, set early in _includes/head.html from navigator.connection.
let savingData = () => document.documentElement.classList.contains("save-data");

// Paper animations (_includes/paper-figure.html). The video has no src until it
// is near the screen, so a reader who never scrolls to it downloads only the
// poster; it plays while visible and pauses when scrolled away. On a data-saver
// connection, under reduced motion, or when the browser refuses to autoplay, it
// stays a still with the browser's own controls, and preload="none" keeps even
// that from downloading anything until the reader presses play.
let paperAnimations = () => {
  const videos = document.querySelectorAll("video.paper-animation[data-src]");
  if (!videos.length) return;
  let reduceMotion = false;
  try { reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  const attach = (video) => { if (!video.getAttribute("src")) video.src = video.dataset.src; };
  const asStill = (video) => { attach(video); video.controls = true; };
  if (savingData() || reduceMotion || !("IntersectionObserver" in window)) {
    videos.forEach(asStill);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (video.controls) return;  // already handed to the reader as a still
      if (entry.isIntersecting) {
        attach(video);
        const playing = video.play();
        if (playing && playing.catch) playing.catch(() => asStill(video));
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, { rootMargin: "200px 0px" });
  videos.forEach((video) => observer.observe(video));
};

// Slide decks on the talks page (_pages/talks.html). The cover is a link to the
// deck; a plain click turns it into the embedded deck in place, while a click
// that asks for a new tab is left alone.
let slidesFacades = () => {
  document.querySelectorAll("a.slides-facade[data-embed]").forEach((facade) => {
    facade.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const frame = document.createElement("iframe");
      frame.src = facade.dataset.embed;
      frame.title = facade.dataset.title || "Slides";
      frame.width = "100%";
      frame.height = "400";
      frame.setAttribute("frameborder", "0");
      frame.setAttribute("allowfullscreen", "true");
      frame.style.borderRadius = "5px";
      frame.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      facade.replaceWith(frame);
    });
  });
};

/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // SCSS SETTINGS
  // No px copy of $large here any more: the stylesheet's breakpoints compile to
  // em, so a hard-coded pixel figure only agreed with them at a 16px default
  // font size. Anything that needs the breakpoint should ask CSS, not restate it.
  //
  // Same for the masthead: it is a min-height now and grows with its contents,
  // so the offset anchored links need has to be measured rather than assumed.
  const scssMastheadHeight = $('.masthead').outerHeight();

  // Initialize theme (defaults to dark if no preference saved)
  setTheme();

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

  // Media that loads on demand
  paperAnimations();
  slidesFacades();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // The upstream theme's "restore the follow menu on resize" handler used to sit
  // here. It compared the window against a hard-coded 925 while the stylesheet's
  // breakpoints compile to em, so whenever the reader's default font size was not
  // 16px the two disagreed and it could force .author__urls open in its popup
  // form -- with nothing able to close it again, since this site's
  // author-profile.html carries no follow button. The list is laid out by CSS
  // alone now.

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -scssMastheadHeight, preventDefault: false});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});

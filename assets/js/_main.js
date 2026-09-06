/* ==========================================================================
   Theme toggle functions
   ========================================================================== */

// Last-resort fallback only: _includes/head.html always writes an explicit
// data-theme on <html>, picked from the christmas_theme flag in _config.yml.
const defaultTheme = 'dark';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    defaultTheme;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};

/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // SCSS SETTINGS
  // No px copy of $large here any more: the stylesheet's breakpoints compile to
  // em, so a hard-coded pixel figure only agreed with them at a 16px default
  // font size. Anything that needs the breakpoint should ask CSS, not restate it.
  const scssMastheadHeight = 70;  // pixels

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

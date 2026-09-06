/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

// Put every link back and forget the recorded widths.
//
// updateNav() only ever restores a link when the space now available exceeds the
// width recorded when that link was removed. Those recordings assume the layout
// has not changed underneath them, and at the $large boundary it does: the nav
// goes from full width to a grid column, and its padding jumps by a few hundred
// pixels in one step. Widths recorded on one side of that boundary are
// meaningless on the other, and acting on them restores links that do not fit --
// they end up overlapping the theme toggle. Resizing is exactly when the
// boundary gets crossed, so start each resize from scratch.
function resetNav() {
  var $vlinks_persist_tail = $vlinks.children('.persist.tail');

  while ($hlinks.children().length > 0) {
    if ($vlinks_persist_tail.length > 0) {
      $hlinks.children().first().insertBefore($vlinks_persist_tail);
    } else {
      $hlinks.children().first().appendTo($vlinks);
    }
  }

  breaks = [];
}

function updateNav() {
  // Re-query persist.tail element each time to ensure correct DOM reference
  var $vlinks_persist_tail = $vlinks.children('.persist.tail');

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children(':not(.persist)').length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children(':not(.persist)').last().prependTo($hlinks);

      availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass('hidden');
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Publish the measured masthead height and offset the body by it.
  //
  // This used to pad the sidebar by the same amount. That padding was doing two
  // jobs: holding the sidebar clear of the fixed masthead once it sticks, and,
  // at the top of the page, adding a second gap on top of the one body's padding
  // had already created. Handing the measurement to CSS lets the sidebar use it
  // as a sticky offset instead, which does the first job without the second.
  // Anything that wants extra room above the avatar, like the Christmas wreath,
  // still adds its own padding on top.
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  document.documentElement.style.setProperty('--masthead-height', mastheadHeight + 'px');

}

// Window listeners

$(window).on('resize', function () {
  resetNav();
  updateNav();
});

if (screen.orientation) {
  screen.orientation.addEventListener("change", function () {
    resetNav();
    updateNav();
  });
}

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();

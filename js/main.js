$(document).ready(() => {
  const links = $(".aboutus-container a");
  if (links && links.length > 0) {
    links.each((index, element) => {
      element.onclick = toggleClass;
    });
  }

  //code to highlight the menu
  $("nav").highlightMenu();
});

(function ($) {
  $.fn.highlightMenu = function (options) {
    // Define default options
    var defaults = $.extend(
      {
        bgColor: "limegreen",
        color: "#9e9e9e",
        hoverBgColor: "#cccccc",
        hoverColor: "#fff",
        transistion: "color 0.3s ease",
        cursorType: "pointer",
      },
      options
    );

    return this.each(function () {
      var items = $("li a");
      var o = defaults;
      //set default styles
      items
        .css("text-decoration", "none")
        .css("color", o.color)
        .css("transition", o.transistion)
        .css("cursor", o.cursorType);
      $("ul").css("display", "inline-block").css("list-style-type", "none");
      items.mouseover(function () {
        $(this).css("color", o.hoverColor);
      });
      //mouseout event
      items.mouseout(function () {
        $(this).css("color", o.color);
      });
    });
  };
})(jQuery);

//class for toggling the class
function toggleClass() {
  const condition = this.innerHTML;
  let showMore = condition === "<br>Show more..";
  const divOnAction = $(this).prev();
  if (showMore) {
    this.innerHTML = "<br>Show less..";
    $(this).prev().slideDown(1000); //easing added
  } else {
    this.innerHTML = "<br>Show more..";
    $(this).prev().slideUp(1000); //easing added
  }
  divOnAction.toggleClass("hide");
}

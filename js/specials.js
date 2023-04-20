// Variables:
var nItems = 0;
var iCurrentSlide = 1;
var iNextSlide = 2;
var iSlideInterval = 3; // in seconds
var looper = null;

$(document).ready(function () {
  // Show the first slide and start the slide show:
  $(".carousel > #item1").show();
  startSlider();

  // Make the slide show stop on slide hover:
  $(".carousel > div").hover(
    function () {
      // onmouseover
      window.clearInterval(looper);
    },
    function () {
      // onmouseout
      startSlider();
    }
  );

  var searchTerm;
  $("#btnSearch").click(function () {
    // Set the search term
    searchTerm = "";
    if ($("#search").val() == "") {
      alert("You must enter one or more tags!");
    } else {
      searchTerm = $("#search").val();
      // Build the URL based on the search term
      var url =
        "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "format=json&jsoncallback=?&tags=" +
        searchTerm +
        "&tagmode=all";
      $.getJSON(url, function (data) {
        var html = "";
        if(data.items.length>0){
          $.each(data.items, function (i, item) {
            html += "<img src=" + item.media.m + ">";
            html += "<div class='details'><h2>" + item.title + "</h2>";
            html += "<p><b>Tags: </b>" + item.tags + "</p></div>";
          });
        } else {
          html = "No search found. Please try again!!"
        }
        
        $("#photos").html(html);
      });
    }
  });
});

function startSlider() {
  nItems = $(".carousel > div").length;

  looper = setInterval(function () {
    if (iNextSlide > nItems) {
      iCurrentSlide = 1;
      iNextSlide = 1;
    }

    $(".carousel > div").hide();
    $(".carousel > #item" + iNextSlide).show();

    iCurrentSlide = iNextSlide;
    iNextSlide++;
  }, iSlideInterval * 1000);
}

function showSlide(isPrev) {
  window.clearInterval(looper);

  var iNewSlide = 0;

  if (isPrev) {
    // Show previous slide:
    iNewSlide = --iCurrentSlide;
  } else {
    // Show next slide:
    iNewSlide = ++iCurrentSlide;
  }

  if (iNewSlide > nItems) iNewSlide = 1;
  else if (iNewSlide < 1) iNewSlide = nItems;

  $(".carousel > div").hide();
  $(".carousel > #item" + iNewSlide).show();

  iCurrentSlide = iNewSlide;
  iNextSlide = iNewSlide + 1;

  startSlider();
}

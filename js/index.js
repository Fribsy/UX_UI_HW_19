$(document).ready(function () {
  console.log("JS loaded");

  // Button Hover
  $("button").hover(
    function () {
      $(this).css({
        "background-color": "#8aabd1",
        color: "#333847",
      });
    },
    function () {
      $(this).css({
        "background-color": "",
        color: "",
      });
    }
  );
});

// Img Hover
$("img").hover(
  function () {
    $(this).css({
      transform: "scale(1.1)",
    });
  },
  function () {
    $(this).css({
      transform: "",
    });
  }
);

$(".navigation li").hover(
  function () {
    $(this).addClass("bold");
  },
  function () {
    $(this).removeClass("bold");
  }
);

// Hero Image Toggle
var isTransformed = false;
$(".heroImg img").click(function () {
  isTransformed = !isTransformed;

  var imagePath = isTransformed ? "images/Mountain.jpg" : "images/Headshot.jpg";
  $(this).attr("src", imagePath);

  var originalWidth = $(this).data("original-width");
  var originalHeight = $(this).data("original-height");
  $(this).css({
    width: originalWidth,
    height: originalHeight,
  });
});

$(".heroImg img").each(function () {
  $(this).data("original-width", $(this).width());
  $(this).data("original-height", $(this).height());
});

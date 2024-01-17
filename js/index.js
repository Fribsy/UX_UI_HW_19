$(document).ready(function() {
    console.log('JS loaded');

    // Button Hover
    $('button').hover(
      function() {
        // Hover over
        $(this).css({
          'background-color': '#8aabd1',
          'color': '#333847'
        });
      },
      function() {
        // Hover out
        $(this).css({
          'background-color': '',
          'color': ''
        });
      }
    );
  });

  // Img Hover
  $('img').hover(
    function() {
      // Hover over
      $(this).css({
        'transform': 'scale(1.1)'
      });
    },
    function() {
      // Hover out
      $(this).css({
        'transform': ''
      });
    }
  );

  // Navigation Text Bolding
  $('.navigation li').hover(
    function() {
      // Hover over
      $(this).css({
        'font-weight': 'bold'
      });
    },
    function() {
      // Hover out
      $(this).css({
        'font-weight': ''
      });
    }
  );

// Hero Image Toggle 
var isTransformed = false;
$('.heroImg img').click(function() {
  isTransformed = !isTransformed;

  var imagePath = isTransformed ? 'images/Mountain.jpg' : 'images/Headshot.jpg';
  $(this).attr('src', imagePath);

  var originalWidth = $(this).data('original-width');
  var originalHeight = $(this).data('original-height');
  $(this).css({
    'width': originalWidth,
    'height': originalHeight
  });
});

$('.heroImg img').each(function() {
  $(this).data('original-width', $(this).width());
  $(this).data('original-height', $(this).height());
});
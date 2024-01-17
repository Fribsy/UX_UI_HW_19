$(document).ready(function() {
    console.log('JS loaded');

    // Hover
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
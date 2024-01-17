console.log('JS loaded!');
$(document).ready(function() {
    // Check if JavaScript has loaded
    console.log('JavaScript loaded successfully');

    // Hover effect for buttons
    $('button').hover(
      function() {
        // Hover over
        $(this).css({
          'background-color': '#ffffff',
          'color': '#333847'
        });
      },
      function() {
        // Hover out
        $(this).css({
          'background-color': '', // Empty to revert to the original style
          'color': ''
        });
      }
    );
  });
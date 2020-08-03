/*
  Author: Karan Singh Singare
  Date: August 03, 2020
*/

/**
 * Grabing the submit button
 * and preventing the default behaviour of the submit button
 * this is will not let the form page refresh/redirect
 */

$(document).ready(function() {
  $('#Gamble').on('click', function(e) {
    e.preventDefault();
  });
});

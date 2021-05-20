$(document).ready(function() {
  $('#tweet-text').on("input", function(e) {
    let $charLimit = 140;
    let $inputLength = $(this).val().length;
    let $charRemaining = $charLimit - $inputLength;
    // Traversing to the parent element of the textarea
    const $parent = ($(this).parent())
    let $counterElem = $parent.find('.counter');
    // setting counter elements value to the remaining chars
    $counterElem.val($charRemaining);
    if ($inputLength > $charLimit) {
      $counterElem.addClass("over-limit");
    } else {
      $counterElem.removeClass("over-limit")
    }
  })
});
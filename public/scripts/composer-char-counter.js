$(document).ready(function() {
  console.log("Connected")
  $('#tweet-text').on("input", function(e){
    let $count = 140;
    let $inputLength = $(this).val().length;
    let $charRemaining = $count - $inputLength; 
    const $parent = ($(this).parent())
    let $counterElem = $parent.find('.counter');
    $counterElem.val($charRemaining);
  })
});
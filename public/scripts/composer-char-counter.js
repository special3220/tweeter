$(document).ready(function() {
  console.log("Connected")
  const tweet = $('#tweet-text');
  tweet.on("keypress", function(e){
    console.log($(this).val());
  })
});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function (tweet) {

  // Function to prevent Cross-Site Scripting
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  const safeText = escape(tweet.content.text);

  // creates and return HTML for each tweet
  const $tweet = $(`<article class="tweet">
                      <header>
                        <div>
                          <img src=${tweet.user.avatars} alt="profile avatar">
                          <span>${tweet.user.name}</span>
                        </div>
                        <div><span>${tweet.user.handle}</span></div>
                      </header>
                      <p>${safeText}</p>
                      <footer>
                        <div><span>${timeago.format(tweet.created_at)}</span></div>
                        <div>
                          <i class="fas fa-flag"></i>
                          <i class="fas fa-retweet"></i>
                          <i class="fas fa-heart"></i>
                        </div>
                      </footer>
                    </article>`);
  return $tweet;
}

const renderTweets = function (tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    // calling createTweetElement to create tweet element
    const tweetElem = createTweetElement(tweet);
    // Appending tweet element to the tweet container
    $('#tweets-container').prepend(tweetElem);
  }
}
const loadTweets = function () {
  $.get('/tweets', function (data) {
    renderTweets(data)
  })
}

$(document).ready(function () {
  const $message = $('.error-message span');
  $message.hide();
  loadTweets();
  $("#tweet-form").submit(function (e) {
    e.preventDefault();
    const $form = $(this);
    const $tweetText = $form.find("textarea");
    // Hiding error message when use starts inputing again
    $tweetText.on("input", () => $message.fadeOut(500));
    const tweetLength = $tweetText.val().trim().length;
    const url = $form.attr('action');
    if (!tweetLength) {
      $message.text("Please write your Tweet before submission!");
      $message.fadeIn(500);
    } else if (tweetLength > 140) {
      $message.text("You can't go over 140 characters!");
      $message.fadeIn(500);
    } else {
      $.post(url, $form.serialize())
        .then(data => {
          $tweetText.val('');
          // $message.hide();
          let newTweet = createTweetElement(data);
          $('#tweets-container').prepend(newTweet);
        })
    }
  })
})
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function (tweet) {
  // creates and return HTML for each tweet
  const $tweet = $(`<article class="tweet">
                      <header>
                        <div>
                          <img src=${tweet.user.avatars} alt="profile avatar">
                          <span>${tweet.user.name}</span>
                        </div>
                        <div><span>${tweet.user.handle}</span></div>
                      </header>
                      <p>${tweet.content.text}</p>
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
  loadTweets();
  $("#tweet-form").submit(function (e) {
    e.preventDefault();
    const $form = $(this);
    const $tweetText = $form.find("textarea");
    const tweetLength = $tweetText.val().length;
    const url = $form.attr('action');
    if (!tweetLength) {
      alert("Please write your Tweet before submission!")
    } else if (tweetLength > 140) {
      alert("You can't go over 140 characters!")
    } else {
      let posting = $.post(url, $form.serialize());
      $tweetText.val('')
      posting.done(function () {
        $('#tweets-container').empty();
        loadTweets();
      })
    }

  })
})
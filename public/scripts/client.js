/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(tweet) {
  return $(`<article class="tweet">
                      <header>
                        <div>
                          <img src=${tweet.user.avatars} alt="profile avatar">
                          <span>${tweet.user.name}</span>
                        </div>
                        <div>
                          <span>${tweet.user.handle}</span>
                        </div>
                      </header>
                      <p>${tweet.content.text}</p>
                      <footer>
                        <div><span>10</span> Days Ago</div>
                        <div>
                          <i class="fas fa-flag"></i>
                          <i class="fas fa-retweet"></i>
                          <i class="fas fa-heart"></i>
                        </div>
                      </footer>
                    </article>`);
}

const $tweet = createTweetElement(tweetData)
$(document).ready(function () {
  // $('main').append($tweet);
  for(let i = 0; i< 5; i++) {
    $('#tweets-container').append($tweet);  }
})
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function (tweet) {
  // creates and return HTML for each tweet
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

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for(let tweet of tweets){
    $('#tweets-container').append(createTweetElement(tweet));
  }
}


$(document).ready(function () {
  renderTweets(data)
})
const Twit = require("twit");
const notifier = require("node-notifier");
const open = require("open");
const franc = require("franc");

const apikey = "7yuQE8rifi6K3u3fVUJRPDqzv";
const apiSecretKey = "IzFcuPGhEMPxAdO4YgIQA7jJXkeDFiKxG84rIV5RX3qa0G7Cf4";
const accessToken = "105122247-DoHNjjNPcSVrMmE7u1aKFq0Bke8vxRb1J8bv96tZ";
const accessTokenSecret = "VNfbWi7duxx8QskQmoLnsgTLwgPVzeIGC3vPR6Rf6tdNG";

var T = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

(async () => {
  /**
   * 1. GET RECENT TWEETS
   */
  // T.get(
  //   "search/tweets",
  //   { q: "#tesla since:2022-01-25", count: 100 },
  //   function (err, data, response) {
  //     // const tweets = data.statuses;
  //     // const tweets = data.statuses.map(
  //     //   (tweet) => `LANG: ${franc(tweet.text)} : ${tweet.text}`
  //     // ); //CHECK LANGUAGE
  //     const tweets = data.statuses
  //       .map((tweet) => `LANG: ${franc(tweet.text)} : ${tweet.text}`)
  //       .filter((tweet) => tweet.toLowerCase().includes("elon"));
  //     console.log(tweets);
  //   }
  // );
  /**
   *  2. REAL TIME MONITORING USING STREAM (HASHTAG)
   */
  // var stream = T.stream("statuses/filter", { track: "#tesla" });
  // stream.on("tweet", function (tweet) {
  //   console.log(tweet.text);
  //   console.log("Language: " + franc(tweet.text));
  //   console.log("------");
  // });
  /**
   * 3. REAL TIME MONITORING USING STREAM (LOCATION)
   */
  // var sanFrancisco = ["-122.75", "36.8", "-121.75", "37.8"];
  // var stream = T.stream("statuses/filter", { locations: sanFrancisco });
  // //SHOW NOTIFICATION FOR EACH RECEIVED TWEET
  // stream.on("tweet", function (tweet) {
  //   console.log(tweet.text);
  //   let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
  //   notifier.notify({
  //     title: tweet.user.name,
  //     message: tweet.text,
  //   });
  //   notifier.on("click", async function (notifierObject, options, event) {
  //     console.log("clicked");
  //     await open(url);
  //   });
  // });
})();

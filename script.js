// Fun fact button
var funFactBtn = document.getElementById("funFactBtn");
var funFactText = document.getElementById("funFactText");

funFactBtn.addEventListener("click", function() {
    funFactText.textContent = "Fun Fact: I have a playlist with over 500 songs on Spotify!";
});

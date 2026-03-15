// Fun fact button
var funFactBtn = document.getElementById("funFactBtn");
var funFactText = document.getElementById("funFactText");

var facts = [
    "I have a playlist with over 500 songs on Spotify!",
    "I once binge-watched an entire anime series in one weekend.",
    "My favorite travel memory is waking up to a mountain view.",
    "I've been gaming since I was 5 years old.",
    "I can listen to the same song on repeat for hours and not get tired of it.",
    "I'm a big fan of anime and manga"
];

var factIndex = 0;

funFactBtn.addEventListener("click", function() {
    funFactText.textContent = "Fun Fact: " + facts[factIndex];
    factIndex = factIndex + 1;
    if (factIndex >= facts.length) {
        factIndex = 0;
    }
});
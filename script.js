const quotes = [
    "Christmas is not as much about opening our presents as opening our hearts. – Janice Maeditere",
    "Merry Christmas and a Happy New Year from the coding world!",
    "Wishing you peace, love, and lots of coffee this holiday season!",
    "May your code be bug-free and your holidays stress-free.",
    "Santa Claus is coming to town... with a bag full of GPUs!",
    "All I want for Christmas is... a working deploy.",
    "Jingle bells, coding smells, the server crashed away!",
    "Eat, drink, and code merry!",
    "Debugging is the true spirit of Christmas.",
    "May your holidays be filled with joy and your code with efficiency.",
    "Christmas will always be as long as we stand heart to heart and hand in hand. – Dr. Seuss",
    "The best way to spread Christmas cheer is singing loud for all to hear. – Elf",
    "Christmas isn't a season. It's a feeling. – Edna Ferber",
    "Peace on earth will come to stay, when we live Christmas every day. – Helen Steiner Rice",
    "Gifts of time and love are surely the basic ingredients of a truly merry Christmas. – Peg Bracken",
    "Christmas is a season not only of rejoicing but of reflection. – Winston Churchill",
    "At Christmas, all roads lead home. – Marjorie Holmes",
    "The joy of brightening other lives becomes for us the magic of the holidays. – W.C. Jones",
    "Christmas is the day that holds all time together. – Alexander Smith",
    "He who has not Christmas in his heart will never find it under a tree. – Roy L. Smith",
    "Christmas is like candy; it slowly melts in your mouth sweetening every taste bud, making you wish it could last forever.” – Richelle E. Goodrich",
"Christmas is the season for kindling the fire of hospitality.” – Washington Irving",
"The best way to spread Christmas cheer is singing loud for all to hear.” – Will Ferrell",
"I will honor Christmas in my heart, and try to keep it all the year.” – Charles Dickens",
"Gifts of time and love are surely the basic ingredients of a truly merry Christmas.” – Peg Bracken",
"Blessed is the season which engages the whole world in a conspiracy of love.” – Hamilton Wright Mabie",
"I like to compare the holiday season with the way a child listens to a favorite story. The pleasure is in the familiar way the story begins, the anticipation of familiar turns it takes, the familiar moments of suspense, and the familiar climax and ending.” – Fred Rogers",
"Christmas Day is in our grasp, as long as we have hands to clasp! Christmas Day will always be, just as long, as we have we! Welcome Christmas while we stand, heart to heart, and hand in hand!” –Dr. Seuss",
"T’was the night before Christmas, when all through the house, not a creature was stirring, not even a mouse.” – Clement Clarke Moore",
"The earth has grown old with its burden of care, but at Christmas it always is young, the heart of the jewel burns lustrous and fair, and its soul full of music breaks the air, when the song of angels is sung.” – Phillips Brooks",
"The Christmas tree is a symbol of love, not money. There’s a kind of glory to them when they’re all lit up that exceeds anything all the money in the world could buy. – Andy Rooney",
"Let us keep Christmas beautiful without a thought of greed. – Ann Garnett Schultz",
"What is Christmas? It is tenderness for the past, courage for the present, hope for the future. – Agnes M. Pahro",
"Like snowflakes, my Christmas memories gather and dance – each beautiful, unique, and gone too soon. – Deborah Whipp",
"Peace on earth will come to stay, when we live Christmas every day. – Helen Steiner Rice",
"He who has not Christmas in his heart will never find it under a tree. – Roy L. Smith",
"We are better throughout the year for having, in spirit, become a child again at Christmastime. – Laura Ingalls Wilder",
"Christmas is a season for kindling the fire for hospitality in the hall, the genial flame of charity in the heart. – Washington Irving",
"Unless we make Christmas an occasion to share our blessings, all the snow in Alaska won’t make it ‘white.’ – Bing Crosby",
"Now the God of hope fill you with all joy and peace in believing that ye may abound in hope, through the power of the Holy Ghost.   – Romans 15:13",
"Thanks be unto God for his unspeakable Gift. – 2 Corinthians 9:15",
"Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning. – James 1:17",
"You can never truly enjoy Christmas until you can look up into the Father’s face and tell Him you have received His Christmas gift. – John R. Rice",
"All the Christmas presents in the world are worth nothing without the presence of Christ. – David Jeremiah",
"May the hope, the peace, the joy, and the love represented by the birth in Bethlehem this night fill our lives and become part of all that we say and do. – Rev. Richard J. Fairchild"
];


const generateQuoteButton = document.getElementById('generate-quote');
function generateQuote() {
    const quoteDisplay = document.getElementById("quote-display");

    // Trigger fade out
    quoteDisplay.classList.add("fade-out");

    // Wait 300ms, then change quote and fade back in
    setTimeout(() => {
        // Get a new random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];

        // Update the text
        quoteDisplay.innerText = selectedQuote;

        // Fade back in
        quoteDisplay.classList.remove("fade-out");
    }, 300);
}

generateQuoteButton.addEventListener('click', generateQuote);
// Generate an initial quote on page load
generateQuote();


// Optional: Add functionality to tweet the quote
const tweetQuoteButton = document.getElementById('tweet-quote');
tweetQuoteButton.addEventListener('click', function() {
    const quoteText = document.getElementById("quote-display").innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + " #ChristmasQuotes")}`;
    window.open(tweetUrl, '_blank');
});


// Optional: Add functionality to copy the quote to clipboard
const copyQuoteButton = document.getElementById('copy-quote');
copyQuoteButton.addEventListener('click', function() {
    const quoteText = document.getElementById("quote-display").innerText;
    navigator.clipboard.writeText(quoteText).then(function() {
        alert('Quote copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});

// Optional: Add functionality to share the quote using Web Share API
const shareQuoteButton = document.getElementById('share-quote');
shareQuoteButton.addEventListener('click', function() {
    const quoteText = document.getElementById("quote-display").innerText;
    if (navigator.share) {
        navigator.share({
            title: 'Christmas Quote',
            text: quoteText,
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error); 
    } else {
        alert('Web Share API is not supported in your browser.');
    }
});


// Update the year in the footer
document.getElementById('year').textContent =new Date().getFullYear();
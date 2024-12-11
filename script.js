// List of wishes
const messages = [
    " It was great to have jayesh in team,Thank you for all the hard work and the positive energy you brought to the team, Wishing him best for future ... ",
    " As you embark on this new journey, we want to extend our best wishes to you. Your contributions and dedication have been invaluable to our team, and you will be greatly missed.",
    " Jayesh Bhai, Always keep rocking & shocking the World with your achievements !, we had very good time and lots of memories ... evergreen memory was ' Chal bhagte hai ' ",
    " Your departure is a loss for us, may your next role challenge and inspire you as much as you've inspired us. I will miss our small fights during change preparation and codegame memories and your strict nature.. all the very best ...",
    " Dilya ghari sukhi raha 😊 !! ",
    " BONVOYAGE ",
    " Best of Luck Jayesh, Apna MSCI 😉 will miss you ... ",
    " Adventure awaits—make the most of it!",
    " Stay positive and keep striving for greatness!",
    " This is just the beginning of your amazing story!",
    " Keep chasing your dreams—they're within reach!",
    " Believe in yourself, and you’ll achieve wonders!",
    " The future is bright, and it's all yours to explore!",
    " Keep it up Jayesh ! we wish more success for you ",
    " Jayesh was always ready to help !, wish him best luck for future " ,
    " " 
];

// List of wishers
const wishers = [
    " Anup Sir ",
    " Deepti ",
    " Varun  ",
    " Shreya ",
    " Sunny ",
    " Gavin ",
    " Ritesh",
    " Bhavya ",
    " Sudheer ",
    " Rashid ",
    " Rashmi",
    " Shraddha ",
    " Komal",
    " Piyush",
    " Dhanashri",
    " Manasa"
];

// Get DOM elements
const sliderMessage = document.getElementById("slider-message");
const wisher = document.getElementById("wisher");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Slider functionality
let currentIndex = 0;

// Show the current message and wisher
function updateMessage() {
    // Fade out effect for the wish
    // sliderMessage.classList.add("fadeInOut");

    setTimeout(() => {
        sliderMessage.textContent = messages[currentIndex];
        wisher.textContent = wishers[currentIndex];

        // Trigger the flip animation for the wisher
        wisher.classList.remove("FlipRotate");
        setTimeout(() => {
            wisher.classList.add("FlipRotate");
        }, 100);
    }, 500); // Matches the transition duration of the fade-out
}

// Show the previous message
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + messages.length) % messages.length;
    updateMessage();
});

// Show the next message
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % messages.length;
    updateMessage();
});

// Initialize the slider with the first message
updateMessage();

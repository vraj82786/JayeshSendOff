// List of wishes
const messages = [
    " It was great to have Jayesh in team,Thank you for all the hard work and the positive energy you brought to the team, Wishing him best for future ... ! ",
    " As you embark on this new journey, we want to extend our best wishes to you. Your contributions and dedication have been invaluable to our team, and you will be greatly missed !",
    " Jayesh Bhai, Always keep rocking & Thrill this World with your achievements !, we had very good time and lots of memories ... evergreen memory was ' Chal bhagte hai ' ! ",
    " Your departure is a loss for us, may your next role challenge and inspire you as much as you've inspired us. I will miss our small fights during change preparation and co3degame memories and your strict nature.. all the very best ! ",
    " Sometimes we were part of the same team, It was great when working with you. thanks to guide me in the initial stage, I know you hate CFT part but it is actually easy yarr 😜... ahh Ohhk late it be. Wishing you on your new adventure !! ",
    " Jayesh is a well wisher for me. I have learned a lot from Jayesh during the time here. I  Wishing you all the best as you move on to your next challenge, Thank you for all the support. ",
    " Dilya ghari sukhi raha 😊 Jayesh : The Big Brother of IVVCAPUNIX ! ",
    " go-to-help out always , but naak ke upar gussa thoda kam rakha karo yaar !🤭 ",
    " BONVOYAGE ",
    " 1) naseeb me hoga to phir milnege...switch karte karte ",
    " 2) jaha bhi raho  khush raho -CG ke sath bhi CG  ke bad bhi... ",
    " 3) Keep pressing Ctrl+S ! Needless to say, Let’s keep in touch ! "
];

// List of wishers
const wishers = [
    " Anup Sir ",
    " Deepti ",
    " Varun ",
    " Shreya ",
    " Mayuri Nikam ",
    " Sudheer Reddy ",
    " Sunny ",
    " Rashmi ",
    " Gavin ",
    " From Shreya's Creativity "
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

const button = document.querySelector('.wrapper__btn');
let imeg = document.querySelector('.block-iodine__imeg');
api = [
    "The future of this boy is cloudy.",
    "Fear will lead to the dark side. Fear breeds anger; anger breeds hatred; hatred is the key to suffering. I feel a strong fear in you.",
    "Now be brave and don't look back. Do not look back.",
    "You can't stop change, just like you can't stop the sunrise.",
    "All the problems in the universe come from the fact that no one helps anyone.",
    "You must follow me now, okay? Mine warn you. Gungans do not like strangers. Don't expect a warm welcome.",
    "You were right about one thing, Master: the negotiations were short lived.",
    "Attention controls reality.",
    "There will always be more fish.",
    "Focus on the moment. Feel, don't think. Use your instincts.",
    "The ability to speak is not a sign of intelligence.",
    "I do not approve of any action leading to war.",
    "Join me and together we will rule the galaxy like father and son.",
    "I am a Jedi, just like my father!",
    "I got sick. He became old and weak. When you're 900 years old, you can't look good, huh?",
    "“The ship entered the asteroid field, we did not dare to pursue them…”“I'm not interested in asteroids. Only the result.",
    "Obi-Wan didn't say what happened to your father? - I know everything. He said you killed him.- Not! Im your father!",
    "Is the dark side stronger? - Not. Lighter, faster, more seductive."
];

let generator = () => {
    let json = JSON.stringify(api);
    let newJSON = JSON.parse(json);
    let rand = Math.floor(Math.random() * newJSON.length);
    let testQuote = document.querySelector('.wrapper__paragraf')
    testQuote.textContent = newJSON[rand]

    return newJSON[rand]
}

button.addEventListener('click', () => {
    imeg.classList.toggle('active');
    generator();
});


// Audio
function playSound() {
    let song = document.querySelector('.sound');
    song.volume = 1;
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}




// button.addEventListener('click', function () {
    
// });
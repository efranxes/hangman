//console.log("bonjour bestie :)");

let word = "orange";

let allLetters = document.querySelectorAll('.alphabetContainer .letter');
//console.log(allLetters);
let guessContainer = document.querySelector('.guessContainer');

let guessLetterHTML = '<div class = "guessLetter"></div>';
for (counter = 0; counter < word.length; counter ++){
    guessContainer.insertAdjacentHTML('beforeend', guessLetterHTML );
}

let guessLetters = document.querySelectorAll('.guessLetter')

allLetters.forEach(function(letter){
    //console.log(letter);
    letter.addEventListener('click', function(event){
        let currentLetterHTML = event.target;
        if(!currentLetterHTML.classList.contains('clicked')){
            let currentLetter = event.target.innerHTML.toLowerCase();
            currentLetterHTML.classList.add('clicked');
            //console.log(currentLetter);
            let answers = [...word.matchAll(currentLetter)];
            console.log(answers);
            if(answers){
                answers.forEach(function(answer){
                    //console.log(answer.index);
                    for(counter = 0; counter < guessLetters.length; counter ++){
                        if(counter == answer.index){
                            guessLetters[answer.index].innerHTML = currentLetter.toUpperCase();
                        }
                    }
                })
            } else {
                //show next part of hangman
            }
        }
    })
})


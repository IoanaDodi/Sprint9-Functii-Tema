function letterCount (phrase, letter) {
    phrase = phrase.toLowerCase();
    letter = letter.toLowerCase();
    
    let count = 0

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === letter)  {
            count++;
        }
    }
    return count;
};

console.log(letterCount("Vreau sa fiu programatoare!", "a"));
console.log(letterCount("Vreau sa lucrez in programare", "r"));
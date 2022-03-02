const nationalSong = 'amar sunar bangla ami tumai valovasi.';

function reverseLetter(text) {
    let reverse = ''
    for (const char of text) {
    
         reverse = char + reverse;

        

    }return reverse;

}

const reverseResult = reverseLetter(nationalSong);
console.log(reverseResult);
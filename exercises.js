/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    if (num1 > num2){
      console.log(num1);
    } else if (num2 > num1){
      console.log(num2);
    } else {
      console.log("They are equal");
    }

}

max(3,3);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    if (num1 > num2 && num1 > num3) {
      console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
      console.log(num2);
    } else if (num3 > num1 && num3 > num2) {
      console.log(num3);
    } else if (num1 == num2 && num1 == num3) {
      console.log("They are all equal");
    } else if (num1 == num2 && num1 > num3){
      console.log(num1);
    } else {
      console.log(num3);
    }
}

maxOfThree(5,3,3);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    if (char.length != 1) {
      return false;
    }

    var lowerCase = char.toLowerCase();

    if (lowerCase == "a" || lowerCase == "e" || lowerCase == "i" || lowerCase == "o" || lowerCase == "u"){
      return true;
    }else{
      return false;
    }

}
    console.assert(isVowel('a')=== true);
    console.log(isVowel('A'));
    console.log(isVowel('e'));
    console.log(isVowel(5));
    console.log(isVowel('AeI'));

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var newPhrase = '';
    for(var i = 0; i < phrase.length; i++){
      var char = phrase[i];
      if(isVowel(char) || char == ' '){
        newPhrase += char;
      } else {
        newPhrase += char + 'o' + char;
      }
    }

    return newPhrase;
  }
console.assert(rovarspraket('this is fun') === 'tothohisos isos fofunon');
//console.log(rovarspraket('this is fun'));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";

    var total = 0;
    var length = array.length;

    for(var i = 0; i < length; i++){
      total += array[i];
    }
    return total;
}

console.log(sum([1,2,3,4]));

function multiply(array){
    "use strict";

    var total = 1;
    var length = array.length;

    for(var i = 0; i < length; i++){
      total *= array[i];
    }
    return total;
}

console.log(multiply([2,2,2,2]));
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    var word = "";
    for (var i = string.length -1; i >= 0; i--){
      word += string[i];
    } return word;
}

console.log(reverse('redrum'));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";

    var longest = 0;
    var longestString = "";

    for (var i = 0; i < words.length; i++){
      if (words[i].length > longest && typeof words[i] == 'string') {
        longest = words[i].length;
        longestString = words[i];
      }
    }
    return longestString;
}

console.log(findLongestWord(['am', 'you', 'function']));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, maxLength){
    "use strict";
    var listOfLongWords = [];

    for(var i = 0; i < words.length; i++){
      var word = words[i];
      if(word.length > maxLength){
        listOfLongWords.push(word);
      }
    }
    return listOfLongWords;
}
var result = (filterLongWords(['a', 'the', 'be'], 2));
console.assert(result.length === 1);
console.assert(result[0] === 'the');
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
var string = 'aaaabbbbbcccddddd';

function charFreq(string){
    "use strict";

    var freq = {};

    for(var i = 0; i < string.length; i++){
      var char = string[i];
      if(freq[char]){
        freq[char] = freq[char] + 1;
      } else {
        freq[char] = 1;
      }
    }
    return freq;

}

var frequency = charFreq(string);
console.log('frequency', frequency);
// console.assert(frequency === {'a': 4, 'b': 5, 'c': 3, 'd': 5});

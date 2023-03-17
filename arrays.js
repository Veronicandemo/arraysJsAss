'use strict'
//last element of the following arrays.
const arr1 = [3,7,34,90,12];
const arr2 = [true, "green", "where",12,56];
console.log(arr1[arr1.length -1]);
console.log(arr2[arr2.length -1]);
// joins the following array elements into a string
const myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.join(','));

//sorts the array into array of items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());

//remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let arrDuplicate = arr.filter((element,index) => {
    return arr.indexOf(element) === index
});
console.log(arrDuplicate)
let duplicates = arr.filter((element, index) => {
    return arr.indexOf(element) !== index
});
console.log(duplicates);



//search for the following word in the array.
//4
//If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23];
let word4 = 4;
if (arr5.includes(word4)){
    console.log(word4)
}else{
    console.log('The word was not found')
};

//JS script to sort the following string
let word = "lufituaeb";
let wordArr = (word.split(''));
console.log(wordArr.sort());
console.log(wordArr.join(''));




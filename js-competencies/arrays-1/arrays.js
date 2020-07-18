
//+++++++++ Start Here! All problems are below. +++++++++//

//////////////////PROBLEM 1////////////////////

//Create an array called rubberDucks with the values "yellow",
//"red", "blue", "brown" in the array.

const rubberDucks = ['yellow', 'red', 'brown', 'blue']

//////////////////PROBLEM 2////////////////////

//Uncomment the correct answer to the following questions:

//What is the first numbered index of an array?

// var answer = 1
var answer = 0

//How do you access the length of an array, such as the array
//you created above called rubberDucks?

// var arrayLength = Array.length(rubberDucks)
var arrayLength = rubberDucks.length
// var arrayLength = rubberDucks.len
// var arrayLength = rubberDucks.length()



//////////////////PROBLEM 3////////////////////

//Create a function called getLast that takes in a single 
//parameter: an array, and returns the last element of the array.
//The passed-in array should NOT be modified.

function getLast(arr) {
    return arr[arr.length-1]
}


//////////////////PROBLEM 4////////////////////

//Create a function called getElement that takes in two 
//parameters: an array, an index, and returns the element 
//at the numbered index of that array.
//The passed-in array should NOT be modified.

function getElement(arr, ind) {
    return arr[ind]
}

//////////////////PROBLEM 5////////////////////

//Create a function called changeElement that takes in three 
//parameters: an array, an index, and a value. changeElement
//should change the element at the numbered index of that array
//to the given value. You do not need to return the array.

function changeElement(arr,ind,value) {
    arr[ind] = value
}

//////////////////PROBLEM 6////////////////////

//Create a function called trim that takes in an array and removes 
//the last element. trim should return the array.

function trim(arr) {
    arr.pop()
    return arr
}
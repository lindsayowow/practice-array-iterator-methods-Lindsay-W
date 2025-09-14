/* Instructions 
Complete each of the following tasks by writing code to manipulate the provided 
arrays. Your solution should only use the array methods covered in the lesson: 
push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(), 
concat(), slice(), splice(), sort(), and reverse(). Submit the final version of 
the arrays as specified after each task. 

Instructions 
Task 1: Using forEach() 
1. Create an array of five of your favorite cities. */
let cities = ["St. Louis", "Santa Rosa", "Chicago", "Puntarenas", "Bend"];

//2. Use forEach( ) to log each city name to the console in uppercase. 

console.log("Cities: ");
cities.forEach((city) => {
   console.log(city.toUpperCase()); // logs each city to the console in uppercase
});

//3. Submit the output format by adding comments to the code. 

/*ST. LOUIS
SANTA ROSA
CHICAGO
PUNTARENAS
BEND */

/*Task 2: Transforming with map() 
1. Create an array called numbers with the numbers 1-5. */

let numbers = [1,2,3,4,5];

//2. Use map( ) to create an array where each number is squared. Call this array squares. 

let squares = numbers.map((num) => num ** 2);

//3. Log the new array.  

console.log("Squared numbers: ");
squares.forEach((square) => {
   console.log(square); // logs each square number to the console
});

//4. Submit the output by adding comments to the code. 

/*
1
4
9
16
25
*/

/*Task 3: Filtering with filter() 
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 
100. */

let scores = [85, 42, 90, 75, 30, 100];

//2. Use filter ( ) to create a new array containing only the scores greater than or 
//equal to 80. Call this array highScores. 

let highScores = scores.filter(score => score >= 80);

//3. Log the new array. 

console.log("High scores: ");
highScores.forEach((highScore) => {
   console.log(highScore); // logs each high score to the console
});

//4. Submit the output by adding comments to the code. 

/*
85
90
100
*/

/*Task 4: Finding with find() and findIndex() 
1. Create an array called favoriteFood that contains a list of your favorite 
dishes. Try to add 5 or 6 elements. */


//2. Use find() to locate the first food with more than 4 letters. 



/*3. Use findIndex( ) to find the index of that fruit. */


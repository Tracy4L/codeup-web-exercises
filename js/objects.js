// function() {
// //     "use strict";
// //
// // //     /**
// //      * TODO:
//      * Create an object with firstName and lastName properties that are strings
// //      * with your first and last name. Store this object in a variable named
// //      * `person`.
//         const person = {
//             firstName: 'tre',
//             lastName: 'smith'
//
//             person() {
//
//                 return this.firstname + "" + this.lastName;
//
//
//             }
//         };
// console(person."say hello");

//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
// fullname function() {
//
//     return this.firstname + "" + this.lastName;



//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *


function cameronDiscount(input) {
    if (input >= 200) {
        return input * 0.12
    } return input - 0.12
}
console.log(cameronDiscount(180))

function ryanDiscount(input) {
    if (input >= 200) {
        return input * 0.12
    } return input - 0.12
}
console.log(ryanDiscount(250))
function georgeDiscount(input) {
    if (input >= 200) {
        return input * 0.12
    } return input - 0.12
}
console.log(georgeDiscount(320))

const shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320},
];
console.log(`${shopper.name})$${ryanDiscount(250).toFixed(2)}${discount.toFixed(2)} $${amountAfterDiscount.toFixe



let shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320},
];



console.log(twoHundredDiscount(300));



     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}

        for
//
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
        const books ={
            lonesurvivor: 'Mike Jones'[{
                firstName:
                lastName:
            }]
            emptyTree : 'Drake',
            bookOfDreams: 'Tracy;'


        };
        console.log(books.lonesurvivor);
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
      *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
      *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// })();
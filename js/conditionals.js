// // // "use strict";
// // //
// // // /* ########################################################################## */
// // //
// // // /**
// // //  * TODO:
// // //  * Create a function named `analyzeColor` that accepts a string that is a color
// // //  * name as input. This function should return a message which relates to the
// // //  * color stated in the argument of the function. For colors you do not have
// // //  * responses written for, return a string stating so
// function analyzeColor(color){
// if(color === 'blue')
// {return 'the color of the sky';} else if (color === 'green') {return'color of leaves';} else { return 'not a color';}
//
// //
// //
// // console.log(analyzeColor('blue'));
// // console.log(analyzeColor('green'));
//
// //  * Example:
// //  *  > analyzeColor('blue') // returns "blue is the color of the sky"
// //  *  > analyzeColor('red') // returns "Strawberries are red"
// //  *
// //  *
// //  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// //  *
// //  * You should use an if-else-if-else block to return different messages.
// //  *
// //  * Test your function by passing various string literals to it and
// //  * console.logging the function's return value
// //  */
// //
// // // Don't change the next two lines!
// // // These lines create two variables for you:
// // // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
// // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // var randomColor = colors[Math.floor(Math.random() * colors.length)];
// // /**
// //  * TODO:
// //  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
// //  * You should see a different message every time you refresh the page
// //  */
// // function random Color(color){
// // if(color === 'blue')
// //  {return 'the color of the sky'} else { return 'not a color'}
// //  }
// //
// //  console.log(analyzeColor('blue'));
// // /**
// //  * TODO:
// //  * Comment out the code above, and refactor your function to use a switch-case statement
// //  */
// // function randome Color(color){
// // switch(color(). )
// //
// //
// // //   if(color === 'blue')
// //  {return 'the color of the sky'} else { return 'not a color'}
// //  }
// //
// //  console.log(analyzeColor('blue'));
// // // /**
// // //  * TODO:
// //  * Prompt the user for a color when the page loads, and pass the input from the
// //  * user to your `analyzeColor` function. Alert the return value from your
// //  * function to show it to the user.
// //  */
// //
// // /* ########################################################################## */
// //
// // /**
// //  * TODO:
// //  * Suppose there's a promotion in Walmart, each customer is given a randomly
// //  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// //  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// //  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// //  * everything for free!.
// //  *
// //  * Write a function named `calculateTotal` which accepts a lucky number and total
// //  * amount, and returns the discounted price.
// //  *
// //  * Example:
// //  * calculateTotal(0, 100) // returns 100
// //  * calculateTotal(4, 100) // returns 50
// //  * calculateTotal(5, 100) // returns 0
// //  *
// //  * Test your function by passing it various values and checking for the expected
// //  * return value.
// //  */
// //
// // /**
// //  * TODO:
// //  * Uncomment the line below to generate a random number between 0 and 5.
// (In this line of code, 0 is inclusive, and 6 is exclusive)
// //  * Prompt the user for their total bill, then use your `calculateTotal` function
// //  * and alerts to display to the user what their lucky number was, what their
// //  * price before the discount was, and what their price after the discount is.
// //  */
// // // Generate a random number between 0 and 6
// // // var luckyNumber = Math.floor(Math.random() * 6);
// //
// // /**
// //  * TODO:
// //  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
// //  * would like to enter a number. If they click 'Ok', prompt the user for a
// //  * number, then use 3 separate alerts to tell the user:
// //  *
// //  * - whether the number is even or odd
// //  * - what the number plus 100 is
// //  * - if the number is negative or positive
const response = confirm('would u like to enter a number')
console.log(response)
 if (response) {
   let usernumber = prompt("Enter a Number")
   alert(parseFloat(usernumber) + 100)
   if (usernumber < 0) {
     alert(negative)
   } else if (prompt('positive')) ;
   if (usernumber % 2 == 0) {
     alert('even')
   } else {
     alert('ispositive')
   }
 }

// // else(prompt){
// //   alert=(prompt + 100)
//
//
//
// //  * Do *NOT* display any of the above information
// //  * if the user enters a value that is not of the number data type.
// //  * Instead, use an alert to inform them of the incorrect input data type.
// //  *
// //  *
// //  * Can you refactor your code to use functions?
// //  * HINT: The way we prompt for a value could be improved
//
//  // let person = prompt ('would u like to enter a number');
//  //
//  // if (person != null) {document.getelementById('demo').inner HTML ="hello" + person + "how are u today";}
//
//   //
//   // let text;
//   // let favDrink = prompt("Would u like to enter a number?");
//   // switch(favDrink) {
//   //   case "Coca-Cola":
//   //     text = "Excellent choice! Coca-Cola is good for your soul.";
//   //     break;
//   //   case "Pepsi":
//   //     text = "Pepsi is my favorite too!";
//   //     break;
//   //   case "Sprite":
//   //     text = "Really? Are you sure the Sprite is your favorite?";
//   //     break;
//   //   default:
//   //     text = "I have never heard of that one!";}
// // var x =
// //
// // if (confirm('would u like to enter a number')) {
// //  prompt ok
// //   //console.log('Thing was saved to the database.');
// // } else {
// //   // Do nothing!
// //   console.log('Thing was not saved to the database.');
// // }

  // Bonus 1
  // Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
  // - Catch any invalid inputs.
  // - Write the logic using if/else ifs and then refactor using a switch case

//     const response = confirm(whats Yo favorite day!)
//   console.log(response)
// if (response) { let user1 = prompt(enter a day)alert "churchday"
//
// const response = confirm('whats your favorite day')
// console.log(response)
// if (response) {
//   let thursday = prompt("Enter a day")
//   alert; (thursday = "greatday")}

// //    let usernumber = prompt("Enter a Number")
//     Bonus 2
//   Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
//   - use an if/else
//     - refactor to use a ternary operator
//
//   Bonus 3
//   Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
//   - account for any invalid user input
//   - case of input should not matter
//   - accept both abbreviations and full names of the months
//
//
//   GOLD STAR BONUS
//
//   Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
//   then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
//   Use these conversion functions to make the correct unit conversion
//
//   Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units
//       :call_me_hand::skin-tone-5:
//     1
//
//
//
//
//
//
//
//
//
//

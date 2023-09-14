// $(() => {


    // jQuery...

    // $('body').append(`
    //     <a href="#">Toggle Invisibility</a>
    // `);
    //
    // $('a').on('click', () => {
    //     $('dd').toggleClass('invisible');
    // });
    //
    // // BONUS
    // $('dt').on('click', function() {
    //     $(this).toggleClass('highlighted')
    // });

    // JS...
    //
    // const toggleVisibilityLink = document.createElement('a');
    // toggleVisibilityLink.innerText = 'Toggle Visibility';
    //
    // const bodyElement = document.querySelector('body');
    // bodyElement.appendChild(toggleVisibilityLink);
    //
    // const ddElements = document.querySelectorAll('dd');
    // toggleVisibilityLink.addEventListener('click', () => {
    //     ddElements.forEach((ddElement) => {
    //         ddElement.classList.toggle('invisible');
    //     });
    // });
    //
    // const dtElements = document.querySelectorAll('dt');
    // dtElements.forEach((dtElement) => {
    //     dtElement.addEventListener('click', () => {
    //         dtElement.classList.toggle('highlighted');
    //     });
    // });

    // Event Delegation
    // const dlElement = document.querySelector('dl');
    // dlElement.addEventListener('click', (e) => {
    //     console.log(e.target);
    //     if(e.target.localName === 'dt') {
    //         e.target.classList.toggle('highlighted');
    //     }
    // });




    // // Beau's Code
    // function toggle() {
    //     const toggleButtons = document.querySelectorAll('dd')
    //     for (let i = 0; i < toggleButtons.length; i++) {
    //         toggleButtons[i].style.visibility = 'visible'
    //         if (toggleButtons === "click") {
    //             return toggle('button')
    //         }
    //     }
    // }




    // $('#highlightLast').click(function() {
    //     $('ul li:last-child').css('background-color', 'yellow');
    // });
    //
    //
    // $('li').each(function(index) {
    //     if (index % 2 !== 0) {
//     //         $(this).css('background-color', '#FF0');
//     //     }
//     // });
//     //
//
//     $('button').click()
//     $('li').css('background-color', '#FF0');
//     $('li').parent().css('background-color', '#0F0');
//
//     $(document).ready(function() {
//         $('#yellow-btn').click(function() {
//             $('ul li:last-child').css('background-color', 'yellow');
//         });
//     });
//
//     $(document).ready(function() {
//         $("h3").click(function() {
//             $('#national-parks').children().css('font-weight', 'bold');
//         });
//     });
//
//    $(document).ready(function() {
//    $( "li").click( function(){
//        $(this).parents('ul').children('li:first').css('color', 'blue');
//    });
// });
// // //
// // //
// // })

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);
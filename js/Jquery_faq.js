$(() => {


    // jQuery...

    $('body').append(`
        <a href="#">Toggle Invisibility</a>
    `);

    $('a').on('click', () => {
        $('dd').toggleClass('invisible');
    });

    // BONUS
    $('dt').on('click', function() {
        $(this).toggleClass('highlighted')
    });

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


















});
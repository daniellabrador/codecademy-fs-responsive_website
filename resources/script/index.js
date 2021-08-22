/* Offer Section */
const limitedOffer = document.getElementById('offer-message');
const randomDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'];
    const dates = ['1st', '2nd', '3rd', '4th', '5th', '6th' ,'7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    let d = new Date();
    let month = d.getMonth();
    let date = d.getDate();
    return `the ${dates[date-1]} of ${months[month+2]}`;
}
limitedOffer.innerHTML = `LIMITED TIME OFFER - Sign up today, pay nothing until ${randomDate()}!`;


/* Header */
const menuIcon = document.getElementsByClassName('menu-container')[0];
const menuText = document.getElementsByClassName('menu-text')[0];;
const navMobile = document.querySelector('nav.mobile');
let menuToggle = 0;

const menuClick = () => {
    menuToggle += 1;
    if (menuToggle % 2 === 1){
        menuText.style.display = 'none';
        menuIcon.style.width = "2.85rem";
        navMobile.style.marginTop = "0";
    } else {
        menuText.style.display = 'inline';
        menuIcon.style.width = "6.5rem";
        navMobile.style.marginTop = "-2.55rem";
    }
}

menuIcon.addEventListener('click', menuClick);


/* Dividers */
const dividers = document.getElementsByClassName('divider')

for (let i=0; i<dividers.length; i++){
    dividers[i].ondragstart = function() { return false; };
}
const container = document.querySelector('.container');

// NOW HERE WE ARE GONNA DISPLAY A FUNCTION THAT EVERY TIME  WE SCROLL DOWN FROM THE TOP TO CERTAIN POINT; THE FORM IS GONNA DISPLAY BLOCK OR NONE 


//  IS IMPORTANT TO ADD AN EVENT TO  TO THE HTML DOCUMENT USING THE VALUE  MOUSEMOVE.

document.addEventListener('mousemove', (e) => {

    if (e.clientY > 10) {

        container.style.display = 'flex'
    } else {
        container.style.display = 'none'
    }

})
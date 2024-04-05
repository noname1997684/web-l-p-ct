// BackTop
    // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // For modern browsers
  if (window.scrollTo) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else { // For Safari
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
// End Backtop

const add = document.querySelector('.inner-buy-icon2-icon');
add.addEventListener('click', function() {
  console.log("click");
});

//Section-two
const buttonReduce = document.querySelector('.reduce');
const buttonAdd = document.querySelector('.add');
const cardInput = document.querySelector('.card_input');

buttonReduce.onclick = function() {
    cardInput.value = parseInt(cardInput.value) - 1;
}
buttonAdd.onclick = function() {
    cardInput.value = parseInt(cardInput.value) + 1;    
}

//End section-two

// Section-three
function changeBackground(element) {
  const allContents = document.querySelectorAll('.ss-three-content');
  allContents.forEach(content => {
    if (content !== element) {
      content.style.backgroundColor = '#EDD19B';
      content.style.color = '#fff';
    }
  });
  element.style.backgroundColor = '#D0931B';
  element.style.color = '#fff';
}
// End Section-three
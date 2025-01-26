document.addEventListener("DOMContentLoaded", function () {
  const booksOptionButton = document.querySelector(".booksoption");
  const categoriesList = document.querySelector(".categorieslist");

  if (booksOptionButton) {
    booksOptionButton.addEventListener("click", function () {
      categoriesList.classList.toggle("show");
    });
  }
});


const topButton = document.querySelector('.top');

topButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,         
    behavior: 'smooth' 
  });
});

const buttons = document.querySelectorAll('button')

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerText == "Add to wishlist") {
      alert("Added to wishlist");
    }
    else if (button.innerText == "Read More") {
      alert("Reading more....");
    }
    if (button.innerText == "Buy Now") {
      alert("Proceeding to purchase");
    }
  })

})
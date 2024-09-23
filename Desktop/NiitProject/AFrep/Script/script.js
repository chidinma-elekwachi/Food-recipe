
// This code helps you switch from each image to the other in the home page.
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.slide-img');
    var currentIndex = 0;
    var intervalTime = 3000; // Change image every 3 seconds

    function nextImage() {
        // Hide current image
        images[currentIndex].classList.remove('active');
        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;
        // Show next image
        images[currentIndex].classList.add('active');
    }

    // Start slideshow
    setInterval(nextImage, intervalTime);
});


// This code helps you create the drop down effect
function toggleRecipe(recipe) {
    var recipeDetails = recipe.querySelector('.recipe-details');
    var image = recipe.querySelector('.class-img');

    if (recipeDetails.style.height === '0px' || recipeDetails.style.height === '') {
        // If details are hidden or not set
        var contentHeight = recipeDetails.scrollHeight;
        recipeDetails.style.height = contentHeight + 'px'; // Show details by setting height to content height
    } else {
        // If details are visible
        recipeDetails.style.height = '0'; // Hide details by setting eight to 0
    }
}

// this is for the nav & menu bar, to make it responsive 
function toggleNav() {
    var navLinks = document.getElementById("navLink");
    var navhead = document.getElementById("nav-head");
    var navSoc = document.getElementById("navSoc");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
      navSoc.style.display = "none";
      navhead.style.display = "block";
      
    } else {
      navLinks.style.display = "flex";
      navSoc.style.display = "block";
      navhead.style.display = "none";
    //   navLinks.classList.remove(hidden)
    }

  }

  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.classic-recipes');
    const recipes = container.querySelectorAll('.recipe');
    const numToShow = 3; // Number of recipes to show at a time
    const interval = 5000; // Interval in milliseconds for the animation to repeat

    let currentIndex = 0;

    // Function to show next set of recipes
    function showNextRecipes() {
        for (let i = 0; i < recipes.length; i++) {
            recipes[i].classList.remove('show');
        }
        for (let i = 0; i < numToShow; i++) {
            const indexToShow = (currentIndex + i) % recipes.length;
            recipes[indexToShow].classList.add('show');
        }
        currentIndex = (currentIndex + numToShow) % recipes.length;
    }

    // Initially show the first set of recipes
    showNextRecipes();

    // Set interval to continuously show recipes
    setInterval(showNextRecipes, interval);
});

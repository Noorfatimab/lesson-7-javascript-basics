// Step 1: Find the button in the page
const myButton = document.getElementById("clickMeBtn");

// Step 2: Make it listen for clicks
myButton.addEventListener("click", function() {
    alert("The page noticed you clicked!");
});

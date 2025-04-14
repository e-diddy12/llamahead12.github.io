// Wait for the DOM to be fully loaded before running the JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing");

  //text you want to type that moves
  const textToType = "University of Illinois Springfield";

  let currentText = "";

 //typing speed 
  const typingSpeed = 100; // in milliseconds

  // Function that types
  function typeText() {
    // Get the next character to type
    const nextChar = textToType[currentText.length];

    // If there are characters left to type
    if (nextChar !== undefined) {
      // Add the next character to the currentText
      currentText += nextChar;

      // Set the content of the typingElement to the currentText
      typingElement.textContent = currentText;

      //next character to be typed
      setTimeout(typeText, typingSpeed);
    }
  }

  // typing effect after a small delay
  setTimeout(typeText, 1000); // 1000 milliseconds = 1 second
});
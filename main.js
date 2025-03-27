// Defining text characters for the empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  
  // Hide modal initially
  modal.classList.add("hidden");

  // Select all heart elements
  const likeHearts = document.querySelectorAll(".like-glyph");

  likeHearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Toggle between empty and full heart
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART; // Change to full heart
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART; // Change back to empty heart
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // Show error modal with message
          modal.classList.remove("hidden");
          modalMessage.textContent = error;

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2; // 20% chance of failure
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

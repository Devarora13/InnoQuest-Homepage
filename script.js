//scroll load effect whole page------------------------------------------------------>

const scrollEffect = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.style.animation = "appear 1s ease-in";
      scrollEffect.unobserve(entry.target);
    }
  });
});
const scrollEffectElements = document.querySelectorAll(".scrollEffect");
scrollEffectElements.forEach((each)=>{
  scrollEffect.observe(each);
});

//growing no's on achievement box------------------------------------------------------>

let achievementBox = document.querySelector(".achievements");

function animateNumbers(elementId, start, end, duration) {
  const element = document.getElementById(elementId);
  const range = end - start;
  const increment = range / (duration / 10); // Calculate increment per frame (10ms)
  let current = start;
  const timer = setInterval(() => {
    current += increment; // Update the current value
    if (current >= end) {
      clearInterval(timer); // Stop the animation when reaching the end
      current = end; // Ensure the final value is exact
    }
    element.textContent = Math.floor(current) + "+"; // Display the value
  }, 10); // Update every 10ms
}

const growingNumbersObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateNumbers("clients", 0, 40, 2000);
      animateNumbers("projects", 0, 500, 2000);
      animateNumbers("suppliers", 0, 16, 2000);
      animateNumbers("countries", 0, 30, 2000);
      growingNumbersObserver.unobserve(entry.target);      //stop the animation even scrolled again
    }
  });
});
growingNumbersObserver.observe(achievementBox);

// clients images moving------------------------------------------------------------->

const clientBox = document.querySelector('.clientBox');
const clone = clientBox.innerHTML; // Clone the content

clientBox.innerHTML += clone; // Append cloned content for smooth looping

let scrollPosition = 0;

function autoScroll() {
  scrollPosition += 1; // Adjust speed here
  clientBox.scrollLeft = scrollPosition;

  if (scrollPosition >= clientBox.scrollWidth / 2) {
    scrollPosition = 0; // Reset to start when halfway through
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();


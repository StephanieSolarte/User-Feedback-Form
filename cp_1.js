const form = document.getElementById("feedback-form");
const feedbackDisplay = document.getElementById("feedback-display");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const commentsError = document.getElementById("comments-error");

comments.addEventListener("input", () => {
  charCount.textContent = `Characters: ${comments.value.length}`;
});

form.addEventListener("mouseover", (event) => {
  if (event.target.matches("input, textarea")) {
    const tooltip = event.target.parentElement.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.display = "block";
    }
  }
});

form.addEventListener("mouseout", (event) => {
  if (event.target.matches("input, textarea")) {
    const tooltip = event.target.parentElement.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.display = "none";
    }
  }
});

form.addEventListener("input", (event) => {
  if (event.target.matches("input, textarea")) {
    console.log(`${event.target.id} field updated`);
  }
});


document.body.addEventListener("click", () => {
  console.log("Background clicked");
});

form.addEventListener("click", (event) => {
  event.stopPropagation();
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  commentsError.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  }

  if (comments.value.trim() === "") {
    commentsError.textContent = "Comments are required.";
    isValid = false;
  }

  if (isValid) {
    const feedbackEntry = document.createElement("div");
    feedbackEntry.classList.add("feedback-entry");

    feedbackEntry.innerHTML = `
      <h3>${nameInput.value}</h3>
      <p><strong>Email:</strong> ${emailInput.value}</p>
      <p><strong>Comments:</strong> ${comments.value}</p>
    `;

    feedbackDisplay.appendChild(feedbackEntry);

    form.reset();
    charCount.textContent = "Characters: 0";
  }
});
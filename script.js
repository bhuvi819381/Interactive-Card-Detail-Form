// Select DOM elements
const cardForm = document.getElementById("card-form");
const cardholderNameInput = document.getElementById("cardholder-name");
const cardNumberInput = document.getElementById("card-number");
const expMonthInput = document.getElementById("exp-month");
const expYearInput = document.getElementById("exp-year");
const cvcInput = document.getElementById("cvc");

const displayCardNumber = document.getElementById("display-card-number");
const displayCardName = document.getElementById("card-name");

const displayCardMonth = document.getElementById("card-month");
const displayCardYear = document.getElementById("card-year");

const displayCVC = document.getElementById("display-cvc");

const errorMessages = document.querySelectorAll("p.error");
const success = document.getElementById("success");
const submitbtn = document.getElementById("submit-btn");
const successbtn = document.getElementById("success-btn");

cardForm.addEventListener("submit", function (e) {
  e.preventDefault();
  submitbtn.disabled = true;
});

submitbtn.addEventListener('click', function(){

  const isvalid = validateForm();
  if (isvalid) {
    success.classList.remove('hidden');
  success.classList.add('flex');
  cardForm.classList.add('hidden');
  }
  
});

const validateForm = () => {
  let isValid = true;

  // Validate cardholder name
  
    const name = cardholderNameInput.value.trim();
    if (name === "") {
      errorMessages[0].classList.remove("hidden");
      cardholderNameInput.classList.add("border-RedError");
      cardholderNameInput.classList.remove("border-gray-300");
      displayCardName.textContent = "Jane Appleseed";
      isValid = false;
    } else {
      errorMessages[0].classList.add("hidden");
      displayCardName.textContent = name || "Jane Appleseed";
      cardholderNameInput.classList.remove("border-RedError");
      cardholderNameInput.classList.add("border-gray-300");
    }

  
  // Validate card number
  

    let cardValue = cardNumberInput.value.replace(/\D/g, ""); // Remove non-digits
    const formattedValue = cardValue.match(/.{1,4}/g)?.join(" ") || ""; // Format in groups of 4
  
    // Update the input field to show the formatted value
    cardNumberInput.value = formattedValue;
  
    if (formattedValue.length === 0) {
      // Show error if input is empty
      errorMessages[1].classList.remove("hidden");
      cardNumberInput.classList.add("border-RedError");
      cardNumberInput.classList.remove("border-gray-300");
      displayCardNumber.textContent = "0000 0000 0000 0000";
      isValid = false;
    } else {
      // Hide error if input has value
      errorMessages[1].classList.add("hidden");
      cardNumberInput.classList.add("border-gray-300");
      cardNumberInput.classList.remove("border-RedError");
      displayCardNumber.textContent = formattedValue;
    }
  
  // Validate expiration month and year
  

    const month = expMonthInput.value.trim();
    const monthCheck = month.replace(/\D/g, "");
    if (monthCheck === "") {
      errorMessages[2].classList.remove("hidden");
      expMonthInput.classList.add("border-RedError");
      expMonthInput.classList.remove("border-gray-300");
      displayCardMonth.textContent = "00";
      isValid = false;
    } else if (parseInt(monthCheck) > 12) {
      errorMessages[2].textContent = "Invalid input";
      errorMessages[2].classList.remove("hidden");
      expMonthInput.classList.add("border-RedError");
      expMonthInput.classList.remove("border-gray-300");
    } else {
      errorMessages[2].classList.add("hidden");
      displayCardMonth.textContent = monthCheck || "00";
      expMonthInput.classList.remove("border-RedError");
      expMonthInput.classList.add("border-gray-300");
    }



    const year = expYearInput.value.trim();
    const yearCheck = year.replace(/\D/g, "");
    if (yearCheck === "") {
      errorMessages[2].classList.remove("hidden");
      expYearInput.classList.add("border-RedError");
      expYearInput.classList.remove("border-gray-300");
      displayCardYear.textContent = "00";
      isValid = false;
    } else {
      errorMessages[2].classList.add("hidden");
      displayCardYear.textContent = yearCheck || "00";
      expYearInput.classList.remove("border-RedError");
      expYearInput.classList.add("border-gray-300");
    }

  
  // Validate CVC
  

    const cvc = cvcInput.value.trim();
    const check = cvc.replace(/\D/g, "");
    if (check === "") {
      errorMessages[3].classList.remove("hidden");
      cvcInput.classList.add("border-RedError");
      cvcInput.classList.remove("border-gray-300");
      displayCVC.textContent = "000";
      isValid = false;
    } else {
      errorMessages[3].classList.add("hidden");
      displayCVC.textContent = check || "000";
      cvcInput.classList.remove("border-RedError");
      cvcInput.classList.add("border-gray-300");
    }

    submitbtn.disabled = !isValid;

  return isValid;

};
  
cardholderNameInput.addEventListener("input", validateForm);
cardNumberInput.addEventListener("input", validateForm);
expMonthInput.addEventListener("input", validateForm);
expYearInput.addEventListener("input", validateForm);
cvcInput.addEventListener("input", validateForm);



successbtn.addEventListener('click', function(){
  success.classList.add('hidden');
  cardForm.classList.remove('hidden');
  cardForm.reset();
  
});



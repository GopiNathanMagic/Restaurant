const form = document.querySelector("#form"); // queryselecotor la value get panniyachu id name vechu
const uname = document.querySelector("#uname");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const seats = document.querySelector("#seats");
const email = document.querySelector("#email");
const notes = document.querySelector("#notes");
const phone = document.querySelector("#phone");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault(); // form ahh submit panna vidakuadathu
  }
});

function validateInputs() {
  const nameVal = uname.value.trim(); // space trim pannna use pandrom
  const dateVal = date.value.trim();
  const timeVal = time.value.trim();
  const seatsVal = seats.value.trim();
  const emailVal = email.value.trim();
  const notesVal = notes.value.trim();
  const phoneVal = phone.value.trim();

  let success = true;

  if (nameVal === "") {
    success = false;
    setError(uname, "Username is required");
  } else {
    setSuccess(uname);
  }

  if (emailVal === "") {
    success = false;
    setError(email, "email is required");
  } else if (!validEmail(emailVal)) {
    success = false;
    setError(email, "please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (dateVal === "") {
    success = false;
    setError(date, "date is required");
  } else {
    setSuccess(date);
  }

  if (timeVal === "") {
    success = false;
    setError(time, "time is required");
  } else {
    setSuccess(time);
  }

  if (seatsVal === "") {
    success = false;
    setError(seats, "seats is required");
  } else {
    setSuccess(seats);
  }

  if (notesVal === "") {
    success = false;
    setError(notes, "notes is required");
  } else {
    setSuccess(notes);
  }

  if (phoneVal === "") {
    success = false;
    setError(phone, "phone number is required");
  } else {
    setSuccess(phone);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

// Validates email address of course.
function validEmail(e) {
  var filter =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

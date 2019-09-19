"use strict";

function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}
function printValue(val) {
  if (val >= 1 && val <= 50) {
    return true;
  } else {
    return false;
  }
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const results = $("#num").val();
    if (printValue(results)) {
      console.log(`Results shown ${results}`);
      getDogImage(results);
    } else {
      alert("Enter number between 1 and 50");
    }
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});

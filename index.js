"use strict";
//Fetches Dog Image
function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}
//Check the value of the input
function printValue(val) {
  if (val >= 1 && val <= 50) {
    return true;
  } else {
    return false;
  }
}

//Display Images in the DOM
function displayResults(responseJson) {
  console.log(responseJson);
  const imageList = responseJson.message;
  console.log(imageList);

  let imageUrls = "";
  for (let i = 0; i < imageList.length; i++) {
    imageUrls += `<img src="${imageList[i]}" class="loaded"/>`;
  }

  console.log(imageUrls);

  $(".images").replaceWith(`<div class="images">${imageUrls}</div>`);
}

//Displays value in the console
function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const results = $("#num").val();
    if (printValue(results)) {
      console.log(`Results shown ${results}`);
      getDogImage(results);
    } else {
      alert("Load was not performed.Enter number between 1 and 50");
    }
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});

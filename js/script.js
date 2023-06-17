// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function websiteLoaded() {
  // This function runs when the website loads, checking for local storage or creating it for the first time
  if (localStorage.clicks) {
    document.getElementById("answer").innerHTML = localStorage.clicks
  } else {
    localStorage.clicks = 0
    document.getElementById("answer").innerHTML = localStorage.clicks
  }
}

function page2Loaded() {
  if (localStorage.answerText) {
    document.getElementById("answer-page2").innerHTML = localStorage.answerText
  } else {
    localStorage.answerText = "You have not entered in data yet."
    document.getElementById("answer-page2").innerHTML = localStorage.answerText
  }
}

function cookieClicked() {
  // This function runs when the cookie is clicked, adding 1 to the counter, as well as updating the text
  localStorage.clicks = Number(localStorage.clicks) + 1
  document.getElementById("answer").innerHTML = localStorage.clicks
}

function resetClicks() {
  // This function runs when the "Reset Clicks" button is pressed, setting the counter to zero
  localStorage.clicks = 0
  document.getElementById("answer").innerHTML = localStorage.clicks
}

// Below is the function for page 2

function calculatePressed() {
  // This program takes a user-given number and adds every natural number from 1 to that number together, then giving you the sum
  // Input through Textfield
  const valueOfN = parseInt(document.getElementById("value-of-n").value)
  let answer = null

  // Process
  if (valueOfN >= 1 && valueOfN % 1 == 0) {
    // Only allows positive, whole numbers above 0.
    for (let counter = 1; counter <= valueOfN; counter++) {
      answer += counter
    }
  } else {
    document.getElementById("answer-page2").innerHTML =
      "That input is not a natural number; it is either negative, zero, a decimal, or simply not a number."
    localStorage.answerText =
      "That input is not a natural number; it is either negative, zero, a decimal, or simply not a number."
  }

  // Output
  if (valueOfN >= 1 && valueOfN % 1 == 0) {
    document.getElementById("answer-page2").innerHTML =
      "The sum of all the numbers from 1 to " + valueOfN + " is: " + answer
    localStorage.answerText =
      "The sum of all the numbers from 1 to " + valueOfN + " is: " + answer
  }
}

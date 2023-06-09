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

function cookieClicked() {
  // This function runs when the cookie is clicked, adding one to the counter, as well as updating the text
  localStorage.clicks = Number(localStorage.clicks) + 1
  document.getElementById("answer").innerHTML = localStorage.clicks
}

function resetClicks() {
  // This function runs when the "Reset Clicks" button is pressed, setting the counter to zero
  localStorage.clicks = 0
  document.getElementById("answer").innerHTML = localStorage.clicks
}

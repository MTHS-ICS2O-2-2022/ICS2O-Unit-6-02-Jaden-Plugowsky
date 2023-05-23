// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

function websiteLoaded() {
  if (localStorage.clicks) {
    document.getElementById("answer").innerHTML = localStorage.clicks
  } else {
    localStorage.clicks = 1
  }
}

function cookieClicked() {
  localStorage.clicks = Number(localStorage.clicks) + 1
  document.getElementById("answer").innerHTML = localStorage.clicks
}

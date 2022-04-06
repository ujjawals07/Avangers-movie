"use strict";

/* activate trending button */
const trending = document.querySelector("#trending");
const trendingmovies = document.querySelector(".movie_lists");
trending.addEventListener("click", function (e) {
  trendingmovies.scrollIntoView({ behavior: "smooth" });
});

/* activate new release button */
const newrelease = document.querySelector("#new_release");
const newmovies = document.querySelector("#new_movies");
newrelease.addEventListener("click", function (e) {
  newmovies.scrollIntoView({ behavior: "smooth" });
});

const header = document.querySelector("#header");
const home = document.querySelector("#home");
home.addEventListener("click", function (e) {
  header.scrollIntoView({ behavior: "smooth" });
});

let cur = 0;

const slider = document.querySelector("#slider");
//slider.style.overflow = "visible";
const slide = document.querySelectorAll("#slide");
slide.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const maxslide = slide.length;

const nextarrowbtn = function () {
  if (cur === maxslide - 1) {
    cur = 0;
  } else {
    cur++;
  }

  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cur)}%)`)
  );
};
const previousbtn = function () {
  if (cur === 0) {
    cur = maxslide - 1;
  } else {
    cur--;
  }
  slide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cur)}%)`)
  );
};

const btnl = document.querySelector(".l");
btnl.addEventListener("click", function () {
  console.log("click");
  nextarrowbtn();
});
const btnr = document.querySelector(".r");
btnr.addEventListener("click", function () {
  previousbtn();
});

let cur1 = 0;

const slider1 = document.querySelector("#slider1");
//slider.style.overflow = "visible";
const slide1 = document.querySelectorAll("#slide1");
slide1.forEach((s, i) => (s.style.transform = `translateX(${90 * i}%)`));
const maxslide1 = slide.length;

const nextarrowbtn1 = function () {
  if (cur1 === maxslide1 - 1) {
    cur1 = 0;
  } else {
    cur1++;
  }

  slide1.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cur1)}%)`)
  );
};
const previousbtn1 = function () {
  if (cur1 === 0) {
    cur1 = maxslide - 1;
  } else {
    cur1--;
  }
  slide1.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - cur1)}%)`)
  );
};

const btnl1 = document.querySelector("#left1");
btnl1.addEventListener("click", function () {
  console.log("click");
  nextarrowbtn1();
});
const right1 = document.querySelector("#right1");
right1.addEventListener("click", function () {
  previousbtn1();
});

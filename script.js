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
  if (cur === maxslide - 0) {
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

let slider1 = document.querySelector("#slider1");

let slide1 = document.querySelectorAll("#slide1");
slide1.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const maxslide1 = slide.length;

const nextarrowbtn1 = function () {
  if (cur1 === maxslide1 - 0) {
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
  console.log("click");
});

// hover effects on trending and new movies
let wbutton = document.querySelector(".trending-b");
let pic = document.querySelectorAll(".pic");

const mov = document.querySelector("#slide");
function hover(e) {
  removeopacity();
  removescale();
  this.style.opacity = 0.7;
  this.style.transform = "scale(1.4)";
}
function removeopacity() {
  pic.forEach((item) => (item.style.opacity = 1));
}
function removescale() {
  pic.forEach((pp) => (pp.style.transform = "scale(1)"));
}

pic.forEach((item) => item.addEventListener("mouseenter", hover));
const moviecontainer =document
  .querySelectorAll(".movie_lists")
 moviecontainer.forEach(function(m){
m.addEventListener("mouseover", function () {
  console.log("hover");
  removescale();
  removeopacity();
});
 })


//building header

let html;
let css;
let N;
pic.forEach((item) => (item.style.opacity = 1));
const movie = async function () {
  const change = function () {
    N = Math.floor(Math.random() * 7) + 1;
    console.log(N);
  };
  change();

  const res = await fetch(
    `
        https://mcuapi.herokuapp.com/api/v1/movies/${N}`
  );

  console.log(res);
  const data = await res.json();
  console.log(data);
  css = document.querySelector(
    ".headers"
  ).style.backgroundImage = `url('${data.cover_url}')`;
  document.querySelector(
    ".movie_info"
  ).innerHTML = `     <div class="search-div">
  <input type="search" name="search" id="search_bar" class="search">
  <label class="label" >search</label>
</div>
  
  <h1 class="movie_title">${data.title} <span class="date">${data.release_date}</span></h1>
   
<p class="movie-director"> ${data.directed_by}</p>
<p class="movie-overview"> ${data.overview}</p>
<a id="button-w" class="button">Watch now</a>

</div>`;
};
setInterval(movie, 2800);
//movie();

//console.log(mov.removeChild(mov.lastElementChild));

/*

  const change = function () {
    N = Math.floor(Math.random() * 7) + 1;
    console.log(N);
  
  };

  change();
  setInterval(change, 2000); 



let html;

  pic.forEach((item) => (item.style.opacity = 1));
const movie = async function () {
  for (let i = 1; i < 4; i++) {
    const res = await fetch(
      `
      https://mcuapi.herokuapp.com/api/v1/movies/${i}`
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    html = `
    <img src="${data.cover_url}" class="pic"  >
    <span class="info">${data.title}</span>
    </div>
 `;
    document.querySelector(".slide1").insertAdjacentHTML("beforeend", html);
  }
};

movie();
   <div class="mov"id="slide1">
     <img src="img/img1.jpg" class="pic"  >
     <span class="info">Thor</span>

</div>

    <div class="mov"id="slide1">
     <img src="img/img1.jpg" class="pic"  >
     <span class="info">Thor</span>
 </div>
 
  <img src="img/img1.jpg" class="pic"  >
            <span class="info">Thor</span>
            
            
            
            
            
                <div class="slide1">
        <div class="mov">
        <img src="img/avanger.jpg"  class="pic">
        <span class="info">name</span>
</div>
</div>
<div class="slide1">
    <div class="mov">
    <img src="img/avanger.jpg"  class="pic">
    <span class="info">name</span>
</div>*/

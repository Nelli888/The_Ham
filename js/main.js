//--- Preloader --- section Home --//
const preloader = document.getElementById("preloader");
const blockHome = document.querySelector(".home__content");
document.body.onload = function () {
  setTimeout(() => preloader.classList.add("done"), 5000);
  setTimeout(() => blockHome.classList.add("active"), 5300);
};
//------ section Service -----------------------------------------//
const menu = document.querySelector("#service-menu");
menu.addEventListener("click", function (e) {
  let link = e.target.dataset.target;
  let content = document.querySelector(link);
  let activeBtn = this.querySelector(".active");
  let activeContent = document.querySelector(".content.active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
    activeContent.classList.remove("active");
  }
  e.target.classList.add("active");
  content.classList.add("active");
});
//------ section Work -----------------------------------------//
const work = [
  { image: "./img/w20.jpg", type: "creative-design" },
  { image: "./img/w4.jpeg", type: "wordpress" },
  { image: "./img/w21.jpg", type: "creative-design" },
  { image: "./img/w6.jpg", type: "graphic-design" },
  { image: "./img/w24.jpg", type: "creative-design" },
  { image: "./img/w35.jpg", type: "wordpress" },
  { image: "./img/w5.jpg", type: "creative-design" },
  { image: "./img/w34.jpg", type: "graphic-design" },
  { image: "./img/w26.jpeg", type: "graphic-design" },
  { image: "./img/w2.jpg", type: "web-design" },
  { image: "./img/w22.jpg", type: "landing-pages" },
  { image: "./img/w23.jpg", type: "web-design" },
  { image: "./img/w28.jpg", type: "landing-pages" },
  { image: "./img/w1.jpg", type: "graphic-design" },
  { image: "./img/w27.jpg", type: "wordpress" },
  { image: "./img/w25.png", type: "landing-pages" },
  { image: "./img/w33.jpeg", type: "web-design" },
  { image: "./img/w3.jpg", type: "web-design" },
];
const loadWork = [
  { image: "./img/w56.png", type: "landing-pages" },
  { image: "./img/w48.jpg", type: "wordpress" },
  { image: "./img/w60.jpg", type: "creative-design" },
  { image: "./img/w58.jpg", type: "graphic-design" },
  { image: "./img/w49.jpg", type: "web-design" },
  { image: "./img/w59.jpg", type: "landing-pages" },
  { image: "./img/w52.jpg", type: "wordpress" },
  { image: "./img/w57.jpg", type: "web-design" },
  { image: "./img/w53.jpg", type: "graphic-design" },
  { image: "./img/w37.jpg", type: "creative-design" },
  { image: "./img/w54.png", type: "landing-pages" },
  { image: "./img/w38.jpg", type: "wordpress" },
];
const workFull = [...work, ...loadWork];
const graphicDesign = workFull.filter((item) => item.type === "graphic-design");
const webDesign = workFull.filter((item) => item.type === "web-design");
const landingPages = workFull.filter((item) => item.type === "landing-pages");
const wordpress = workFull.filter((item) => item.type === "wordpress");
const creativeDesign = workFull.filter((item) => item.type === "creative-design");

const workContent = document.querySelector("#work-content");
const menuWork = document.querySelector("#work-menu");
const workLoad = document.querySelector("#work-load");
const btnLoad = document.querySelector("#load"); //-- button Load More
showImages(workContent, work); //-- publication All

menuWork.addEventListener("click", function (e) {
  workLoad.innerHTML = "";
  btnLoad.textContent = "Load More";
  let activeBtn = this.querySelector(".active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }
  if (e.target.textContent === "Graphic Design") {
    showImages(workContent, graphicDesign);
  }
  if (e.target.textContent === "Web Design") {
    showImages(workContent, webDesign);
  }
  if (e.target.textContent === "Landing Pages") {
    showImages(workContent, landingPages);
  }
  if (e.target.textContent === "Wordpress") {
    showImages(workContent, wordpress);
  }
  if (e.target.textContent === "Creative Design") {
    showImages(workContent, creativeDesign);
  }
  if (e.target.textContent === "All") {
    showImages(workContent, work);
  }
  e.target.classList.add("active");
});
// --- RENDER Functions --- //
function showImages(parent, array, classN) {
  parent.innerHTML = "";
  array.forEach((item) => {
    parent.innerHTML += renderImg(item, classN);
  });
}
function renderImg(item, classN = "work__img") {
  return `<div class="${classN}"${item.dataAtribute ? `data-swiper=${item.dataAtribute}` : ""}>
  <img src="${item.image}"/></div>`;
}
// --- Spinner --//
function renderSpinner(parent) {
  parent.innerHTML = `<div class="wrapper-spinner">
  <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>`;
}
//---Button Load More---- //
btnLoad.addEventListener("click", function () {
  if (this.textContent === "Load More") {
    renderSpinner(workLoad);
    setTimeout(() => (workLoad.innerHTML = ""), 1500);
    setTimeout(showImages, 1500, workLoad, loadWork);
    this.textContent = "Hide";
  } else {
    workLoad.innerHTML = "";
    document.getElementById("about").scrollIntoView(top);
    this.textContent = "Load More";
  }
});
/// ---- Menu Burger --- ///
const navMenu = document.querySelector(".nav__menu");
const burger = document.querySelector("#burger");
burger.addEventListener("click", function (e) {
  e.target.style.display = "none";
  const burgerEl = this.children;
  if (e.target === burgerEl[0]) {
    burgerEl[1].style.display = "block";
    navMenu.classList.add("active");
  } else {
    burgerEl[0].style.display = "block";
    navMenu.classList.remove("active");
  }
});
// --- Smooth scroll to anchors -----///
navMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const blockID = e.target.getAttribute("href");
  if (blockID) {
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
//// -------------------------- Section People -----------------------------------///
const people = [
  {
    image: "./img/face1.png",
    name: "Hasan Ali",
    post: "UX Designer",
    dataAtribute: "hasan",
    text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
  },
  {
    image: "./img/face2.png",
    name: "Alia Brun",
    post: "AI/UX Designer",
    dataAtribute: "alia",
    text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
  },
  {
    image: "./img/face3.png",
    name: "John White",
    post: "Back-end Developer",
    dataAtribute: "john",
    text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
  },
  {
    image: "./img/face4.png",
    name: "Alice Ward",
    post: "Front-end developer",
    dataAtribute: "alice",
    text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
  },
  {
    image: "./img/face5.png",
    name: "Christina Applegate",
    post: "UX Designer",
    dataAtribute: "christina",
    text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
  },
  {
    image: "./img/face6.png",
    name: "Andrew Smith",
    post: "Front-end developer",
    dataAtribute: "andrew",
    text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
  },
  {
    image: "./img/face7.png",
    name: "Anthony Hopkins",
    post: "Full Stack Developer",
    dataAtribute: "anthony",
    text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
  },
];

const peopleTrack = document.querySelector(".people__track");
const btnPrev = document.querySelector("#previous");
const btnNext = document.querySelector("#next");
function addActive() {
  const elemActive = document.querySelector(".people__img");
  elemActive.classList.add("active");
}
showImages(peopleTrack, people.slice(0, 4), "people__img"); // initial publication of 4 items
addActive();
let inteval = 0;
let indexBegin = 0;
let indexEnd = 4;
//- Next btn
btnNext.addEventListener("click", handleClick);
function handleClick() {
  clearInterval(inteval);
  nextSlider();
}
function nextSlider() {
  if (indexEnd > people.length - 1) {
    people.push(people.shift());
  } else {
    indexBegin++;
    indexEnd++;
  }
  let newArray = people.slice(indexBegin, indexEnd);
  showImages(peopleTrack, newArray, "people__img");
  renderContent(personWrapper, people[indexBegin]);
  addActive();
}
inteval = setInterval(nextSlider, 3000); //-----   setInterval
//- Previous btn
btnPrev.addEventListener("click", function () {
  clearInterval(inteval);
  previousSlider();
});
function previousSlider() {
  if (indexBegin < 1) {
    people.unshift(people.pop());
  } else {
    indexBegin--;
    indexEnd--;
  }
  let newArray = people.slice(indexBegin, indexEnd);
  showImages(peopleTrack, newArray, "people__img");
  renderContent(personWrapper, people[indexBegin]);
  addActive();
}
// --- mouseover --//
const container = document.querySelector("#people");
container.addEventListener("mouseover", () => {
  clearInterval(inteval);
  inteval = setInterval(nextSlider, 3000);
});

const personWrapper = document.querySelector(".people__person-wrapper");
peopleTrack.addEventListener("click", function (e) {
  clearInterval(inteval);

  if (this.querySelector(".active")) {
    this.querySelector(".active").classList.remove("active");
  }
  const target = e.target.closest("div").dataset.swiper;
  const elem = people.find((item) => item.dataAtribute === target);
  e.target.closest(".people__img").classList.add("active");
  renderContent(personWrapper, elem);
});
// --- RENDER ---///
renderContent(personWrapper, people[indexBegin]);
function renderContent(parent, item, classN = "people__text") {
  parent.innerHTML = "";
  parent.insertAdjacentHTML(
    "afterbegin",
    `<div class="${classN}" id=${item.dataAtribute}><p class="people__item">${item.text}</p><p class="people__name">${item.name}</p><p class="people__item">${item.post}</p><div class="people__img-size"><img src="${item.image}"/></div></div>`
  );
}

///-------------------------------------  News Section -------------------------///
const btnGallery = document.querySelector("#load-news");
const gridLoad = document.querySelector(".grid-load");
const spinnerLoad = document.querySelector(".news__spinner");
btnGallery.addEventListener("click", function () {
  if (this.textContent === "Load More") {
    renderSpinner(spinnerLoad);
    setTimeout(() => (spinnerLoad.innerHTML = ""), 1500);
    setTimeout(() => gridLoad.classList.add("active"), 1500);
    this.textContent = "Hide";
  } else {
    gridLoad.classList.remove("active");
    this.textContent = "Load More";
  }
});
const grid = document.querySelector(".grid");
const gridLoadI = document.querySelector(".grid-load");
const wrapperPost = document.querySelector(".wrapper-post");
grid.addEventListener("click", (e) => {
  let link = e.target.dataset.target;
  renderPost(link, posts, wrapperPost);
});
gridLoadI.addEventListener("click", (e) => {
  let link = e.target.dataset.target;
  renderPost(link, postsLoad, wrapperPost);
});
function renderPost(link, array, parent) {
  const elem = array.find((item) => item.dataAtribute === link);
  showPost(elem, parent);
  const close = document.querySelector(".modal__close");
  close.addEventListener("click", () => {
    parent.innerHTML = "";
  });
}
function showPost({ image, title, date, author, text }, parent) {
  parent.innerHTML = `<div class="modal">
    <div class="modal__content">
          <span class="modal__close">&times;</span>
          <div class="modal__item">
          <img src="${image}"/>
          <div class="modal__text">
          <p class="modal__title">${title}</p>
          <p class="modal__date">${date}</p>
          <p class="modal__author">${author}</p>
          <p>${text}</p>
          </div>
          </div>
    </div>
    </div>`;
}
const posts = [
  {
    dataAtribute: "post_1",
    image: "./img/1v-g.jpg",
    title: "Redefining Developer Experience",
    date: "1 February, 2022",
    author: "Posted by Brad Frost",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_2",
    image: "./img/00g.jpg",
    title: "Developer Experience",
    date: "24 November, 2022",
    author: "Posted by Alice Adams",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_3",
    image: "./img/2v-g.jpg",
    title: "Front-End Development",
    date: "28 February, 2022",
    author: "Posted by Alex Garrison",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_4",
    image: "./img/3g.jpg",
    title: "How do you define developer experience?",
    date: "18 March, 2023",
    author: "Posted by Edward Newton",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_5",
    image: "./img/4v-g.jpg",
    title: "Backend developer skills",
    date: "15 September, 2022",
    author: "Posted by Hector Knight",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_6",
    image: "./img/14v-g.jpg",
    title: "Just do it",
    date: "12 January, 2023",
    author: "Posted by Brad Frost",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_7",
    image: "./img/6g-v-g.jpg",
    title: "Leading Successful Product Teams",
    date: "30 July, 2021",
    author: "Posted by Roger Byrd",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_8",
    image: "./img/7g-v-g.jpg",
    title: "Neurodiversity Design System",
    date: "18 December, 2022",
    author: "Posted by Alice Adams",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_9",
    image: "./img/0g.jpg",
    title: "Some tools to help me focus",
    date: "5 May, 2022",
    author: "Posted by Kenneth Porter",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_10",
    image: "./img/9g.jpg",
    title: "Bullet points about mental health",
    date: "16 June, 2022",
    author: "Posted by Alice Adams",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_11",
    image: "./img/3v-g.jpg",
    title: "Clever Code Considered Harmful",
    date: "22 October, 2022",
    author: "Posted by John Anderson",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_12",
    image: "./img/12g.jpg",
    title: "Modern websites without ever leaving your HTML",
    date: "14 February, 2022",
    author: "Posted by Alice Adams",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_13",
    image: "./img/11g.jpg",
    title: "React",
    date: "9 August, 2022",
    author: "Posted by Alice Adams",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_14",
    image: "./img/5v-g.jpg",
    title: "The case for Flex applications",
    date: "12 August, 2022",
    author: "Posted by Scott Craig",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_15",
    image: "./img/6v-g.jpg",
    title: "Grid Template",
    date: "5 February, 2022",
    author: "Posted by Alice Adams",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_16",
    image: "./img/10g.jpg",
    title: "Javascript",
    date: "19 April, 2022",
    author: "Posted by Brian Dalton",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
];
const postsLoad = [
  {
    dataAtribute: "post_17",
    image: "./img/16v-g.jpg",
    title: "Javascript",
    date: "19 April, 2022",
    author: "Posted by Brad Frost",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_18",
    image: "./img/15g.jpg",
    title: "Angular",
    date: "5 February, 2022",
    author: "Posted by Alice Adams",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_19",
    image: "./img/18v-g.jpg",
    title: "Front-End Development",
    date: "12 August, 2022",
    author: "Posted by Alex Garrison",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_20",
    image: "./img/13g.jpg",
    title: "Redefining Developer Experience",
    date: "18 March, 2023",
    author: "Posted by David Rich",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_21",
    image: "./img/14g.jpg",
    title: "Bullet points about mental health",
    date: "29 June, 2022",
    author: "Posted by Alex Garrison",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
  {
    dataAtribute: "post_22",
    image: "./img/17v-g.jpg",
    title: "Leading Successful Product Teams",
    date: "30 July, 2021",
    author: "Posted by Peter Cameron",
    text: "I drive my kiddo to school in the morning, and my 12-minute return trip home is a fruitful time to think and prepare for my day. I had the realization that my little drive home is a nice window of time to share my thoughts, so I’m exploring what that might look like! This feels like a fun and natural thing to try out, and I’d welcome any thoughts and feedback on this new experiment.I woke up this morning with AI on my mind, and a quick glance at my Twitter feed made it clear that it’s on a lot of other people’s minds as well. So I used my little commute to explore the topic of AI’s potential impact on the world of digital design and development. Here we go!.. To kick things off, I woke up this morning with AI on my mind. I actually was interviewed for a podcast yesterday where we got into that a fair amount. And so I want to pick up on that. This podcast is gonna be published I think next week, which I’ll definitely make sure to share whenever it comes out.We need to be talking about the good and the bad in an open and honest way. And so that’s what I’d like to do here is just pick at that a little bit. So I wrote a post about how design systems might be impacted by the world of AI and the most commonsensical and easy use case is that you are able to take a whiteboard sketch of an interface and kind of teach AI to learn your component library and basically take that sketch and turn it into a real thing. And sure enough, just this morning I saw somebody do exactly that, right? They took a little picture of a sketch of the webpage and it splat out some markup and and styles and whatever.",
  },
];
///-------------------------------------  Partners -------------------------///
const partners = [
  "./img/logo-E.png",
  "./img/E2.svg",
  "./img/E3.svg",
  "./img/E8.svg",
  "./img/E4.svg",
  "./img/logo-willen.png",
  "./img/E5.svg",
  "./img/E6.svg",
  "./img/E7.png",
  "./img/E9.svg",
];
const partnersTrack = document.querySelector(".partners");
function showLogos(parent, array, classN) {
  parent.innerHTML = "";
  array.forEach((item) => {
    parent.innerHTML += renderLogo(item, classN);
  });
}
function renderLogo(item, classN) {
  return `<div class="${classN}"><img src="${item}"/></div>`;
}
showLogos(partnersTrack, partners.slice(0, 6), "partners__img");
let indexB = 0;
let indexE = 6;
function nextLogo() {
  if (indexE > partners.length - 1) {
    partners.push(partners.shift());
  } else {
    indexB++;
    indexE++;
  }
  let newArray = partners.slice(indexB, indexE);
  showLogos(partnersTrack, newArray, "partners__img");
}
setInterval(nextLogo, 3000);

///------- To top Button -----//
const btnTop = document.querySelector(".btn-top");
btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

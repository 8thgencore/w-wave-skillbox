// --- navigation ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// --- header search ---
let btnOpen = document.querySelector(".header__search-btn");
let form = document.querySelector(".header-form-search__form");

btnOpen.addEventListener("click", function () {
  form.classList.toggle("header-form-search__form__active");
  this.classList.toggle("active");
});

document.addEventListener("click", function (a) {
  let target = a.target;
  if (!target.closest(".header__search")) {
    form.classList.remove("header-form-search__form__active");
    btnOpen.classList.remove("active");
    form.querySelector("input").value = "";
  }
});

// --- Burger ---
let burger = document.querySelector(".burger");
let nav = document.querySelector(".header__nav");
let navLink = document.querySelectorAll(".nav__link");
let navBottom = document.querySelector(".header__nav-bottom");
let navLinkBottom = document.querySelectorAll(".nav__link-bottom");

burger.addEventListener("click", function () {
  navBottom.classList.toggle("header__nav-bottom--active");
  nav.classList.toggle("header__nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("stop-scroll");
});

navLink.forEach(function (el) {
  el.addEventListener("click", function () {
    nav.classList.remove("header__nav--active");
    navBottom.classList.remove("header__nav-bottom--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("stop-scroll");
  });
});

navLinkBottom.forEach(function (el) {
  el.addEventListener("click", function () {
    nav.classList.remove("header__nav--active");
    navBottom.classList.remove("header__nav-bottom--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("stop-scroll");
  });
});

// --- what is ether
let whatsNewBtn = document.querySelector(".header__whats-new");
let headerBtns = document.querySelector(".header__btns");
let headerBtnArchive = document.querySelector(".header__play-archive");
let headerBtnNow = document.querySelector(".header__play-now");

whatsNewBtn.addEventListener("click", function () {
  whatsNewBtn.classList.toggle("header__whats-new--active");
  headerBtns.classList.toggle("header__btns--active");
  headerBtnArchive.classList.toggle("header__play-archive--active");
  headerBtnNow.classList.toggle("header__play-now--active");
});

// --- modal window ---
// open
document.getElementById("open-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.add("open");
});

// close
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove("open");
});

// close with esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open");
  }
});

// close with click onboarding
document.querySelector("#my-modal .modal__box").addEventListener("click", (event) => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

// --- modal form ---
const validates = new window.JustValidate(".modal__form", {
  colorWrong: "#D52B1E",
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    password: {
      required: true,
      minLength: 4,
      maxLength: 8,
    },
  },
  messages: {
    name: {
      required: "Ошибка",
    },
    password: {
      required: "Ошибка",
    },
  },
});

// header play/pause
let headerPlay = document.querySelectorAll(".header__play");

for (const btn of headerPlay) {
  btn.addEventListener("click", () => {
    btn.classList.toggle("header__play--active");
  });
}

// podcast play/pause
let podcastsBtn = document.querySelectorAll(".podcast__btn");

for (const btn of podcastsBtn) {
  btn.addEventListener("click", () => {
    btn.classList.toggle("podcast__btn--active");
  });
}

// show all
let showAllBtn = document.querySelector(".podcasts__btn-all");
let podcasts = document.querySelectorAll(".podcast");

showAllBtn.addEventListener("click", () => {
  podcasts.forEach(function (e) {
    console.log(e);
    e.classList.remove("podcast--hidden");
  });
});

// dropdown
const element = document.querySelector(".select");
const choices = new Choices(element, {
  itemSelectText: "",
  placeholder: true,
  searchEnabled: false,
  allowHTML: false,
});

// accordion
const accordion = new Accordion(".accordion", {
  elementClass: "ac",
  triggerClass: "ac-trigger",
  panelClass: "ac-panel",
  activeClass: "is-active",
  collapse: true,
  openOnInit: [0],
});

// tabs
let tabs = document.querySelectorAll(".accordion__btn-tabs");
let blogerContent = document.querySelectorAll(".bloger__content");

tabs.forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    tabs.forEach(function (btn) {
      btn.classList.remove("tabs__btn--active");
    });

    e.currentTarget.classList.add("tabs__btn--active");
    blogerContent.forEach(function (bloger) {
      bloger.classList.remove("bloger__content--active");
    });
    document.querySelector(`[data-target="${path}"]`).classList.add("bloger__content--active");
  });
});

// playlists scroll
dropdown = document.querySelector(".playlists-genres__list");
new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 50,
});

// slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    722: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// form validate
const validation = new JustValidate(".form", {
  errorLabelStyle: {
    color: "#D52B1E",
  },
});
validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не достаточное количество символов",
    },
  ])
  .addField("#message", [
    {
      rule: "required",
      errorMessage: "Вы не ввели сообщение",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не достаточное количество символов",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели e-mail",
    },
    {
      rule: "email",
      errorMessage: "Вы не корректно ввели email",
    },
  ])
  .addField(
    "#checkbox",
    [
      {
        rule: "required",
        errorMessage: "Вы не подтвердили свое согласие",
      },
    ],
    {
      errorsContainer: ".about__label",
    }
  )
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);
  });

//////////////////////////////////////

const playlistsContainer = document.getElementById("playlists__container");
const playlistsLeft = document.getElementById("playlists__left");
const playlistsBottom = document.getElementById("playlists__bottom");

const broadcastsLeft = document.getElementById("broadcasts__left");
const broadcastsContent = document.getElementById("broadcasts__content");
const broadcastsArchive = document.getElementById("broadcasts__archive");

const headerLeft = document.getElementById("header__left");
const headerRight = document.getElementById("header__right");
const headerLogin = document.getElementById("open-modal-btn");

// change position top media 1200px
function media1200() {
  if (window.matchMedia("(max-width: 1200px)").matches) {
    playlistsContainer.append(playlistsBottom);
  } else {
    playlistsLeft.append(playlistsBottom);
  }
}

// change position top media 992px
function media992() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    broadcastsContent.append(broadcastsArchive);
  } else {
    broadcastsLeft.append(broadcastsArchive);
  }
}

// change position top media 460px
function media460() {
  if (window.matchMedia("(max-width: 460px)").matches) {
    headerLeft.append(headerLogin);

    for (let [index, val] of podcasts.entries()) {
      if (index > 3) {
        podcasts[index].classList.add("podcast--hidden");
      }
    }
  } else {
    headerRight.append(headerLogin);
  }
}

// отрисовка на медиа запросах
media1200();
media992();
media460();
window.matchMedia("(max-width: 1200px)").addEventListener("change", media1200);
window.matchMedia("(max-width: 992px)").addEventListener("change", media992);
window.matchMedia("(max-width: 460px)").addEventListener("change", media460);

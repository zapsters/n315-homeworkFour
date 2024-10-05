import {
  loggedIn,
  showModal,
  changeRoute,
  setLoggedIn,
} from "../model/model.js";

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  $("#loginBtn").on("click", (e) => {
    // console.log(loggedIn);

    if (loggedIn) {
      showModal("You are already logged in!", "alert");
    } else {
      showModal("Log into your account", "prompt", function () {
        setLoggedIn(true);
      });
    }
  });
  $(".button--signin").on("click", (e) => {
    showModal("You have successfully logged in!", "alert");
  });
  $(".close-modal").on("click", (e) => {
    $(".modal").css("display", "none");
  });
}

$(document).ready(function () {
  initURLListener();
});

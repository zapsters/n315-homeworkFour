export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      $("#app").html(data);
    });
  }
}

export let loggedIn = false;
export function setLoggedIn(status) {
  loggedIn = status;
}

export function showModal(mainText, style, callback) {
  $("#modal .feedback").html(mainText);
  $("#modal").css("display", "flex");
  $(".button--signin").css("display", "none");
  $(".button--close").css("display", "none");
  $(".button--close").css("display", "none");
  switch (style) {
    case "prompt":
      $(".button--cancel").css("display", "block");
      $(".button--close").css("display", "none");
      $(".button--signin").css("display", "block");
      $(".button--signin").on("click", callback);
      break;
    case "alert":
      $(".button--signin").css("display", "none");
      $(".button--cancel").css("display", "none");
      $(".button--close").css("display", "block");
      break;
    default:
      console.error("Unhandled Modal Case! ", style);

      break;
  }
}
export function closeModal() {
  $("#modal").css("display", "none");
}

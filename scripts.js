$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  AOS.init({
    easing: "ease",
    duration: 1000,
  });
});

$(document).ready(function () {
  $(".scRoll").on("click", function () {
    $("html").scrollTop(0);
  });
});

// get all anchor tags with class notion-link
var links = document.querySelectorAll(".notion-link");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var url = link.href;
    window.location.href = "https://out.clark.today/?link=" + url;
  });
});

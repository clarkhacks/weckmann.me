window.onload = function () {
  // get all anchor tags with class notion-link
  var links = document.querySelectorAll(".notion-link");
  // prefix all hrefs with https://out.clark.today/?link= if it doesn't start with /
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("/") !== 0) {
      links[i].href = "https://out.clark.today/?link=" + links[i].href;
    }
  }
};

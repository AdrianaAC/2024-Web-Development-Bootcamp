const h1 = $("h1");
const h2 = $("h2");
const button = $("button");
const a = $("a");
const input = $("input");
const p = $("p");

button.click(() => {
  a.attr("href", "https://www.yahoo.com");
  h1.removeClass("bigTitle");
});

h1.click(() => {
  h1.html("<em>Hello</em>");
  h1.addClass("bigTitle");
});

h2.click(() => {
  h2.text("<em>I got clicked!<em>");
});

h2.on("mouseover", () => {
  h2.css("color", "red");
});

$(document).on("keydown", (event) => {
  p.text(event.key);
});

input.keypress((event) => {
  h1.text(event.key);
});

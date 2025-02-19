const h1 = $("h1");
const h2 = $("h2");
const button = $("button");
const a = $("a");
h1.addClass("bigTitle");
console.log(h1.hasClass("bigTitle"));
h1.removeClass("bigTitle");
console.log(h1.hasClass("bigTitle"));

button.click(() => {
  h1.html("<em>Hello</em>");
  h2.text("<em>I got clicked!<em>");
  a.attr("href", "https://www.yahoo.com");
});

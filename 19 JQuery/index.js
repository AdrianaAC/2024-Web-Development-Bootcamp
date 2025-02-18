const h1 = $("h1");
h1.addClass("bigTitle");
console.log(h1.hasClass("bigTitle"));
h1.removeClass("bigTitle");
console.log(h1.hasClass("bigTitle"));

$("button").click(() => {
  h1.html("<em>Hello</em>");
  //   h1.text("I got clicked!");
});

// function waitThreeSec() {
//   let ms = 3000 + new Date().getTime();
//   console.log(ms);
//   console.log("current date", new Date());
//   while (new Date() < ms) {}
//   console.log("executed");
// }

// function clickFunc() {
//   console.log("function click event");
// }

// document.addEventListener("click", clickFunc);

// waitThreeSec();
// console.log("function done");
let firstName = "mani";
var me = {
  firstName: "muthu",

  foo: () => {
    // firstName: "muthu";
    console.log(this.firstName);
    window.setTimeout(function () {
      console.log(this.firstName);
    }, 2000);
  },
};
me.foo();

console.log("hello world Parts");

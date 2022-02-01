// function foo() {
//   function inn(params) {
//     var x = 10;
//     // if (true) {
//     // }
//   }

//   console.log(x);
// }
// foo();

console.log("hello Weird Parts");

var me = {
  firstName: "muthu",
  foo: function () {
    window.setTimeout(function () {
      console.log(this.firstName);
    }, 1000);
  },
};
me.foo();

var a = 2;
var b = 3;
var c = 0;
// if (a > b && a > c) {
//   console.log("a is greater");
// }else if (b > a && b > c) {
//   console.log("b is greater");
// }else{
//   console.log("c is greater");
// }

(a > b && a > c)?console.log("a is greater")
  :(b > a && b > c)?console.log("b is greater")
  :console.log("c is greater");
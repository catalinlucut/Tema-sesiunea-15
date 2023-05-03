var studentGrade = 6;

if (studentGrade < 5) {
  console.log("respins");
} else {
  console.log("admis");
}

var a = 2;
var b = 4;
var c = 7;
var x = Math.max(a, b, c);
console.log("max number between ", a, b, c, "is", x);

var dayOfWeek = 1;

switch (dayOfWeek) {
  case 1:
    console.log("Luni");
    break;
  case 2:
    console.log("Marti");
    break;
  case 3:
    console.log("Miercuri");
    break;
  case 4:
    console.log("Joi");
    break;
  case 5:
    console.log("Vineri");
    break;
  case 6:
    console.log("Sambata");
    break;
  case 7:
    console.log("Duminica");
    break;
  default:
    console.log("nu este o zi a saptamanii");
}

for (var iteration = 100; iteration >= 1; iteration--) {
  console.log(iteration);
}

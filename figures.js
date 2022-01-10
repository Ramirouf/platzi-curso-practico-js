//Square
console.group("Square");
//const squareSide = 5;
//console.log("The square sides' length is: " + squareSide + " cm.");

function squarePerim(squareSide) {
  return squareSide * 4;
}
console.log("The square perimeter is: " + squarePerim(4) + " cm.");

function squareArea(squareSide) {
  return squareSide * squareSide;
}
console.log("The square area is: " + squareArea(4) + " cm.");

console.groupEnd();

//Triangle

console.group("Triangle");
/*
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

console.log(
  "The triangle sides are: " +
    triangleSide1 +
    "cm, " +
    triangleSide2 +
    "cm, " +
    triangleBase +
    "cm."
);

console.log("The triangle height is: " + triangleHeight + "cm.");
const trianglePerim = triangleSide1 + triangleSide2 + triangleBase;
*/
function trianglePerim(triangleSide1, triangleSide2, triangleBase) {
  return triangleSide1 + triangleSide2 + triangleBase;
}
console.log("The triangle's perimeter is: " + trianglePerim(6, 6, 4) + "cm.");

//const triangleArea = (triangleBase * triangleHeight) / 2;
function triangleArea(triangleBase, triangleHeight) {
  return (triangleBase * triangleHeight) / 2;
}
console.log("The triangle area is: " + triangleArea(4, 5.5) + "cm2.");

console.groupEnd();

//Círculo

console.group("Circle");

const circleRadius = 4;
console.log("Circle radius: " + circleRadius + "cm.");

//const circleDiameter = circleRadius * 2;
function circleDiameter(circleRadius) {
  return circleRadius * 2;
}
console.log("Circle diameter: " + circleDiameter(4) + "cm.");

const PI = Math.PI;

//const circlePerimeter = circleDiameter * PI;
function circlePerimeter(circleDiameter) {
  return circleDiameter * PI;
}
console.log("Circle perimeter: " + circlePerimeter(circleDiameter(4)) + "cm.");

//const circleArea = circleRadius * circleRadius * PI;
function circleArea(circleRadius) {
  return circleRadius * circleRadius * PI;
}
console.log("Circle area: " + circleArea(4) + "cm.");

console.groupEnd();

function calculateSquarePerimeter() {
  const input = document.getElementById("squareInput");
  const value = input.value;

  const perimeter = squarePerim(value);
  alert("The perimeter is: " + perimeter);
}

function calculateSquareArea() {
  const input = document.getElementById("squareInput");
  const value = input.value;

  const area = squareArea(value);
  alert("The area is: " + area);
}

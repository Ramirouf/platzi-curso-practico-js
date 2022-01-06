//Square
console.group("Square");
const squareSide = 5;
console.log("The square sides' length is: " + squareSide + " cm.");

const squarePerim = squareSide * 4;
console.log("The square perimeter is: " + squarePerim + " cm.");

const squareArea = squareSide * squareSide;
console.log("The square area is: " + squareArea + " cm.");

console.groupEnd();

//Triangle

console.group("Triangle");

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
console.log("The triangle's perimeter is: " + trianglePerim + "cm.");

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log("The triangle area is: " + triangleArea + "cm2.");

console.groupEnd();

//Círculo

console.group("Circle");

const circleRadius = 4;
console.log("Circle radius: " + circleRadius + "cm.");

const circleDiameter = circleRadius * 2;
console.log("Circle diameter: " + circleDiameter + "cm.");

const PI = Math.PI;

const circlePerimeter = circleDiameter * PI;
console.log("Circle perimeter: " + circlePerimeter + "cm.");

const circleArea = circleRadius * circleRadius * PI;
console.log("Circle area: " + circleArea + "cm.");

console.groupEnd();

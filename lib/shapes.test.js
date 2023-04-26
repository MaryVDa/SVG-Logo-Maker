//import shape classes from shapes.js
const {Triangle, Square, Circle}= require("./shapes.js");

//testing for shape with a background color to render
describe("Triangle test", () => {
    test("test for triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        );
    });
});

describe("Square test", () => {
    test("test for a square with a pink background", () => {
        const shape = new Square();
        shape.setColor("pink");
        expect(shape.render()).toEqual(
            '<rect x="75" y="40" width="150" height="150" fill="pink"/>'
        );
    });
});

describe("Circle test", () => {
    test("test for a circle with a yellow background", () => {
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="yellow"/>'
        );
    });
});
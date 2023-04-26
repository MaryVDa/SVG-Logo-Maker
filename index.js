//node package manager
const inquirer = require("inquirer");
//file system module
const fs = require("fs");

//import from ./lib/shapes.js
const {Triangle, Square, Circle} = require("./lib/shapes.js");

//function to write SVG file using answer input
function writeToFile(fileName, answers) {
    let svgString = "";
//string to set width and height
    svgString = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400">';
//takes user input and then adds polygon properties, shape color, to svg string
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        shapeChoice.setColor(answers.shapeColor);
        svgString += shapeChoice.render();
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        shapeChoice.setColor(answers.shapeColor);
        svgString += shapeChoice.render();
    } else {
        shapeChoice = new Circle();
        shapeChoice.setColor(answers.shapeColor);
        svgString += shapeChoice.render();
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="45" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });    
}

//uses inquirer to prompt users to answer questions and save the user input
function promptUser() {
    inquirer
        .prompt([

            {
                type: "input",
                message: "Enter up to 3 characters you would like your logo to say",
                name: "text",
            },
            {
                type: "input",
                message: "Choose a text color (Enter a keyword or hexadecimal number)",
                name: "textColor",
            },
            {
                type: "list",
                message: "What shape would you like your logo?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            {
                type: "input",
                message: "Choose a shape color (Enter a keyword or hexadecimal number)",
                name: "shapeColor",
            },
        ])
        //error for not entering right amount of characters
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("You must not enter more than 3 characters.");
                promptUser();
            } else {
                writeToFile("logo.svg", answers);
            }
    });
}

promptUser();
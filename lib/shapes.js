//Shape class defines what a shape is
class Shape {
    constructor() {
        this.color = "";
    }
//class takes in setColor function
    setColor(colorVar) {
        this.color = colorVar;
    }
}

//Triangle class inherrits properties from Shape
class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}

//Square class inherrits from Shape
class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="150" height="150" fill="${this.color}"/>`;
    }
}

//Circle class inherrits from Shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}"/>`;
    }
}

//export classes
module.exports = {Triangle, Square, Circle};
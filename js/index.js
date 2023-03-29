"use strict";



import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';


const form = {
    changeSelect(e) {

    },
    init() {
        console.log('Form init!');

        const rectangle = new Rectangle("rectangle", 20, 50);
        const circle = new Circle("jonas",10);
        const square = new Square("jan", 20);
        rectangle.htmlString;
        circle.htmlString;
        square.htmlString;
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();
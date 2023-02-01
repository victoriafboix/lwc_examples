import { LightningElement,track } from 'lwc';

export default class ShapeCalculator extends LightningElement {
    @track currentOutput;
    wigth;
    height;
    side;
    diagonal1;
    diagonal2;

    sideChangeHandler(event) {
        this.side=event.target.value;
    }
    widthChangeHandler(event) {
        this.width=event.target.value;
    }
    heightChangeHandler(event) {
        this.height=event.target.value;
    }
    diagonal1ChangeHandler(event) {
        this.diagonal1=event.target.value;
    }
    diagonal2ChangeHandler(event) {
        this.diagonal2=event.target.value;
    }
    calculateSquareAreaHandler(){
        const s = parseInt(this.side);
        this.currentOutput = "Area of the Square is: " +(s*s);
    }
    calculateRectangleAreaHandler() {
        const w = parseInt(this.width);
        const h = parseInt(this.height);
        this.currentOutput = "Area of the Rectangle is: " +(w*h);
    }
    calculateRhombusAreaHandler() {
        const d1 = parseInt(this.diagonal1);
        const d2 = parseInt(this.diagonal2);
        this.currentOutput = "Area of the Rhombus is: " +(d1*d2)/2;
    }



}
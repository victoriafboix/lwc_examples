import { LightningElement,wire } from 'lwc';
import {registerListener,unregisterAllListeners} from "c/pubsub";
import {currentPageReference} from "lightning/navigation";

export default class CanvasSubscriber extends LightningElement {
    color;
    @wire(currentPageReference) pageRef;

    connectedCallback() {
        registerListener("changedColor",this.handleChangedColor,this);
    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    handleChangedColor(colorCode) {
        console.log("Color -->"+colorCode);
        this.color=colorCode;
    }
    get colorStyle() {
        return "background-color: ${this.color};";
    }
}
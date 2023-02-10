import { LightningElement } from 'lwc';

export default class BoolParent extends LightningElement {

    constructor() {
        super();
        console.log("constructor on the parent is called");
    }

    connectedCallback() {
        console.log("connected callback on the parent is called");
    }

    renderedCallback() {
        console.log("rendered callback on the parent is called");
    }

    disconectedCallback() {
        console.log("disconected callback on the parent is called");
    }
}
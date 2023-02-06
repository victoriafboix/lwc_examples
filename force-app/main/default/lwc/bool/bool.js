import { LightningElement,api } from 'lwc';

export default class Bool extends LightningElement {
    @api show=false;

    constructor() {
        super();
        console.log("construcor on the child is called");
    }

    connectedCallback() {
        console.log("connected callback on the child is called");
    }

    renderedCallback() {
        console.log("rendered callback on the child is called");
    }

    disconectedCallback() {
        console.log("disconected callback on the child is called");
    }
}
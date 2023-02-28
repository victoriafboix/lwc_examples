import { LightningElement,wire } from 'lwc';
import {fireEvent} from "c/pubsub";
import {currentPageReference} from "lightning/navigation";

export default class PaletPublisher extends LightningElement {
    color;
    @wire(currentPageReference) pageRef;
    colorCodeOptions=[
        {label:"Green",value:"green"},
        {label:"Yellow",value:"yellow"},
        {label:"Red",value:"red"},
        {label:"Blue",value:"blue"}
    ];
    changeColor(event) {
        this.color=event.target.value;
    }
        handleChangeColor() {
            console.log("color ->"+this.color);
            fireEvent(this.pageRef,"changedColor",this.color);
        }
}
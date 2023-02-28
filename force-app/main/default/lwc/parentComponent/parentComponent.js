import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    msg;
    constructor() {
        super();
        this.template.addEventListener("mycustomevent",this.handleCustomEvent.bind(this));
    }
    handleCustomEvent(event) {
        this.msg=event.detail;
        
    }
    
}
import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    msg;
    handleCustomEvent(event) {
        this.msg=event.detail;
        
    }
    
}
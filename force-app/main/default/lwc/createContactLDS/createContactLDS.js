import { LightningElement } from 'lwc';
import {createRecord} from "lightning/uiRecordApi";

export default class CreateContactLDS extends LightningElement {
    contactName;
    contactPhone;
    contactEmail;

    contactNameChangeHandler(event) {
        this.contactName=event.target.value;
    }
    contactPhoneChangeHandler(event) {
        this.contactPhone=event.target.value;
    }
    contactEmailChangeHandler(event) {
        this.contactEmail=event.target.value;
    }

    createContact() {
        const fields={"LastName":this.contactName, "Phone":this.contactPhone,"Email":this.contactEmail};
        const recordInput={apiName:"Contact",fields};
        createRecord(recordInput).then(response=>{
            console.log("Contact has been created succesfully " +response.id);
        }).catch(error=>{
            console.log("Error in creating contact: ",error.body.message)
        });
    }
}
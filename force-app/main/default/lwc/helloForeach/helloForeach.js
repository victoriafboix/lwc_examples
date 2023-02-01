import UserPreferencesDisMentionsCommentEmail from '@salesforce/schema/User.UserPreferencesDisMentionsCommentEmail';
import { LightningElement } from 'lwc';

export default class HelloForeach extends LightningElement {
    contacts=[
        {Id:1,
        Name:"Sara Montiel",
        Title:"uno"
        },
    
        {Id:2,
        Name:"Rocio Jurado",
        Title:"dos"
        },

        {Id:3,
        Name:"Carmen Sevilla",
        Title:"tres"
        },

        {Id:4,
            Name:"Marujita Díaz",
            Title:"cuatro"
        },

        {Id:5,
            Name:"Conchita Piquer",
            Title:"cinco"
         }


    ]
}
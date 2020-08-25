//import modules
import { Component } from '@angular/core';

//Decorator
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],

})

//create class
export class UserComponent {
    //Properties
    firstName = 'John';
    lastName = 'Doe';
    age = 30;

    //Methods
    constructor() {
        this.user = {
            firstName: 'John'
        }
    }
}
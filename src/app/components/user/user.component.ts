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
    user: {
        firstName: string,
        lastName: string,
        age: number,
        address: 
    }
    //Methods
    constructor() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 20
        }
    }
}
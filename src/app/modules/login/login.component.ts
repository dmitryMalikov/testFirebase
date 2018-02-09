import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [
        LoginService
    ]
})
export class LoginComponent {
    signInForm: FormGroup;

    constructor(
       private loginService: LoginService
    ) {
       this.signInForm = this.loginService.signInForm;
    }


    initForm() {

    }

    signInUser() {
        const username: string = this.signInForm.controls.username.value;
        const password: string = this.signInForm.controls.password.value;
    }
}

import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../auth/auth.service';
import {LoginComponent} from '../auth/login/login.component';
import {SignUpComponent} from '../auth/signup/signup.component';
import { Router } from '@angular/router';


@Component({
    selector: 'landing-page',
    providers: [AuthenticationService],
    moduleId: module.id,
    directives: [LoginComponent,SignUpComponent],
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.css'],
})
export class LandingComponent implements OnInit{
    login: boolean = true;
    register_success: boolean= false;

    myValueChange($event:any) {
        this.login = $event['value'];
        console.log(this.login);
      }
    registerTrigger($event:any) {
        this.register_success = $event['value'];
      }

    ngOnInit() {
    }

    constructor(
        private _service: AuthenticationService, private router: Router) {
    }
}

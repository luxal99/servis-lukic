import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Admin } from "../classes/Admin";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-cms',
  templateUrl: './login-cms.component.html',
  styleUrls: ['./login-cms.component.css']
})
export class LoginCmsComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  auth() {
    var admin = new Admin(this.loginForm.get("username").value, this.loginForm.get("password").value)

    this.authService.auth(admin).subscribe(data => {
      if (data !== null) {
        
        localStorage.setItem("token", data);
        this.router.navigate(['/panel']);
      }
    })
  }

}

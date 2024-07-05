
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public username: string = '';
  public password: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  // cognitoサービスのログイン処理を呼び出す  
  onSubmitLogin(value: any) {
    const userId = value.userId;
    const password = value.password;
    this.auth.login(userId, password)
      .then((result) => {
        this.router.navigate(['/main']);
        // 任意のログイン後の処理(マイページへの遷移など)
      }).catch((err) => {
        console.log(err);
      });
  }
}
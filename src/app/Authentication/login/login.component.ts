import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserLogin } from 'src/app/Contracts/IUserLogin';
import { UserLoginService } from 'src/app/Services/UserLoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = this._fb.group({
    Email:[null, [Validators.email, Validators.required]],
    Password:[null, [Validators.minLength(3)]]

  });

  constructor(
    private _fb:FormBuilder,
    private userLoginService:UserLoginService) { 

  }

  ngOnInit(): void {
  }

  async submitForm(){
    if(!this.loginForm.valid){
      alert("Form is Invalid");
    }else{
      var body:IUserLogin = this.loginForm.value;
      try{
        var response = await this.userLoginService.login(body);
        console.log(response);
        alert(response);
      }catch(e){
        console.log(e);
      }

    }
  }

}

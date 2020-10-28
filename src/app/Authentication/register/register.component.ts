import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRegist } from 'src/app/Contracts/IUserLogin';
import { UserLoginService } from 'src/app/Services/UserLoginService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _fb:FormBuilder,
    private userLoginService:UserLoginService) { 

  }
   
  registForm:FormGroup = this._fb.group({
    userName:[null, [Validators.required]],
    password:[null, [Validators.minLength(3),Validators.required]],
    cpassword:[null, [Validators.minLength(3),Validators.required]],
    mobileNo:[null,[Validators.required,Validators.minLength(11)]],
    email:[null, [Validators.email, Validators.required]],
  });
  ngOnInit(): void {
  }

  async submitForm(){
    if(!this.registForm.valid){
      alert("Form is Invalid");
    }else{
      var body:IUserRegist = this.registForm.value;
      try{
        var response = await this.userLoginService.regist(body);
        console.log(response);
        alert("success");
      }catch(e){
        console.log(e);
        alert(e);
      }

    }
  }
}

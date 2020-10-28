import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IUserLogin, IUserRegist } from '../Contracts/IUserLogin';

@Injectable()
export class UserLoginService{

    constructor(private http:HttpClient) {
       

    }

    login(userData:IUserLogin){
        return this.http.post('http://localhost:2525/Api/UserLogin',userData).toPromise();
    }
    regist(userData:IUserRegist){
        return this.http.post('http://localhost:2525/Api/UserData',userData).toPromise();
    }

}
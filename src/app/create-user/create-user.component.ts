import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
public userform:FormGroup=new FormGroup(
  {
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    image: new FormControl(),
  }
);
constructor(private _usersService:UsersService){}
create(){

  console.log(this.userform);
  this._usersService.createUser(this.userform.value).subscribe(
    (data:any)=>{
      alert("user created successfully");

    },
    (err:any)=>{
      alert("intenal server error");
    }
  )
}
}

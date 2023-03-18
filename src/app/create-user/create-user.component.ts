import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
public isEdit:boolean = false;
public id:string="";
constructor(private _usersService:UsersService,private _activatedroute:ActivatedRoute){
_activatedroute.params.subscribe(
  (data:any)=>{
    if(data.id){
      this.isEdit=true;
      this.id=data.id;
    }
    _usersService.getuser(data.id).subscribe(
      (data:any)=>{
        this.userform.patchValue(data);
      }
    )
  }
)
}


create(){

  console.log(this.userform);
  if(this.isEdit){
this._usersService.updateUser(this.userform.value,this.id).subscribe(
  (data:any)=>{
alert("user updated");
  },
  (err:any)=>{
alert("internal storage error")
  }
)
  }
  else{
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
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {
public user:any={};

constructor(private _activatedRoute:ActivatedRoute,private _userService:UsersService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      _userService.getuser(data.id).subscribe(
        (data:any)=>{
          this.user =data;
        },
        (err:any)=>{
          alert("internal server error")
        }
      )
    }
  )
}
}

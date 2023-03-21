import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users:User[]=[];
  public term:string="";
  public column:string=""
  public order:string=""
constructor(private _usersService:UsersService,private _router:Router){
_usersService.getUsers().subscribe(
  (data:User[])=>{
    this.users = data;

  },
  (err:User[])=>{
    alert("internal server error");
  }
)
};
filter(){

    this._usersService.getFilteredFUsers(this.term).subscribe(
      (data:User[])=>{
        this.users = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
}
sort(){
  this._usersService.getSortedUsers(this.column,this.order).subscribe(
    (data:User[])=>{
      this.users = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
page(no:number){
  this._usersService.getPageUsers(no,10).subscribe(
    (data:any)=>{
      this.users = data;
  
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
delete(id:string){
  this._usersService.deleteUser(id).subscribe(
  (data:any)=>{
    alert("deleted successfully");
    location.reload();
  },
  (err:any)=>{
    alert("internal serever error");
  }
  )
}
view(id:string){
  this._router.navigateByUrl("dashboard/viewuser/"+id)
}
edit(id:string){
  this._router.navigateByUrl("/dashboard/create-user/"+id);
}
}

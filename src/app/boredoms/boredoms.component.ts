import { Component } from '@angular/core';
import { BoredomsService } from '../boredoms.service';

@Component({
  selector: 'app-boredoms',
  templateUrl: './boredoms.component.html',
  styleUrls: ['./boredoms.component.css']
})
export class BoredomsComponent {
  public boredoms:any=[];
  constructor(private _boredomsService:BoredomsService){
    _boredomsService.getboredoms().subscribe(
      (data:any)=>{
        this.boredoms=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
      
    )
   
}
// public boredom = 'angular-refresh-page';
// refresh(){
//   this.boredoms.go(0);
// }

}

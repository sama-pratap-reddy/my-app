import { Component } from '@angular/core';
import { count } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
public cartcount:number =0 ;
constructor(private _commonService:CommonService) {
  _commonService.getValue().subscribe(
    (data:any)=>{
      this.cartcount =data;
    }
  )
 }

}

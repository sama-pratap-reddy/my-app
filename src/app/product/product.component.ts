import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private _commonService:CommonService) { }
add(){
this._commonService.setValue();
}
}

import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
public vehicles:any = [];
public term:string="";
public column:string=""
public order:string=""
constructor(private _vehiclesService:VehiclesService){
_vehiclesService.getVehicles().subscribe(
  (data:any)=>{
    this.vehicles =data ;
  },
  (err:any)=>{
    alert("internal server error");
  }
)
}
filter(){

  this._vehiclesService.getFilteredVehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles = data;
  
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
sort(){
this._vehiclesService.getSortedVehicles(this.column,this.order).subscribe(
  (data:any)=>{
    this.vehicles = data;

  },
  (err:any)=>{
    alert("internal server error");
  }
)
}
page(no:number){
this._vehiclesService.getPageVehicles(no,5).subscribe(
  (data:any)=>{
    this.vehicles = data;

  },
  (err:any)=>{
    alert("internal server error");
  }
)
}
delete(id:string){
this._vehiclesService.deleteVehicles(id).subscribe(
(data:any)=>{
  alert("deleted successfully");
  location.reload();
},
(err:any)=>{
  alert("internal serever error");
}
)
}
}

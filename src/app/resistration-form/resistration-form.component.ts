import { Component } from '@angular/core';

@Component({
  selector: 'app-resistration-form',
  templateUrl: './resistration-form.component.html',
  styleUrls: ['./resistration-form.component.css']
})
export class ResistrationFormComponent {

  public names :string[]=[];
  public name: string="";

  register()
{
this.names.push(this.name);
this.name="";
  }
 
  

}
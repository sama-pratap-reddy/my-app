import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public createStudent: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      email: new FormControl(),
      age: new FormControl(),
      address: new FormGroup(
        {
          pin: new FormControl(),
          state: new FormControl()
        }
      )
    }
  )
  create(){
    console.log(this.createStudent);
  }
}

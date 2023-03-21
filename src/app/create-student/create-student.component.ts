import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidator } from '../domain.validator';
import { stateValidator } from '../state.validator';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public createStudent: FormGroup = new FormGroup(
    {
      name: new FormControl("", [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email,domainValidator]),
      age: new FormControl("", [Validators.required, Validators.min(5),Validators.max(10)]),
      address: new FormGroup(
        {
          pin: new FormControl("", [Validators.required, Validators.min(100000),Validators.max(999999)]),
          state: new FormControl("", [Validators.required, Validators.minLength(3),Validators.maxLength(10),stateValidator])
        }
      )
    }
  )
  create() {
    console.log(this.createStudent);
  }
}

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  public dynamicForm: FormGroup = new FormGroup(
    {
      type: new FormControl(),
      bus: new FormControl(),
      hostel: new FormControl(),
      cards: new FormArray([])
    }
  )
  get CardsFormArray() {
    return this.dynamicForm.get('cards') as FormArray;
  }
  add() {
    this.CardsFormArray.push(
      new FormGroup(
        {
          number: new FormControl("", [Validators.required, Validators.min(100000000000),Validators.max(999999999999)]),
          expiry: new FormControl(),
          cvv: new FormControl("", [Validators.required, Validators.min(100),Validators.max(999)])
        }
      )
    )
  }
  delete(i: number) {
    this.CardsFormArray.removeAt(i);
  }
  submit() {
    console.log(this.dynamicForm);
  }
}

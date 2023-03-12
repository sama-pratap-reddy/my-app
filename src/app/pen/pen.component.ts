import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent {
  public pen: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      price: new FormControl(),
      rating: new FormControl(),
      address:new FormGroup(
        {
          hno: new FormControl(),
          city: new FormControl(),
          pin: new FormControl(),
        }
      ),
      comments: new FormArray([]),
      payment: new FormControl(
        {
          upi: new FormControl(),
          card: new FormControl(
            {
              number: new FormControl(),
              expiry: new FormControl(),
              cvv: new FormControl()
            }
          )
        }
      )
    }
  )
  get CommentsFormArray() {
    return this.pen.get('comments') as FormArray;
  }
  comment() {
    this.CommentsFormArray.push(
      new FormGroup(
        {
          person: new FormControl(),
          message: new FormControl(),
        }
      )
    )
  }
  // payment() {
  //   console.log(this.pen);
  // }
  submit() {
    console.log(this.pen);
  }
}

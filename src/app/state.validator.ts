import { AbstractControl } from "@angular/forms";

export function stateValidator(control:AbstractControl):any{
    if(control.value=='telangana'){
        return null;
    }
    else{
        return{'state':'invalid Selection'}
    }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  // creamos un formgroup para el formulario
   form: FormGroup

  constructor( private fb: FormBuilder, private dialogRef: MatDialogRef<FormComponent>){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      adress: ['', Validators.required],
    })
  }

  submit(){
    if(this.form.valid){
      this.dialogRef.close(this.form.value)
    }
  }

  close(){
    this.dialogRef.close()
  }

}
 


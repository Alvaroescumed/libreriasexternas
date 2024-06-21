import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  userData: any

  constructor(private dialog: MatDialog){}

  openModal(){
    const dialogRef = this.dialog.open(FormComponent)

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.userData = res
      }
    })
  }
}

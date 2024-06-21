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

  // creamos una funcion para que abra el modal y que al cerrar si hay datos de retorno los ponga en pantalla
  openModal(){
    const dialogRef = this.dialog.open(FormComponent)

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.userData = res
      }
    })
  }
}

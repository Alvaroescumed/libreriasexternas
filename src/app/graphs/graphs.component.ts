import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../char-data.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit{

  //inicilaizamos los datos de cada grafico
  lineChartData: any[] = []
  barChartData: any[] = []

  //establecemos el tamaño de los graficos

  view: [number, number] = [500, 400]

  // Opciones de visibilad 
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'User';
  showYAxisLabel = true;
  yAxisLabel = 'Posts';
  timeline = true;


  // en el constructor llamamos al service que realiza la peticion a la API para que nos traiga los datos
  constructor(private chartsData: CharDataService){}

  // cargamos los datos de la API y los transformamos para que sean validos para cada grafico
  loadChartData(){
    this.chartsData.getCharData().subscribe(data => {
      this.barChartData = data.map((user: any) => ({
        name: user.username,
        value: Math.floor(Math.random() * 100) // creamos un valor random para el nº de post de cada usuario
      }))
   
    this.lineChartData = [
      {
        name: 'Series 1',
        series: data.map((user: any) => ({
          name: user.username,
          value: Math.floor(Math.random() * 100) 
        }))
      }
    ];
  })}


  ngOnInit(){
    this.loadChartData()
  }
}

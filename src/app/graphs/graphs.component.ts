import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../char-data.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit{

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

  
  constructor(private chartsData: CharDataService){}

  loadChartData(){
    this.chartsData.getCharData().subscribe(data => {
      this.barChartData = data.map((user: any) => ({
        name: user.username,
        value: Math.floor(Math.random() * 100)
      }))
   
    this.lineChartData = [
      {
        name: 'Series 1',
        series: data.map((user: any) => ({
          name: user.username,
          value: Math.floor(Math.random() * 100)  // Simulando número de publicaciones
        }))
      }
    ];
  })}

  ngOnInit(){
    this.loadChartData()
  }
}

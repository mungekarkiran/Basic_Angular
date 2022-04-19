import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventss',
  templateUrl: './eventss.component.html',
  styleUrls: ['./eventss.component.css']
})
export class EventssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printData(){
    console.log('button has clicked ... ');
  }

  alertData(){
    alert('button has clicked ... ');
  }

  passData1(data : String){
    console.log(data);
  }

  passData2(data : Number){
    console.log(data);
  }

  passData3(data : any){
    console.log(data);
  }


  sendVal1(data : any){
    console.log(data);
  }

  sendVal2(data1 : any){
    console.log(data1.value);
  }

  sendVal3(data2 : any){
    console.log(data2);
  }
}

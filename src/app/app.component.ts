import { Component } from '@angular/core';
import { ApidataService } from './apidata.service';
import { FieldData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  help:boolean=false;
  public fielddata:FieldData[]=[];
  constructor(private apidata:ApidataService){}

  getdata(){
    this.apidata.getapidata().subscribe((response)=>{
      const data =response
     this.fielddata=[]= this.apidata.mapdata(data)
     console.log(this.fielddata)
     
    })
  }

getcolor1(){
  for(var i=0;i<this.fielddata.length;i++){
    var l=this.fielddata[i].sensor1
    var k=this.fielddata[i].slot1time
    var f=+l
    var y=+k
    if(f<=20){
      if(y<10)
    this.fielddata[i].fare1=y*1
    else if(y>10 && y<=20 )
    this.fielddata[i].fare1=y*0.75
    else if(y>20 && y<=30 )
    this.fielddata[i].fare1=y*0.50
    else
    this.fielddata[i].fare1=y*0.25
    console.log(this.fielddata[i].fare1)
      return '#fb6262'
    }
    else {
    this.fielddata[i].slot1time='0'
    return '#7ff17f'}
}
}
getcolor2(){
  for(var i=0;i<this.fielddata.length;i++){
    var l=this.fielddata[i].sensor2
    var k=this.fielddata[i].slot2time
    var f=+l
    var y=+k
    if(f<=20){
      if(y<10)
    this.fielddata[i].fare2=y*1
    else if(y>10 && y<=20 )
    this.fielddata[i].fare2=y*0.75
    else if(y>20 && y<=30 )
    this.fielddata[i].fare2=y*0.50
    else
    this.fielddata[i].fare2=y*0.25
    console.log(this.fielddata[i].fare2)
      return '#fb6262'
    }
    else {
    this.fielddata[i].slot2time='0'
    return '#7ff17f'}
}
}
getcolor3(){
  for(var i=0;i<this.fielddata.length;i++){
    var l=this.fielddata[i].sensor3
    var k=this.fielddata[i].slot3time
    var f=+l
    var y=+k
    if(f<=20){
      if(y<10)
    this.fielddata[i].fare3=y*1
    else if(y>10 && y<=20 )
    this.fielddata[i].fare3=y*0.75
    else if(y>20 && y<=30 )
    this.fielddata[i].fare3=y*0.50
    else
    this.fielddata[i].fare3=y*0.25
    console.log(this.fielddata[i].fare3)
      return '#fb6262'
    }
    else {
    this.fielddata[i].slot3time='0'
    return '#7ff17f'}
}
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldData } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  public Fields:FieldData[]=[];
  constructor(private http:HttpClient) { }

  getapidata(){
    var url ="https://api.thingspeak.com/channels/630305/feeds.json?api_key=YIPH4YB3XN4M7RZG&results=1"
    return  this.http.get("https://cors-anywhere.herokuapp.com/"+url,{ responseType:'json'});
  }
  
  mapdata(data){
    console.log(data);  
    var dataarr=[]=data.feeds
     console.log(dataarr)
     this.Fields=[];
     for(var i=0; i < dataarr.length ;i++){
      this.Fields.push({
      id:dataarr[i].entry_id,
      sensor1:dataarr[i].field1,
      sensor2:dataarr[i].field2,
      sensor3:dataarr[i].field3,
      slot1time:dataarr[i].field4,
      slot2time:dataarr[i].field5,
      slot3time:dataarr[i].field6,
      fare1:0,
      fare2:0,
      fare3:0
          });
    return this.Fields
  }
}
  
}

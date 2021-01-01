import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-prvy',
  templateUrl: './prvy.component.html',
  styleUrls: ['./prvy.component.css']
})
export class PrvyComponent implements OnInit {
  public stl1:string; 
  message:string;
  public map = new Map<String, number>();
  //constructor(){ }
  constructor(private data: DataService){ }

  ngOnInit(): void {
    this.stl1 = "som prvy";
   // console.log(this.stl1);
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.map1.subscribe(map3=>this.map=map3);

    console.log(this.map);
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling");
    console.log(this.message);
  }

}

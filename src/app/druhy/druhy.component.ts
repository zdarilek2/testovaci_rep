import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-druhy',
  templateUrl: './druhy.component.html',
  styleUrls: ['./druhy.component.css']
})
export class DruhyComponent implements OnInit {
  public stl:string; 
  message:string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    const sum = 10;
    this.stl = "som druhy";
    this.data.currentMessage.subscribe(message => this.message = message);

    console.log(this.message);
    //console.log(this.stl);
  }


}

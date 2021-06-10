import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  title = 'Aplicación de Angular';
  hora = new String;

  constructor() { }


  ngOnInit(): void {   
   
    setInterval(() => {
      this.hora = new Date().toString();
    }, 1000);

  }

  
}

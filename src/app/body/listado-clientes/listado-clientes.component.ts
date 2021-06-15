import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/classes/cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  public cliente1:Cliente;
  public cliente2:Cliente;
  public cliente3:Cliente;
  public cliente4:Cliente;
  public cliente5:Cliente;
  public clientes:Array<Cliente>;

  constructor() { 
    this.cliente1 = new Cliente('Guido', 26, false);
    this.cliente2 = new Cliente('', 0, false);
    this.cliente3 = new Cliente('', 0, false);
    this.cliente4 = new Cliente('', 0, false);
    this.cliente5 = new Cliente('', 0, false);
    this.clientes = new Array(this.cliente1, this.cliente2, this.cliente3, this.cliente4, this.cliente5);
  }

  ngOnInit(): void {
    //this.cliente1.nombre = 'Guido';
    this.cliente2.nombre = 'Nicolás';
    this.cliente3.nombre = 'Rodrigo';
    this.cliente4.nombre = 'Gastón';
    this.cliente5.nombre = 'Agostina';

    //this.cliente1.edad = 26;
    this.cliente2.edad = 21;
    this.cliente3.edad = 26;
    this.cliente4.edad = 21;
    this.cliente5.edad = 28;

  }

}

import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/classes/sucursal';

@Component({
  selector: 'app-listado-sucursales',
  templateUrl: './listado-sucursales.component.html',
  styleUrls: ['./listado-sucursales.component.css']
})
export class ListadoSucursalesComponent implements OnInit {
  public sucursal1:Sucursal;
  public sucursal2:Sucursal;
  public sucursal3:Sucursal;
  public sucursal4:Sucursal;
  public sucursal5:Sucursal;
  public sucursales:Array<Sucursal>;
  public meses:Array<string>;

  constructor() { 
    this.sucursal1 = new Sucursal('Casa Matriz', 'Santa Fe', new Array());
    this.sucursal2 = new Sucursal('Santoto', 'Santo Tomé', new Array());
    this.sucursal3 = new Sucursal('De la costa', 'San José del Rincón', new Array());
    this.sucursal4 = new Sucursal('Norte', 'Recreo', new Array());
    this.sucursal5 = new Sucursal('Sur', 'Sauce Viejo', new Array());
    this.sucursales = new Array(this.sucursal1, this.sucursal2, this.sucursal3, this.sucursal4, this.sucursal5);
    this.meses = new Array('', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto','Septiembre','Octubre', 'Noviembre', 'Diciembre');
  }

  ngOnInit(): void {

    this.sucursales.forEach((sucursal, index) => {

      for (let i = 1; i <= 12; i++) {
        sucursal.setVentas(i, this.getRandomArbitrary(10,10000));
      }

      console.log(sucursal);
    });

  }

  getRandomArbitrary(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

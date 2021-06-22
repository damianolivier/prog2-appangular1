export class Sucursal {

    constructor(
        public _nombre:string,
        public _lugar:string,
        public _ventas:Array<any>
    ) {}

    get nombre():string {
        return this._nombre;
    }

    set nombre(nombre:string) {
        this._nombre = nombre;
    }

    get lugar():string {
        return this._lugar;
    }

    set lugar(lugar:string) {
        this._lugar = lugar;
    }

    getVentas(mes:number):number {
        return this._ventas[mes];
    }

    setVentas(mes:number, venta:number) {
        this._ventas[mes] = venta;
    }

}
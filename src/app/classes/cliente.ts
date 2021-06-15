export class Cliente {

    constructor(
        public _nombre:string,
        public _edad:number,
        public _status:boolean
    ) {}

    get nombre():string {
        return this._nombre;
    }

    set nombre(nombre:string) {
        this._nombre = nombre;
    }

    get edad():number {
        return this._edad;
    }

    set edad(edad:number) {
        this._edad = edad;
    }

}
class Vehiculo{
    constructor(combustible){
        this.combustible = combustible;
        this.kilometraje = 0;
        this.tipoConduccion = new Ecologico();
    }
}
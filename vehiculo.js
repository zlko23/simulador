class Vehiculo
{
    constructor(combustible)
    {
        this.combustible = combustible;
        this.kilometraje = 0;
        this.tipoConduccion = new Ecologico();
    }
    cambiarTipoConduccion()
    {
        this.tipoConduccion = this.tipoConduccion.siguiente();
    }
    velocidadMaxima()
    {
        return this.tipoConduccion.velocidadMaxima();
    }

    avanzar(km)
    {
        const combustibleNecesario = (1/this.tipoConduccion.consumo())*km;
        const kilometrosPosibles = (this.combustible/(1/this.tipoConduccion.consumo()));
        this.kilometraje += Math.min(km, kilometrosPosibles);
        this.combustible -= Math.max(this.combustible, combustibleNecesario);
    
    if (kilometrosPosibles < km)
        "Combustible insuficiente, solo pude recorrer X del total de Y kilometros";
    }
}
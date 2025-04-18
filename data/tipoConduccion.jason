class Ecologico 
{
    consumo()
    {
        return 16;
    }
    velocidadMaxima()
    {
        return 120;
    }
    siguiente()
    {
        return new Estandar();
    }
}
class Estandar 
{
    consumo()
    {
        return 10;
    }
    velocidadMaxima()
    {
        return 150;
    }
    siguiente()
    {
        return new Deportivo();
    }
}
class Deportivo
{
    consumo()
    {
        return 5;
    }
    velocidadMaxima()
    {
        return 200;
    }
    siguiente()
    {
        return new Ecologico();
    }
}
Module.exports = {Ecologico, Estandar, Deportivo};
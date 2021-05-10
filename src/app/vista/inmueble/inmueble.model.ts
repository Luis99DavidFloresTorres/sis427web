export interface InmuebleModel{
  propietario: String,
  direccion: String,
  superficie: Number,
  detalles: {nroHabitaciones:Number, nroCuartosBano: Number, lavadero:{posesion:String, posicion:String}},
  servicio: String,
  agencia: String
}

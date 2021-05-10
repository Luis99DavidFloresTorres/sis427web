import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Subject } from "rxjs";
import { environment } from "src/environments/environment";
import {InmuebleModel} from '../vista/inmueble/inmueble.model';
@Injectable()
export class InmuebleService{
  private base = environment.URL;
  private subject = new Subject<InmuebleModel[]>();
  private subjectEditar = new Subject<String>();
  constructor(private http: HttpClient){

  }
  obtenerDatos(){
    this.http.get(this.base+'/api/inmueble').subscribe(data=>{
      console.log(data);
      var datos: InmuebleModel[]|any;
      datos = data;
      this.subject.next(datos);
    })
  }
  insertarInmueble(inmueble:InmuebleModel){
    this.http.post(this.base+'/api/inmueble',inmueble).subscribe((data)=>{
      alert(data);
    })
  }
  listener(){
    return this.subject.asObservable();
  }
  subjectreturnEditar(palabra: String){
    return this.subjectEditar.next(palabra);
  }

  listenerEditar(){

    return this.subjectEditar.asObservable();
  }
}

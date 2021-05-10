import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { VendedorModel } from '../vista/vendedor/vendedor.model';
@Injectable()
export class VendedorService{
  private base = environment.URL;
  private subject = new Subject<VendedorModel[]>();
  constructor(private http: HttpClient){

  }
  obtenerDatos(){
    this.http.get<VendedorModel[]>(this.base+'/api/vendedor').subscribe(data=>{
      console.log(data);
      var datos: VendedorModel[]|any;
      datos = data;
      this.subject.next(datos);
    })
  }
  listener(){
    return this.subject.asObservable();
  }
}

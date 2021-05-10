import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { ClienteModel} from '../vista/cliente/cliente.model';
@Injectable()
export class ClienteService{
  private base = environment.URL;
  private subject = new Subject<ClienteModel[]>();
  constructor(private http: HttpClient){

  }
  obtenerDatos(){
    this.http.get<ClienteModel[]>(this.base+'/api/cliente').subscribe(data=>{
      console.log(data);
      var valor : ClienteModel[] ;
      valor = data;
      this.subject.next(valor);
    })
  }
  listener(){
    return this.subject.asObservable();
  }
}

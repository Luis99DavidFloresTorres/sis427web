
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { VendedorModel } from '../vista/vendedor/vendedor.model';
@Injectable()
export class LavaderoService{
  private base = environment.URL;
  private subject = new Subject<String>();

  constructor(){
  }
  listener(){
    console.log("b");
    return this.subject.asObservable();
  }
  nextSubject(palabra: String){
    console.log("a");
     return this.subject.next(palabra);
  }

}

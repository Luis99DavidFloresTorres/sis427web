import { AfterViewInit, Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { InmuebleService } from 'src/app/services/inmueble.service';
import { InmuebleModel } from './inmueble.model';
import { InsertarInmueble } from './insertarInmueble.component';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit, AfterViewInit {
  displayedColumns = ['detalles.nroHabitaciones','superficie','direccion',"detalles.lavadero.posicion","detalles.lavadero.posesion","enlace"];
  dataSource= new MatTableDataSource<InmuebleModel>();
  @ViewChild(MatSort) sort: MatSort | any;
  evento = "si";
  constructor(private serviceInmueble: InmuebleService, private dialog:MatDialog) { }
  ngAfterViewInit(): void {
    setTimeout((()=>  this.dataSource.sort = this.sort),1)

  }

  ngOnInit(): void {
    const hola:String = "si"
    this.serviceInmueble.subjectreturnEditar(hola);
    this.serviceInmueble.obtenerDatos();
    this.serviceInmueble.listener().subscribe((data)=>{
      console.log(data);
      this.dataSource.data = data;

    })
  }
  hacerFiltro(filtro: string){
    this.dataSource.filter = filtro;
  }
  abrirDialog(){


    this.dialog.open(InsertarInmueble,{width:'700px'});
  }
  ver(id:String){

  }
}

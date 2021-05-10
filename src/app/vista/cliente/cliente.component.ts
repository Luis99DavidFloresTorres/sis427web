import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/services/cliente.service';
import {ClienteModel} from'./cliente.model';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  displayedColumns = ['nombre','apellido','ci'];
  dataSource= new MatTableDataSource<ClienteModel>();
  constructor(private serviceCliente: ClienteService) { }

  ngOnInit(): void {
    this.serviceCliente.obtenerDatos();
    this.serviceCliente.listener().subscribe((data)=>{
      console.log(data);
      this.dataSource.data = data;

    })
  }

  ver(id:String){

  }
}

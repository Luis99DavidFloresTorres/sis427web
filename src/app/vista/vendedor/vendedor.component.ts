import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VendedorService } from 'src/app/services/vendedor.service';
import { VendedorModel } from './vendedor.model';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  displayedColumns = ['nombre','apellido','ci','codigoPostal','fechaContrato','enlace'];
  dataSource= new MatTableDataSource<VendedorModel>();
  constructor(private serviceVendedor: VendedorService) { }

  ngOnInit(): void {
    this.serviceVendedor.obtenerDatos();
    this.serviceVendedor.listener().subscribe((data)=>{
      this.dataSource.data = data;

    })
  }
  ver(id:String){

  }

}

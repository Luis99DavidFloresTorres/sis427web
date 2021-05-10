import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClientModule} from "@angular/common/http";
import { VendedorService } from './services/vendedor.service';
import { InmuebleService } from'./services/inmueble.service';
import { ClienteService} from './services/cliente.service';
import { ClienteComponent } from './vista/cliente/cliente.component';
import { VendedorComponent } from './vista/vendedor/vendedor.component';
import { InmuebleComponent } from './vista/inmueble/inmueble.component';
import {FlexLayoutModule} from'@angular/flex-layout';
import { InsertarInmueble } from './vista/inmueble/insertarInmueble.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LavaderoComponent } from './vista/lavadero/lavadero.component';
import { LavaderoService } from './services/lavadero.service';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VendedorComponent,
    InmuebleComponent,
    InsertarInmueble,
    LavaderoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VendedorService, InmuebleService, ClienteService, LavaderoComponent, LavaderoService],
  bootstrap: [AppComponent],
  entryComponents: [InsertarInmueble]
})
export class AppModule { }

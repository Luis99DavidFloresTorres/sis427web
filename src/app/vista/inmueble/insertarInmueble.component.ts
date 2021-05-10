import { Component, Input, OnInit } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, RadioControlValueAccessor, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { InmuebleService } from "src/app/services/inmueble.service";
import { LavaderoService } from "src/app/services/lavadero.service";
import { LavaderoComponent } from "../lavadero/lavadero.component";

@Component({
  selector: 'app-inmuebleInsertar',
  templateUrl: './inmuebleInsertar.component.html'
})
export class InsertarInmueble implements OnInit{

    f:FormGroup|any;
    g:FormGroup|any;
    form:FormGroup|any;
    user = ["luis","david"];
    numero = 10;
    nroHabitaciones: Number[]|any ;
    nroBanos: Number[]|any;
    selectFormControl: FormControl|any;
    nroHabitacionesControl:FormControl|any;
    nroBanosControl: FormControl|any;
    lavaderoControl: FormControl|any;
    operacionSeleccionada:String|any;
    div:FormControl|any;
    si:String|any;
    posicion:String|any;
    valorA : boolean| any;
    valorB : boolean | any;
    cantidadHabitaciones:Number|any;
    cantidadBanos:Number|any;
    @Input() evento :String|any;
    constructor(private formB: FormBuilder, private dialog: MatDialog, private serviceInmueble: InmuebleService, private lavaderoS: LavaderoService){}
  ngOnInit(): void {

    this.lavaderoS.listener().subscribe((data)=>{ //solo en onInit da, en la funcion guardar no dió
      this.posicion = data;
    })
    this.valorA = true;
    this.valorB = true;
   // this.si = new FormControl('',Validators.required);
    this.f   = new FormControl('', Validators.required);
    this.g   = new FormControl('', Validators.required);
    this.nroHabitacionesControl = new FormControl('', Validators.required);
    this.nroBanosControl = new FormControl('', Validators.required);
    this.selectFormControl = new FormControl('', Validators.required);
    this.div= new FormControl('', Validators.required);
    this.nroBanos= [0,1,2,3,4,5,6,7,8,9,10];
    this.nroHabitaciones= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    this.form= this.formB.group({
      nombre: ['',[Validators.required]],
      direccion:['',[Validators.required]],
      superficie: ['',[Validators.required]],
      agencia: ['',[Validators.required]],
      servicio: ['',[Validators.required]]
    });
    /*this.serviceInmueble.listenerEditar().subscribe((data)=>{
      console.log("jalsd");
      this.verificar = data;
    })*/
    if(this.evento==="si"){
    this.load();
    }
  }
  load(){
    this.f.setValue(true);
    if(this.f.value) alert("o");
    this.nroBanosControl.value = 10;
    this.f.setValue(true);
    //this.nroHabitacionesControl
    this.form.patchValue({
      nombre:"Luis"

    })
  }
  check1(){
    console.log(this.g.value);
    if(this.g.value===true){
    this.apagarNo();
    }
    //this.g.status ="INVALID";
    //console.log(this.g.status);
  }
  check2(){
    if(this.g.value===true){
      this.apagarSi();
      }

    //console.log("hola");
    //console.log(this.g);

  }
  apagarSi(){
    this.f.setValue(false);
  }
  apagarNo(){
    this.g.setValue(false);
  }
    guardar(f: ReactiveFormsModule){
      if(this.g.value==true){
      const detallesObtenido = {nroCuartosBano:this.cantidadBanos,nroHabitaciones:this.cantidadHabitaciones,lavadero:{posicion:"ninguno",posesion:"no"}}
      this.serviceInmueble.insertarInmueble({
        propietario:this.form.value.nombre,
        direccion:this.form.value.direccion,
        superficie:this.form.value.superficie,
        detalles:detallesObtenido,
        servicio:this.form.value.servicio,
        agencia:this.form.value.agencia

      })
    }else{

      const detallesObtenido = {nroCuartosBano:this.cantidadBanos,nroHabitaciones:this.cantidadHabitaciones,lavadero:{posicion:this.posicion,posesion:"si"}}
      this.serviceInmueble.insertarInmueble({
        propietario:this.form.value.nombre,
        direccion:this.form.value.direccion,
        superficie:this.form.value.superficie,
        detalles:detallesObtenido,
        servicio:this.form.value.servicio,
        agencia:this.form.value.agencia

      })
    }
      this.dialog.closeAll();
    }
    habitacionesC(cantidad: string){
      this.cantidadHabitaciones = parseInt(cantidad);
    }
    banosC(cantidad: string){
      this.cantidadBanos = parseInt(cantidad);
    }
}

import { Component, OnInit, Output } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioGroup } from '@angular/material/radio';
import {EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { LavaderoService } from 'src/app/services/lavadero.service';

@Component({
  selector: 'app-lavadero',
  templateUrl: './lavadero.component.html',
  styleUrls: ['./lavadero.component.css']
})
export class LavaderoComponent implements OnInit {
  lavaderoPosicionControl: FormControl|any;
  lavaderoPosicion: String[]|any;
  div: FormControl | any;

  //@Output() event = new EventEmitter();
  sujeto = new Subject<String>();
  constructor(private lavaderoS: LavaderoService) {

  }

  ngOnInit(): void {
    this.div= new FormControl('',Validators.required);

    this.lavaderoPosicionControl= new FormControl('',Validators.required);
    this.lavaderoPosicion = ['externo','interno'];

  }

  encontrar(evento:String){
    console.log("7");
    this.lavaderoS.nextSubject(evento);

  }
}

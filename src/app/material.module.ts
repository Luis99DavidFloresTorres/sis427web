import { NgModule } from "@angular/core";
import {MatIconModule} from"@angular/material/icon";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import{MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';

import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
@NgModule({
  imports:[MatIconModule, MatTableModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatCardModule, MatSelectModule,MatRadioModule,MatCheckboxModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatListModule],
  exports:[MatIconModule, MatTableModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatCardModule, MatSelectModule,MatRadioModule, MatCheckboxModule,MatNativeDateModule,MatSidenavModule,MatToolbarModule,MatListModule]
})
export class MaterialModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedias/espias/medicos.component';
import { MedicoComponent } from './integracion/medico/medico.component';
import { MedicoService } from './integracion/medico/medico.service';
import { HospitalComponent } from './integracion/hospital/hospital.component';
import { IncrementadorComponent } from './integracion/incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

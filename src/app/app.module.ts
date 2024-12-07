import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { OppointmentListComponent } from './oppointment-list/oppointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OppointmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

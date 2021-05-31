import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import {Injector} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
  show:boolean=true


    constructor(injector: Injector) {
        AppModule.injector = injector;
    }
 }

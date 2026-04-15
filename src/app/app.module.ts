import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantComponent } from './plant/plant.component';
import { FrameHoverDirective } from './frame-hover.directive';
import { StandaloneComponent } from './standalone/standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantComponent,
    FrameHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StandaloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

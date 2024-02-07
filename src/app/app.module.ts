
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { LayoutService } from './layout.service'; // Import LayoutService

@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutComponent,
    GridLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [LayoutService], // Provide LayoutService
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DishesComponent } from './dishes/dishes.component';
import { BooktableComponent } from './booktable/booktable.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DishesComponent,
    BooktableComponent,
    PhotosComponent,
    AboutusComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

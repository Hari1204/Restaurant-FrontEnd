import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooktableComponent } from './booktable/booktable.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'nav',component:NavComponent},
  {path:'dishes',component:DishesComponent},
  {path:'booktable',component:BooktableComponent},
  {path:'photos',component:PhotosComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

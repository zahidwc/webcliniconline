import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TheCompanyComponent } from './the-company/the-company.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'the-company',
    component:TheCompanyComponent
  },
  {
    path:'our-work',
    component:OurWorkComponent
  },
  {
    path:'testimonials',
    component:TestimonialsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',
    component:NoPageComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

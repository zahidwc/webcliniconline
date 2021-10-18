import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { TheCompanyComponent } from './the-company/the-company.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeaderComponent } from './header/header.component';
import { TestimonialsSliderComponent } from './testimonials-slider/testimonials-slider.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { NoPageComponent } from './no-page/no-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheCompanyComponent,
    OurWorkComponent,
    ContactComponent,
    TestimonialsComponent,
    HeaderComponent,
    TestimonialsSliderComponent,
    FooterComponent,
    SidebarComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

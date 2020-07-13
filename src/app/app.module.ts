import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ecom/header/header.component';
import { HomeComponent } from './ecom/home/home.component';
import { FooterComponent } from './ecom/footer/footer.component';
import { LoginComponent } from './ecom/login/login.component';
import { RegisterComponent } from './ecom/register/register.component';
import { GesUserComponent } from './admin/ges-user/ges-user.component';
import { GesCategorieComponent } from './admin/ges-categorie/ges-categorie.component';
import { GesProduitComponent } from './admin/ges-produit/ges-produit.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { Page404ComponentComponent } from './ecom/page404-component/page404-component.component';
import { PageComingSoonComponent } from './ecom/page-coming-soon/page-coming-soon.component';
import { ProductInfoComponent } from './ecom/product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    GesUserComponent,
    GesCategorieComponent,
    GesProduitComponent,
    DashboardComponent,
    Page404ComponentComponent,
    PageComingSoonComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

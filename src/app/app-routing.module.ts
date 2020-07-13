import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ecom/home/home.component';
import { RegisterComponent } from './ecom/register/register.component';
import { LoginComponent } from './ecom/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { Page404ComponentComponent } from './ecom/page404-component/page404-component.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { GesUserComponent } from './admin/ges-user/ges-user.component';
import { GesCategorieComponent } from './admin/ges-categorie/ges-categorie.component';
import { GesProduitComponent } from './admin/ges-produit/ges-produit.component';
import { PageComingSoonComponent } from './ecom/page-coming-soon/page-coming-soon.component';
import { ProductInfoComponent } from './ecom/product-info/product-info.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [UserGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'produit/:id',
    component: ProductInfoComponent,
    // canActivate: [UserGuard] // L'utlisateur doit être connecté.
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/gestion-users',
    component: GesUserComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/gestion-categories',
    component: GesCategorieComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/gestion-products',
    component: GesProduitComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'coming',
    component: PageComingSoonComponent
  },
  {
    path: '**',
    component: Page404ComponentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

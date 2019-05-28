import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeedAuthGuard } from './NeedAuthGuard';
import { LoginComponent } from './login/login.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { InsertHabitComponent } from './insert-habit/insert-habit.component';
import { InsertCompanyComponent } from './insert-company/insert-company.component';
import { NeedAuthGuardAdmin } from './NeedAuthGuardAdmin';

const routes: Routes = [
  {path: '', redirectTo :'/login', pathMatch: 'full'},
  {path: 'login',       component: LoginComponent},
  {path: 'new_product', component: InsertProductComponent,  canActivate: [NeedAuthGuard]},
  {path: 'new_habit',   component: InsertHabitComponent,    canActivate: [NeedAuthGuardAdmin]},
  {path: 'new_company', component: InsertCompanyComponent,  canActivate: [NeedAuthGuardAdmin]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

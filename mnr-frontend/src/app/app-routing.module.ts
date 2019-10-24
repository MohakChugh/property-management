import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SearchPropertyComponent } from './search-property/search-property.component';

const routes: Routes = [
  { path: 'tables', component: TableComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addproperty', component: AddPropertyComponent },
  { path: 'addclient', component: AddClientComponent },
  { path: 'clientdetails', component: ClientDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'searchproperty', component: SearchPropertyComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

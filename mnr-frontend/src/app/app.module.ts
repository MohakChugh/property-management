import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddClientComponent } from './add-client/add-client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchPropertyComponent } from './search-property/search-property.component';
import { TableComponent } from './table/table.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoutComponent } from './logout/logout.component';
import { CookieService } from 'ngx-cookie-service';
import { SearchTableComponent } from './search-property/search-table/search-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddPropertyComponent,
    AddClientComponent,
    PageNotFoundComponent,
    ClientDetailsComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    SearchPropertyComponent,
    TableComponent,
    SidebarComponent,
    LogoutComponent,
    SearchTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

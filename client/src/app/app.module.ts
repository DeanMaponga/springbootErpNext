import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  
  { path: 'employees', component: EmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'update-employee/:id', component: EmployeeFormComponent},
  //{ path: 'search-employee', component: EmployeeSearchComponent },
  //{ path: 'search-employee-results', component: EmployeeSearchResultsComponent },
  
  { path: 'companies', component: CompanyComponent },
  { path: 'add-company', component: CompanyFormComponent },
  { path: 'company/:id', component: CompanyDetailsComponent },
  { path: 'company/:id/update', component: CompanyFormComponent},
  { path: 'company/:id/newEmployee', component: EmployeeFormComponent },
  
  { path: '', redirectTo: '/add-company', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeCardComponent,
    CompanyFormComponent,
    CompanyCardComponent,
    EmployeeDetailsComponent,
    CompanyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

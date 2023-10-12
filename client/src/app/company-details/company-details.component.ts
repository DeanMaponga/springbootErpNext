import { Component } from '@angular/core';
import { Employee } from '../models/employee_model';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  isLoading = true;
  searchQuery = '';
  employees:Employee[] =[];
  constructor(private router: Router,private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompanyEmployees(this.apiService.tempCompany.id)
    .then((results) => {
      this.isLoading = false;
      this.employees = results;//.reverse();
    })
    .catch((error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  searchEmployees(){}
  updateCompany(){}
  addEmployee(){
    const companyId = this.apiService.tempCompany.id;
    this.router.navigate([`/company/${companyId}/newEmployee`]);
  }
}

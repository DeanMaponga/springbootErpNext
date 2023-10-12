import { Component, Input } from '@angular/core';
import { Employee } from '../models/employee_model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Company } from '../models/company_model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  isUpdate = false;
  isDetails = true;
  isLoading = false;
  isSuccess = false;
  isError = false;
  errorMsg ="";
  successMsg =""
  title="";
  tempCompany:Company={
    id: null,
    name: '',
    address: '',
    industry: '',
    description: '',
    phoneNumber: '',
    imageUrl: '',
    createdDate: new Date().getTime()
  }
  @Input() employee:Employee|Employee={
    id: null,
    name: '',
    email: '',
    jobTitle: '',
    jobDescription: '',
    phoneNumber: '',
    imageUrl: '',
    startDate: new Date().getTime(),
    companyUid: 0,
    company: this.tempCompany
  };

  employeeForm: FormGroup = new FormGroup({});

  constructor(private router: Router,private apiService: ApiService,private formBuilder: FormBuilder,private datePipe: DatePipe) { }

  ngOnInit() {
    this.isUpdate = this.employee.id!=null;
    this.tempCompany ={
      id: this.apiService.tempCompany.id,
      name: this.apiService.tempCompany.name,
      address: this.apiService.tempCompany.address,
      industry: this.apiService.tempCompany.industry,
      description: this.apiService.tempCompany.description,
      phoneNumber: this.apiService.tempCompany.phoneNumber,
      imageUrl: this.apiService.tempCompany.imageUrl,
      createdDate: new Date().getTime()
    }
    this.employee.company = this.tempCompany;
    this.employeeForm = this.formBuilder.group({
      id: [this.employee.id],
      name: [this.employee.name, Validators.required],
      email: [this.employee.email, Validators.required],
      jobTitle: [this.employee.jobTitle, Validators.required],
      jobDescription: [this.employee.jobDescription, Validators.required],
      phoneNumber: [this.employee.phoneNumber, Validators.required],
      imageUrl: [this.employee.imageUrl, Validators.required],
      registrationDate: [this.getDate(), Validators.required],
    });
    console.log(this.employee.company);
    this.title = this.isUpdate?"Update Employee":"Add Employee";
    this.successMsg = this.isUpdate?"Employee updated successfully!":"Employee added successfully!";
  }

  getDate(){
    return new Date(this.employee.startDate);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.errorMsg = "";
      this.isDetails = false;
      this.isLoading = true;
      this.isError = false;
      this.isSuccess =  false;
      this.employee.company = this.tempCompany;
      this.employee.companyUid = this.tempCompany.id!=null?this.tempCompany.id:0;
      this.employee.name =this.employeeForm.value.name;
      this.employee.email = this.employeeForm.value.email;
      this.employee.jobTitle=this.employeeForm.value.jobTitle;
      this.employee.jobDescription=this.employeeForm.value.jobDescription;
      this.employee.phoneNumber=this.employeeForm.value.phoneNumber;
      this.employee.imageUrl=this.employeeForm.value.imageUrl;
      this.employee.startDate=this.employeeForm.value.registrationDate.getTime();
      this.callAPI()
      .then((results)=>{
        this.isDetails = false;
        this.isLoading = false;
        this.isSuccess =  true;
        this.isError =false;
        console.log(results);
      })
      .catch((err)=>{console.log(err);
        this.isDetails = false;
        this.isLoading = false;
        this.isSuccess =  false;
        this.isError = true;
        this.errorMsg ="An error occured, make sure phone has 10 characters, email is valid and number of employees is integer";
        if(Object.keys(err["error"]).includes("details")){
          this.errorMsg = err["error"]["details"];
          console.log(this.errorMsg)
        }
      });
    }
  }

  callAPI(){
    return  this.isUpdate?this.apiService.updateEmployee(this.employee):this.apiService.addEmployee(this.employee);    
  }

  onOKButtonClicked() {
    if(this.isSuccess && !this.isUpdate){
      this.employeeForm.reset();
      //this.router.navigate([`/companies`]);
    }

    this.isDetails = true;
    this.isError = false;
    this.isLoading = false;
    this.isSuccess = false;
  }
}

package com.example.springbootErpNext.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootErpNext.exceptions.EmployeeNotFoundException;
import com.example.springbootErpNext.models.Company;
import com.example.springbootErpNext.models.Employee;
import com.example.springbootErpNext.repository.CompanyRepo;
import com.example.springbootErpNext.repository.EmployeeRepo;

import java.util.List;

@Service
@Transactional
public class EmployeeService {
    private final EmployeeRepo employeeRepo;
    private final CompanyRepo companyRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo,CompanyRepo companyRepo) {
        this.companyRepo = companyRepo;
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee) {
        Company company = companyRepo.findById(employee.getCompanyUid()).orElse(null);
        employee.setCompany(company);
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        Company company = companyRepo.findById(employee.getCompanyUid()).orElse(null);
        employee.setCompany(company);
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepo.findEmployeeById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("User by id " + id + " was not found"));
    }

    public List<Employee> findEmployeeByCompanyUid(Long companyUid) {
        return employeeRepo.findEmployeeByCompanyUid(companyUid);
    }

    public List<Employee> findEmployeeByName(String name) {
        return employeeRepo.findEmployeeByNameContaining(name);
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteEmployeeById(id);
    }
}

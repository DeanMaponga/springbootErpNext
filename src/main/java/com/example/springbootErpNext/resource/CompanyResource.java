package com.example.springbootErpNext.resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootErpNext.models.Company;
import com.example.springbootErpNext.service.CompanyService;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyResource {
    private final CompanyService companyService;
    public CompanyResource(CompanyService companyService){
        this.companyService = companyService;
    }
     @GetMapping("/all")
    public ResponseEntity<List<Company>> getAllCompanys(){
        List<Company>companys = companyService.findAllCompanies();
        return new ResponseEntity<>(companys,HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable("id") Long id){
        Company company = companyService.findCompanyById(id);
        return new ResponseEntity<>(company,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Company> addCompany(@RequestBody Company company){
        Company newCompany = companyService.addCompany(company);
        return new ResponseEntity<>(newCompany,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Company> updateCompany(@RequestBody Company company){
        Company updatedCompany = companyService.updateCompany(company);
        return new ResponseEntity<>(updatedCompany,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCompany(@PathVariable("id") Long id){
        companyService.deleteCompany(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

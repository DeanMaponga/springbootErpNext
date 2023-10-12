package com.example.springbootErpNext.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;

import com.example.springbootErpNext.models.Employee;
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    void deleteEmployeeById(Long id);

    Optional<Employee> findEmployeeById(Long id);

    List<Employee> findEmployeeByCompanyUid(Long companyUid);

    List<Employee> findEmployeeByNameContaining(String name);
}

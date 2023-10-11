package com.example.springbootErpNext.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import com.example.springbootErpNext.models.Employee;
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    void deleteEmployeeById(Long id);

    Optional<Employee> findEmployeeById(Long id);
}

package com.example.springbootErpNext.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import com.example.springbootErpNext.models.Company;
public interface CompanyRepo extends JpaRepository<Company, Long> {
    void deleteCompanyById(Long id);

    Optional<Company> findCompanyById(Long id);
}

package com.example.springbootErpNext.exceptions;

public class CompanyNotFoundException extends RuntimeException{
    public CompanyNotFoundException(String message){
        super(message);
    }
}

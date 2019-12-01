package hu.inf.unideb.projectcodetwo.controller;


import hu.inf.unideb.projectcodetwo.dto.LoanDTO;
import hu.inf.unideb.projectcodetwo.dto.PersonDTO;
import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;
import hu.inf.unideb.projectcodetwo.model.Person;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/codetwo", produces="application/json")
public class LoanController {

    @PostMapping(value = "/member", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseDTO addNewPerson(@RequestBody LoanDTO resource) {
        return personService.addPerson(modelMapper.map(resource, Person.class));
    }

    @PostMapping(value = "/member", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseDTO addNewPerson(@RequestBody LoanDTO resource) {
        return personService.addPerson(modelMapper.map(resource, Person.class));
    }

}

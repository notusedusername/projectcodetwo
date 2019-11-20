package hu.inf.unideb.projectcodetwo.controller;

import hu.inf.unideb.projectcodetwo.dto.BookDTO;
import hu.inf.unideb.projectcodetwo.dto.PersonDTO;
import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;
import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.service.PersonService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;
import java.util.List;

@RestController
@RequestMapping(value="/codetwo", produces="application/json")
public class PersonController {

    @Autowired
    private PersonService personService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/member")
    public @ResponseBody List<Person> fetchAll(){
        return personService.getPersons();
    }

    @PostMapping(value = "/member", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseDTO addNewPerson(@RequestBody PersonDTO resource) {
        return personService.addPerson(modelMapper.map(resource, Person.class));
    }

    @PutMapping(value = "member/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseDTO update(@PathVariable( "id" ) Long id, @RequestBody PersonDTO resource) {
        return personService.updatePerson(id, modelMapper.map(resource, Person.class));
    }

    @DeleteMapping(value = "member/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseDTO delete(@PathVariable("id") Long id) {
        return personService.deleteBook(id);
    }
}

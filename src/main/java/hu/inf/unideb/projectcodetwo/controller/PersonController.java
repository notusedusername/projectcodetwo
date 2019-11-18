package hu.inf.unideb.projectcodetwo.controller;

import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.service.PersonService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
}

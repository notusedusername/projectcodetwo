package hu.inf.unideb.projectcodetwo.service;

import hu.inf.unideb.projectcodetwo.dto.PersonDTO;
import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;
import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> getPersons() {
        return personRepository.findAll();
    }

    public ResponseDTO addPerson(Person resource) {
        Long id = personRepository.save(resource).getId();
        return new ResponseDTO(id, "Tag sikeresen hozzáadva.");
    }

    public ResponseDTO updatePerson(Long id, Person resource) {
        if( personRepository.existsById(id) ){
            resource.setId(id);
            personRepository.save(resource);
            return new ResponseDTO(id, "Tag sikeresen frissítve.");
        }
        else {
            return new ResponseDTO(id, "Nincs tag ilyen azonosítóval!");
        }
    }

    public ResponseDTO deletePerson(Long id) {
        return null;
    }
}
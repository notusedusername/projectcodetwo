package hu.inf.unideb.projectcodetwo.service;

import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.service.crud.PersonFetcher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    public List<Person> getBooks() {

        return PersonFetcher.fetchData();
    }

    public int addPerson(Person resource) {
        return 0;
    }

    public int updatePerson(Long id, Person resource) {
        return 0;
    }

    public int deletePerson(Long id) {
        return 0;
    }
}
package hu.inf.unideb.projectcodetwo.repository;

import hu.inf.unideb.projectcodetwo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Long> {

}

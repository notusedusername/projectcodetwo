package hu.inf.unideb.projectcodetwo.dto;


import javax.persistence.*;
import java.sql.Date;

public class PersonDTO {

    private Long personId;
    private String firstName;
    private String lastName;
    private Date birthDate;
    private String adress;

    public PersonDTO(Long id, String firstName, String lastName, Date birthDate, String adress) {
        this.personId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.adress = adress;
    }

    public PersonDTO() {
    }

    public Long getId() {
        return personId;
    }

    public void setId(Long id) {
        this.personId = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }
}

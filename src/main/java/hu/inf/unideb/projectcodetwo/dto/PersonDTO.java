package hu.inf.unideb.projectcodetwo.dto;

import java.sql.Date;
import java.util.Set;

public class PersonDTO {

    private Long personId;
    private String firstName;
    private String lastName;
    private Date birthDate;
    private String adress;
    private Set<LoanDTO> loans;

    public PersonDTO(Long personId, String firstName, String lastName, Date birthDate, String adress, Set<LoanDTO> loans) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.adress = adress;
        this.loans = loans;
    }

    public PersonDTO() {
    }

    public Long getPersonId() {
        return personId;
    }

    public void setPersonId(Long personId) {
        this.personId = personId;
    }

    public Set<LoanDTO> getLoans() {
        return loans;
    }

    public void setLoans(Set<LoanDTO> loans) {
        this.loans = loans;
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

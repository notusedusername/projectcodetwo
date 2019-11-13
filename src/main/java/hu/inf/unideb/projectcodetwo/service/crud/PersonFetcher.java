package hu.inf.unideb.projectcodetwo.service.crud;

import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.utils.HibernateUtils;

import java.util.List;


public class PersonFetcher {
    public static List<Person>fetchData(){
        return HibernateUtils.getSession().createQuery("FROM Person ").list();
    }
}

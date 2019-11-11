package hu.inf.unideb.projectcodetwo.utils;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;


public class HibernateUtils {

    private static SessionFactory factory= null;
    private static Configuration conf;


    public static  SessionFactory getSessionFactory(){
        if(factory ==null ){
            factory = buildSessionFactory();
        }

        return factory;
    }

    private static  SessionFactory buildSessionFactory(){
        try {
            conf = new Configuration(); {

                conf.configure("hibernate.cfg.xml").addProperties(getPropertyFile());

                System.out.println("Configuration Load Success...");
                factory = conf.buildSessionFactory();

                System.out.println("Sessionfactory Load Success.. ");
                return factory;
            }

        }
        catch(Throwable ex){
            ex.printStackTrace();

            throw  new ExceptionInInitializerError(ex);
        }
    }



    private static Properties getPropertyFile() throws IOException {
        java.util.Properties properties = new Properties();
        properties.load(new FileInputStream(System.getProperty("user.home") + "/try-hard/db.properties"));

        return properties;



    }
}

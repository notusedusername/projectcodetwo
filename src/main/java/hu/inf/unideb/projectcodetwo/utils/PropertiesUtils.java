package hu.inf.unideb.projectcodetwo.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;


public class PropertiesUtils {

    private static Properties properties = null;

    public static String getProperty(String key) throws IOException {
        if(properties == null){
            getPropertyFile();
        }
        return properties.getProperty(key);
    }

    private static Properties getPropertyFile() throws IOException {
        properties = new Properties();
        properties.load(new FileInputStream(System.getProperty("user.home") + "/try-hard/db.properties"));
        return properties;



    }
}

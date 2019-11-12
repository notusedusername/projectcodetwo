package hu.inf.unideb.projectcodetwo.main;

import hu.inf.unideb.projectcodetwo.service.BookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import static org.springframework.boot.SpringApplication.*;

@SpringBootApplication
public class ProjectCodeTwoApplication {

	public static void main(String[] args) {
        run(ProjectCodeTwoApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
}

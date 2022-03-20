package edu.eci.ieti.taskapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


import java.util.Collections;

@SpringBootApplication
@EnableMongoRepositories("edu.eci.ieti.taskapp.repository")
public class TaskappApplication {
	public static int getPort() {
		if (System.getenv("PORT") != null) {
			return Integer.parseInt(System.getenv("PORT"));
		}
		return 8080;
	}

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(TaskappApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", getPort()));
		app.run(args);
	}

}

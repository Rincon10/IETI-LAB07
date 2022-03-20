package org.ada.school;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Collections;

@SpringBootApplication
@EnableMongoRepositories("org.ada.school.repository")
public class UserServiceApp {
    public static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 8080;
    }

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(UserServiceApp.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", getPort()));
        app.run(args);
    }

}

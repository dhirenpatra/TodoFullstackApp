package com.springbootBydhiren.fullstackspringboot.runner;

import com.springbootBydhiren.fullstackspringboot.model.Todo;
import com.springbootBydhiren.fullstackspringboot.repository.TodoMongoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class ApplicationRunner implements CommandLineRunner {

    @Autowired
    private TodoMongoRepository todoMongoRepository;

    private static int counter = 0;

    private List<Todo> getAllTodos() {
        List<Todo> todoList = new ArrayList<>();
        todoList.add(new Todo("dhiren", "Learn Spring", new Date(), false));
        todoList.add(new Todo("dhiren", "Learn Spring Boot", new Date(), false));
        todoList.add(new Todo("dhiren", "Learn React", new Date(), false));
        todoList.add(new Todo("dhiren", "Learn Redux", new Date(), false));
        todoList.add(new Todo("dhiren", "Learn Spring WebFlux", new Date(), false));

        todoList.add(new Todo("pooja", "Learn Spring", new Date(), false));
        todoList.add(new Todo("pooja", "Learn Spring Boot", new Date(), false));
        todoList.add(new Todo("pooja", "Learn React", new Date(), false));
        todoList.add(new Todo("pooja", "Learn Redux", new Date(), false));
        return todoList;
    }

    @Override
    public void run(String... args) throws Exception {
        todoMongoRepository.saveAll(getAllTodos());
    }
}

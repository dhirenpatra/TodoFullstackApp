package com.springbootBydhiren.fullstackspringboot.controller;

import com.springbootBydhiren.fullstackspringboot.model.Todo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

public interface TodoController {

    @GetMapping("/users/{username}/todos")
    @ResponseStatus(HttpStatus.OK)
    List<Todo> fetchAllTodos(@PathVariable String username);

    @DeleteMapping("/users/{username}/todos/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable String id);

    @GetMapping("/users/{username}/todos/{id}")
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<Todo> getOneTodo(@PathVariable String username, @PathVariable String id);

    @PutMapping("/users/{username}/todos/{id}")
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<Todo> updateOneTodo(@PathVariable String username, @PathVariable String id, @RequestBody Todo todo);

    @PostMapping("/users/{username}/todos")
    @ResponseStatus(HttpStatus.CREATED)
    ResponseEntity<Todo> addTodo(@PathVariable String username, @RequestBody Todo todo);
}

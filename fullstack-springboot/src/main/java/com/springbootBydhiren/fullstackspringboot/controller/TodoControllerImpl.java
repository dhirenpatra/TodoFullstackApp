package com.springbootBydhiren.fullstackspringboot.controller;

import com.springbootBydhiren.fullstackspringboot.model.Todo;
import com.springbootBydhiren.fullstackspringboot.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponents;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoControllerImpl implements TodoController {

    @Autowired
    private TodoService todoServiceImpl;

    @Override
    public List<Todo> fetchAllTodos(@PathVariable  String username) {
        return todoServiceImpl.getAllTodos(username);
    }

    @Override
    public ResponseEntity<Void> deleteTodos(String username, String id) {
        Todo deleteTodo = todoServiceImpl.deleteTodo(username, id);
        if(deleteTodo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<Todo> getOneTodo(String username, String id) {
        Todo oneTodo = todoServiceImpl.getOneTodo(username, id);
        if(oneTodo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(oneTodo);
    }

    @Override
    public ResponseEntity<Todo> updateOneTodo(String username, String id, Todo todo) {
        Todo updateTodo = todoServiceImpl.saveOrUpdateTodo(id, username, todo);
        System.err.println(updateTodo);

        if(updateTodo != null)
            return ResponseEntity.ok().body(updateTodo);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @Override
    public ResponseEntity<Todo> addTodo(String username, Todo todo) {
        String counter = todoServiceImpl.addTodo(username, todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(counter).toUri();
        return ResponseEntity.created(uri).build();
    }
}

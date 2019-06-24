package com.springbootBydhiren.fullstackspringboot.service;

import com.springbootBydhiren.fullstackspringboot.model.Todo;
import com.springbootBydhiren.fullstackspringboot.repository.TodoMongoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMongoRepository todoMongoRepository;

    @Override
    public List<Todo> getAllTodos(String username) {
        return todoMongoRepository.findByUsername(username);
    }

    @Override
    public Todo deleteTodo(String username, String id) {
        Todo todo = getOneTodo(username, id);
        todoMongoRepository.delete(todo);
        return todo;
    }

    @Override
    public Todo getOneTodo(String username, String id) {
        return todoMongoRepository.findByUsernameAndId(username,id);
    }

    @Override
    public Todo saveOrUpdateTodo(String id, String name, Todo todo) {
        return todoMongoRepository.save(todo);
    }

    @Override
    public String addTodo(String name, Todo todo) {
        return todoMongoRepository.save(todo).getId();
    }

}

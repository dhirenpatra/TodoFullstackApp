package com.springbootBydhiren.fullstackspringboot.service;

import com.springbootBydhiren.fullstackspringboot.model.Todo;

import java.util.List;

public interface TodoService {

    List<Todo> getAllTodos(String username);

    Todo deleteTodo(String username,String id);

    Todo getOneTodo(String username,String id);

    Todo saveOrUpdateTodo(String id, String name, Todo todo);

    String addTodo(String name, Todo todo);

}

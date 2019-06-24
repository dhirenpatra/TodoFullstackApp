package com.springbootBydhiren.fullstackspringboot.repository;

import com.springbootBydhiren.fullstackspringboot.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoMongoRepository extends MongoRepository<Todo,String> {
    Todo findByUsernameAndId(String username, String id);
    List<Todo> findByUsername(String username);
}

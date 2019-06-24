package com.springbootBydhiren.fullstackspringboot.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Document
public class Todo {

    @Id
    private String id;
    @Field
    private String username;
    @Field
    private String description;
    @Field
    private Date targetDate;
    @Field
    private Boolean isCompleted;

    public Todo(String username, String description, Date targetDate, Boolean isCompleted) {
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.isCompleted = isCompleted;
    }
}

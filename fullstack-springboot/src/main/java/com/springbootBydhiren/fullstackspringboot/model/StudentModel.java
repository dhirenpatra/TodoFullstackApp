package com.springbootBydhiren.fullstackspringboot.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class StudentModel {

    private String studentId;
    private String name;
    private Integer age;

}

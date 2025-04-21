package com.quiz.QuizService.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data // Lombok generates getters, setters, toString, equals, and hashCode methods automatically
@NoArgsConstructor
@AllArgsConstructor
public class QuizEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    @Transient // Ensures that this field is not persisted to the database
    private List<QuestionEntity> questionEntity; // Assuming you're using this for non-persistent data (e.g., runtime processing)
}

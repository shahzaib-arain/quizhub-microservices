package com.quiz.QuizService.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class QuizEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    public List<QuestionEntity> getQuestionEntity() {
        return questionEntity;
    }

    public void setQuestionEntity(List<QuestionEntity> questionEntity) {
        this.questionEntity = questionEntity;
    }

    transient private List<QuestionEntity> questionEntity;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }


}
